#!/bin/bash

# =============================================================================
# Cloud Run Environment Variables Setup Script
# =============================================================================
# 
# This script sets up environment variables for the Cloud Run service
#
# Usage:
#   ./setup-env-vars.sh [SERVICE_NAME] [REGION] [PROJECT_ID]
#
# Example:
#   ./setup-env-vars.sh portfolio-backend europe-west1 hasankayan-d818c
#
# =============================================================================

set -e

# Colors
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m'

print_info() { echo -e "${BLUE}ℹ${NC} $1"; }
print_success() { echo -e "${GREEN}✓${NC} $1"; }
print_warning() { echo -e "${YELLOW}⚠${NC} $1"; }
print_error() { echo -e "${RED}✗${NC} $1"; }

# Get parameters
SERVICE_NAME=${1:-portfolio-backend}
REGION=${2:-europe-west1}
PROJECT_ID=${3:-hasankayan-d818c}

print_info "Setting up environment variables for Cloud Run service..."
echo
print_info "Service: ${SERVICE_NAME}"
print_info "Region: ${REGION}"
print_info "Project: ${PROJECT_ID}"
echo

# Check if service exists
if ! gcloud run services describe "$SERVICE_NAME" --region="$REGION" --project="$PROJECT_ID" &>/dev/null; then
    print_error "Service ${SERVICE_NAME} not found in region ${REGION}"
    exit 1
fi

# Set basic environment variables
print_info "Setting basic environment variables..."
gcloud run services update "$SERVICE_NAME" \
    --region="$REGION" \
    --project="$PROJECT_ID" \
    --set-env-vars "FIREBASE_PROJECT_ID=${PROJECT_ID}" \
    --set-env-vars "FIREBASE_STORAGE_BUCKET=${PROJECT_ID}.appspot.com" \
    --set-env-vars "NODE_ENV=production"

print_success "Basic environment variables set"
echo

# Ask about Secret Manager
read -p "Do you want to use Secret Manager for sensitive data? (y/n) " -n 1 -r
echo
if [[ $REPLY =~ ^[Yy]$ ]]; then
    print_info "Setting up Secret Manager secrets..."
    
    # Check if serviceAccountKey.json exists
    if [ -f "serviceAccountKey.json" ]; then
        print_info "Creating firebase-service-account-key secret..."
        if gcloud secrets describe firebase-service-account-key --project="$PROJECT_ID" &>/dev/null; then
            print_warning "Secret firebase-service-account-key already exists, updating..."
            gcloud secrets versions add firebase-service-account-key \
                --data-file=serviceAccountKey.json \
                --project="$PROJECT_ID"
        else
            gcloud secrets create firebase-service-account-key \
                --data-file=serviceAccountKey.json \
                --project="$PROJECT_ID"
        fi
        print_success "firebase-service-account-key secret created/updated"
    else
        print_warning "serviceAccountKey.json not found, skipping..."
    fi
    
    # JWT Secret
    read -p "Enter JWT secret (or press Enter to skip): " JWT_SECRET
    if [ -n "$JWT_SECRET" ]; then
        print_info "Creating jwt-secret..."
        if gcloud secrets describe jwt-secret --project="$PROJECT_ID" &>/dev/null; then
            print_warning "Secret jwt-secret already exists, updating..."
            echo -n "$JWT_SECRET" | gcloud secrets versions add jwt-secret \
                --data-file=- \
                --project="$PROJECT_ID"
        else
            echo -n "$JWT_SECRET" | gcloud secrets create jwt-secret \
                --data-file=- \
                --project="$PROJECT_ID"
        fi
        print_success "jwt-secret created/updated"
    fi
    
    # Update service with secrets
    print_info "Updating service with secrets..."
    SECRETS_CMD="gcloud run services update $SERVICE_NAME --region=$REGION --project=$PROJECT_ID"
    
    if gcloud secrets describe firebase-service-account-key --project="$PROJECT_ID" &>/dev/null; then
        SECRETS_CMD="$SECRETS_CMD --update-secrets FIREBASE_SERVICE_ACCOUNT_KEY=firebase-service-account-key:latest"
    fi
    
    if gcloud secrets describe jwt-secret --project="$PROJECT_ID" &>/dev/null; then
        SECRETS_CMD="$SECRETS_CMD --update-secrets JWT_SECRET=jwt-secret:latest"
    fi
    
    if [ "$SECRETS_CMD" != "gcloud run services update $SERVICE_NAME --region=$REGION --project=$PROJECT_ID" ]; then
        eval $SECRETS_CMD
        print_success "Secrets attached to service"
    else
        print_warning "No secrets to attach"
    fi
else
    print_warning "Skipping Secret Manager setup"
    print_info "To set environment variables manually, use:"
    echo "   gcloud run services update ${SERVICE_NAME} --region=${REGION} \\"
    echo "     --set-env-vars FIREBASE_SERVICE_ACCOUNT_KEY='<json-string>' \\"
    echo "     --set-env-vars JWT_SECRET='<secret>'"
fi

echo
print_success "✅ Environment variables setup completed!"
echo
print_info "Service URL:"
SERVICE_URL=$(gcloud run services describe "$SERVICE_NAME" --region="$REGION" --project="$PROJECT_ID" --format="value(status.url)")
echo "   ${SERVICE_URL}"
echo
print_info "Test health endpoint:"
echo "   curl ${SERVICE_URL}/health"
echo

