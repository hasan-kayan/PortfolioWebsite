#!/bin/bash

# =============================================================================
# Google Cloud Run Deployment Script
# =============================================================================
# 
# This script builds and deploys the backend to Google Cloud Run
#
# Usage:
#   ./deploy-cloud-run.sh [SERVICE_NAME] [REGION] [PROJECT_ID]
#
# Example:
#   ./deploy-cloud-run.sh portfolio-backend europe-west1 hasankayan-d818c
#
# Requirements:
# - Google Cloud SDK (gcloud) installed and authenticated
# - Docker installed
# - Project ID set in gcloud config or passed as argument
#
# =============================================================================

set -e  # Exit on any error

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Function to print colored messages
print_info() {
    echo -e "${BLUE}ℹ${NC} $1"
}

print_success() {
    echo -e "${GREEN}✓${NC} $1"
}

print_warning() {
    echo -e "${YELLOW}⚠${NC} $1"
}

print_error() {
    echo -e "${RED}✗${NC} $1"
}

# Get parameters or use defaults
SERVICE_NAME=${1:-portfolio-backend}
REGION=${2:-europe-west1}

# Try to get project ID from various sources
if [ -n "$3" ]; then
    # Provided as argument
    PROJECT_ID="$3"
elif [ -f "../.firebaserc" ]; then
    # Try to read from .firebaserc
    PROJECT_ID=$(grep -o '"default": "[^"]*"' ../.firebaserc | cut -d'"' -f4 2>/dev/null || echo "")
fi

# Fallback to gcloud config
if [ -z "$PROJECT_ID" ]; then
    PROJECT_ID=$(gcloud config get-value project 2>/dev/null || echo "")
fi

# Final fallback to default Firebase project
if [ -z "$PROJECT_ID" ]; then
    PROJECT_ID="hasankayan-d818c"
    print_warning "Using default project ID: ${PROJECT_ID}"
fi

# Validate project ID
if [ -z "$PROJECT_ID" ]; then
    print_error "Project ID not found. Please provide it as third argument:"
    echo "   ./deploy-cloud-run.sh [SERVICE_NAME] [REGION] [PROJECT_ID]"
    echo "   Example: ./deploy-cloud-run.sh portfolio-backend europe-west1 hasankayan-d818c"
    exit 1
fi

# Verify project access
print_info "Verifying project access..."
if ! gcloud projects describe "$PROJECT_ID" &>/dev/null; then
    print_error "Cannot access project: ${PROJECT_ID}"
    print_error "Please check:"
    echo "   1. Project ID is correct: ${PROJECT_ID}"
    echo "   2. You have access to this project"
    echo "   3. You are authenticated: gcloud auth login"
    echo "   4. Set correct project: gcloud config set project ${PROJECT_ID}"
    exit 1
fi
print_success "Project access verified: ${PROJECT_ID}"

print_info "🚀 Starting Cloud Run deployment..."
echo
print_info "Service Name: ${SERVICE_NAME}"
print_info "Region: ${REGION}"
print_info "Project ID: ${PROJECT_ID}"
echo

# Check if gcloud is installed
if ! command -v gcloud &> /dev/null; then
    print_error "gcloud CLI is not installed. Please install it from: https://cloud.google.com/sdk/docs/install"
    exit 1
fi

# Check if Docker is installed
if ! command -v docker &> /dev/null; then
    print_error "Docker is not installed. Please install Docker first."
    exit 1
fi

# Check if user is authenticated
if ! gcloud auth list --filter=status:ACTIVE --format="value(account)" | grep -q .; then
    print_error "Not authenticated with gcloud. Please run: gcloud auth login"
    exit 1
fi

# Set the project
print_info "Setting GCP project..."
if gcloud config set project "$PROJECT_ID" 2>/dev/null; then
    print_success "Project set to ${PROJECT_ID}"
else
    print_warning "Could not set project in gcloud config, but continuing..."
fi

# Enable required APIs (continue even if some fail)
print_info "Enabling required Google Cloud APIs..."
ENABLED_APIS=0
FAILED_APIS=0

for API in cloudbuild.googleapis.com run.googleapis.com containerregistry.googleapis.com; do
    if gcloud services enable "$API" --project="$PROJECT_ID" --quiet 2>/dev/null; then
        ((ENABLED_APIS++))
    else
        print_warning "Could not enable $API (may already be enabled or need permissions)"
        ((FAILED_APIS++))
    fi
done

if [ $ENABLED_APIS -gt 0 ]; then
    print_success "Enabled $ENABLED_APIS API(s)"
fi

if [ $FAILED_APIS -gt 0 ]; then
    print_warning "$FAILED_APIS API(s) could not be enabled. They may already be enabled."
    print_info "If deployment fails, ensure these APIs are enabled manually:"
    echo "   - Cloud Build API"
    echo "   - Cloud Run API"
    echo "   - Container Registry API"
    echo
fi

# Build the Docker image
print_info "Building Docker image..."
IMAGE_NAME="gcr.io/${PROJECT_ID}/${SERVICE_NAME}"

# Try Cloud Build first
BUILD_METHOD="cloud"
print_info "Starting Cloud Build (this may take a few minutes)..."
if ! gcloud builds submit --tag "$IMAGE_NAME" --project "$PROJECT_ID"; then
    BUILD_EXIT_CODE=$?
    print_warning "Cloud Build failed (exit code: $BUILD_EXIT_CODE)"
    
    # Get the latest build log
    print_info "Checking build logs..."
    LATEST_BUILD=$(gcloud builds list --limit=1 --project="$PROJECT_ID" --format="value(id)" 2>/dev/null || echo "")
    if [ -n "$LATEST_BUILD" ]; then
        print_info "Latest build ID: $LATEST_BUILD"
        print_info "View logs: gcloud builds log $LATEST_BUILD --project=$PROJECT_ID"
    fi
    
    # Check if it's a permission error
    if gcloud builds list --limit=1 --project="$PROJECT_ID" --filter="status=FAILURE" --format="value(failureInfo.detail)" 2>/dev/null | grep -q "PERMISSION_DENIED"; then
        print_warning "Cloud Build permission denied, trying local Docker build..."
        BUILD_METHOD="local"
    else
        print_error "Cloud Build failed! Trying local Docker build as fallback..."
        BUILD_METHOD="local"
    fi
fi

# If Cloud Build failed, try local build
if [ "$BUILD_METHOD" = "local" ]; then
    # Check if Docker is running
    if ! docker info &>/dev/null; then
        print_error "Docker is not running!"
        print_error "Please start Docker Desktop and try again."
        exit 1
    fi
    
    # Configure Docker for gcloud
    print_info "Configuring Docker for gcloud..."
    gcloud auth configure-docker --quiet 2>/dev/null || true
    
    # Build locally
    print_info "Building Docker image locally..."
    if ! docker build -t "$IMAGE_NAME" .; then
        print_error "Local Docker build failed!"
        print_error "Make sure Docker is running and you have Docker installed."
        exit 1
    fi
    
    # Push to Container Registry
    print_info "Pushing image to Container Registry..."
    if ! docker push "$IMAGE_NAME"; then
        print_error "Failed to push image to Container Registry!"
        print_error "Make sure you have permission to push to gcr.io/${PROJECT_ID}"
        print_info "You may need to run: gcloud auth configure-docker"
        exit 1
    fi
    print_success "Docker image built and pushed successfully: ${IMAGE_NAME}"
else
    print_success "Docker image built successfully with Cloud Build: ${IMAGE_NAME}"
fi

# Deploy to Cloud Run
print_info "Deploying to Cloud Run..."
echo

# Check if service already exists
SERVICE_EXISTS=false
if gcloud run services describe "$SERVICE_NAME" --region="$REGION" --project="$PROJECT_ID" &>/dev/null; then
    print_info "Service exists, updating..."
    SERVICE_EXISTS=true
else
    print_info "Service does not exist, creating new service..."
fi

# Deploy to Cloud Run
# Note: Environment variables should be set separately after deployment
# or use: --set-env-vars KEY=VALUE during deployment

# Deploy to Cloud Run
# Note: PORT is automatically set by Cloud Run, don't set it manually
if ! gcloud run deploy "$SERVICE_NAME" \
    --image "$IMAGE_NAME" \
    --platform managed \
    --region "$REGION" \
    --project "$PROJECT_ID" \
    --allow-unauthenticated \
    --port 8080 \
    --memory 512Mi \
    --cpu 1 \
    --min-instances 0 \
    --max-instances 10 \
    --timeout 300 \
    --concurrency 80 \
    --set-env-vars "NODE_ENV=production"; then
    print_error "Cloud Run deployment failed!"
    exit 1
fi

# Get the service URL
SERVICE_URL=$(gcloud run services describe "$SERVICE_NAME" --region="$REGION" --project="$PROJECT_ID" --format="value(status.url)")

print_success "✅ Deployment completed successfully!"
echo
print_info "Service URL: ${SERVICE_URL}"
print_info "Health check: ${SERVICE_URL}/health"
echo

# Check if environment variables are already set
print_info "Checking current environment variables..."
ENV_VARS=$(gcloud run services describe "$SERVICE_NAME" --region="$REGION" --project="$PROJECT_ID" --format="value(spec.template.spec.containers[0].env)" 2>/dev/null || echo "")

if echo "$ENV_VARS" | grep -q "FIREBASE_PROJECT_ID"; then
    print_success "Environment variables are already configured"
else
    print_warning "⚠️  Important: Set environment variables before using the service!"
    echo
    print_info "Required environment variables:"
    echo "   - FIREBASE_PROJECT_ID=${PROJECT_ID}"
    echo "   - FIREBASE_STORAGE_BUCKET=${PROJECT_ID}.appspot.com"
    echo "   - FIREBASE_SERVICE_ACCOUNT_KEY (as Secret Manager secret - recommended)"
    echo "   - JWT_SECRET (as Secret Manager secret - recommended)"
    echo
    print_info "Quick setup command:"
    echo "   gcloud run services update ${SERVICE_NAME} --region=${REGION} \\"
    echo "     --set-env-vars FIREBASE_PROJECT_ID=${PROJECT_ID} \\"
    echo "     --set-env-vars FIREBASE_STORAGE_BUCKET=${PROJECT_ID}.appspot.com"
    echo
    print_info "For sensitive data (recommended), use Secret Manager:"
    echo "   1. Create secrets:"
    echo "      gcloud secrets create firebase-service-account-key --data-file=serviceAccountKey.json"
    echo "      echo -n 'your-jwt-secret' | gcloud secrets create jwt-secret --data-file=-"
    echo "   2. Update service:"
    echo "      gcloud run services update ${SERVICE_NAME} --region=${REGION} \\"
    echo "        --update-secrets FIREBASE_SERVICE_ACCOUNT_KEY=firebase-service-account-key:latest,JWT_SECRET=jwt-secret:latest"
    echo
fi

print_info "📝 Next steps:"
echo "   1. Set environment variables (see above)"
echo "   2. Update frontend with API URL: ${SERVICE_URL}"
echo "   3. Test health endpoint: curl ${SERVICE_URL}/health"
echo "   4. Update CORS settings if needed"
echo

