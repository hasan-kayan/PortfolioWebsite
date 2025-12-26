#!/bin/bash

# =============================================================================
# Deployment Script for Portfolio Website
# =============================================================================
# 
# This script automates the deployment process with version management.
# 
# Features:
# - Automatic version bumping (major, minor1, or minor2)
# - Updates package.json and src/config/version.ts
# - Creates git tags
# - Builds the application
# - Deploys to Firebase Hosting
#
# Usage:
#   ./deploy.sh
#
# Version Format: V1.0.0 (major.minor1.minor2)
# - Major: Breaking changes (V1.0.0 → V2.0.0)
# - Minor1: New features (V1.0.0 → V1.1.0)
# - Minor2: Bug fixes/patches (V1.0.0 → V1.0.1)
#
# Requirements:
# - Node.js and npm installed
# - Firebase CLI installed and logged in
# - Git repository initialized
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

# Function to get current version from package.json
get_current_version() {
    local version=$(node -p "require('./package.json').version")
    echo "$version"
}

# Function to increment version
increment_version() {
    local version=$1
    local increment_type=$2
    
    # Remove 'V' prefix if exists
    version=${version#V}
    
    IFS='.' read -r major minor1 minor2 <<< "$version"
    
    case $increment_type in
        major)
            major=$((major + 1))
            minor1=0
            minor2=0
            ;;
        minor1)
            minor1=$((minor1 + 1))
            minor2=0
            ;;
        minor2)
            minor2=$((minor2 + 1))
            ;;
        *)
            print_error "Invalid increment type: $increment_type"
            exit 1
            ;;
    esac
    
    echo "V${major}.${minor1}.${minor2}"
}

# Function to update package.json version
update_package_json() {
    local new_version=$1
    # Remove 'V' prefix for package.json (npm doesn't use V prefix)
    local npm_version=${new_version#V}
    
    # Use node to update package.json
    node -e "
        const fs = require('fs');
        const pkg = JSON.parse(fs.readFileSync('package.json', 'utf8'));
        pkg.version = '$npm_version';
        fs.writeFileSync('package.json', JSON.stringify(pkg, null, 2) + '\n');
    "
    
    print_success "Updated package.json version to $npm_version"
}

# Function to update version.ts file
update_version_file() {
    local new_version=$1
    
    # Use node to properly parse and create the version file
    node -e "
        const fs = require('fs');
        const version = '${new_version}';
        const versionNum = version.replace(/^V/, '');
        const parts = versionNum.split('.').map(Number);
        const [major, minor1, minor2] = parts;
        
        const content = \`// Auto-generated version file - Do not edit manually
// This file is updated automatically by deploy.sh

export const APP_VERSION = '\${version}';
export const APP_VERSION_NUMBER = '\${versionNum}';

// Version info for display
export const versionInfo = {
  version: '\${version}',
  major: \${major},
  minor1: \${minor1},
  minor2: \${minor2},
};
\`;
        
        // Ensure directory exists
        const dir = 'src/config';
        if (!fs.existsSync(dir)) {
            fs.mkdirSync(dir, { recursive: true });
        }
        
        fs.writeFileSync('src/config/version.ts', content);
    "
    
    print_success "Updated src/config/version.ts with version ${new_version}"
}

# Function to check if git is clean
check_git_status() {
    # Check if there are uncommitted changes (excluding version files and index.html we're about to commit)
    local other_changes=$(git status --porcelain | grep -v "package.json" | grep -v "src/config/version.ts" | grep -v "index.html" | grep -v "^??")
    
    if [ -n "$other_changes" ]; then
        print_warning "You have uncommitted changes in other files:"
        echo "$other_changes" | head -5
        echo
        print_info "Version files (package.json, src/config/version.ts) and index.html will be committed."
        read -p "Continue with deployment? (y/n) " -n 1 -r
        echo
        if [[ ! $REPLY =~ ^[Yy]$ ]]; then
            print_info "Deployment cancelled."
            exit 0
        fi
    fi
}

# Main deployment function
main() {
    print_info "🚀 Starting deployment process..."
    echo
    
    # Get current version
    current_version=$(get_current_version)
    current_version_with_v="V${current_version}"
    
    print_info "Current version: ${current_version_with_v}"
    echo
    
    # Ask user which version to increment
    print_info "Which version component would you like to increment?"
    echo "  1) Major (e.g., V1.0.0 → V2.0.0)"
    echo "  2) Minor1 (e.g., V1.0.0 → V1.1.0)"
    echo "  3) Minor2 (e.g., V1.0.0 → V1.0.1)"
    echo
    read -p "Enter your choice (1/2/3): " choice
    
    case $choice in
        1)
            increment_type="major"
            ;;
        2)
            increment_type="minor1"
            ;;
        3)
            increment_type="minor2"
            ;;
        *)
            print_error "Invalid choice. Exiting."
            exit 1
            ;;
    esac
    
    # Calculate new version
    new_version=$(increment_version "$current_version_with_v" "$increment_type")
    
    print_info "New version will be: ${new_version}"
    read -p "Confirm deployment? (y/n) " -n 1 -r
    echo
    if [[ ! $REPLY =~ ^[Yy]$ ]]; then
        print_info "Deployment cancelled."
        exit 0
    fi
    
    echo
    print_info "📝 Updating version files..."
    update_package_json "$new_version"
    update_version_file "$new_version"
    
    echo
    print_info "🔨 Building application..."
    # Set Cloud Run backend URL for production build
    export VITE_API_BASE_URL="https://portfolio-backend-755717652800.europe-west1.run.app"
    print_info "Using Cloud Run backend: ${VITE_API_BASE_URL}"
    npm run build:all
    if [ $? -ne 0 ]; then
        print_error "Build failed. Deployment aborted."
        exit 1
    fi
    print_success "Build completed successfully"
    
    echo
    print_info "📦 Git operations..."
    
    # Stash any uncommitted changes
    if ! git diff-index --quiet HEAD -- || ! git diff --staged --quiet; then
        print_info "Stashing uncommitted changes..."
        git stash push -m "Auto-stash before deployment ${new_version}"
        print_success "Changes stashed"
    fi
    
    # Pull latest changes from remote
    print_info "Pulling latest changes from remote..."
    if git pull origin main --rebase 2>&1; then
        print_success "Pulled latest changes from origin/main"
    else
        pull_error=$?
        print_warning "Failed to pull from remote. Continuing with local changes..."
    fi
    
    # Apply stashed changes if any
    if git stash list | grep -q "Auto-stash before deployment"; then
        print_info "Applying stashed changes..."
        if git stash pop 2>&1; then
            print_success "Applied stashed changes"
        else
            print_warning "Stash apply had conflicts. Please resolve manually."
            print_info "You can view conflicts with: git status"
        fi
    fi
    
    check_git_status
    
    # Stage and commit version files and index.html (for SEO updates)
    git add package.json src/config/version.ts index.html
    
    # Check if there are actually changes to commit
    if git diff --staged --quiet; then
        print_warning "No changes to commit. Files may already be at this version."
    else
        git commit -m "chore: bump version to ${new_version} and update index.html"
        print_success "Committed version and index.html changes"
    fi
    
    # Create git tag
    if git rev-parse "${new_version}" >/dev/null 2>&1; then
        print_warning "Tag ${new_version} already exists. Skipping tag creation."
    else
        git tag -a "${new_version}" -m "Release ${new_version}"
        print_success "Created git tag: ${new_version}"
    fi
    
    echo
    print_info "📤 Pushing to Git repository..."
    # Try to push commits and tags
    if git push origin main 2>&1; then
        print_success "Pushed commits to origin/main"
    else
        push_error=$?
        print_warning "Failed to push commits. This might be due to branch protection rules."
        print_info "You may need to push manually or create a pull request."
    fi
    
    # Push tags separately
    if git push origin "${new_version}" 2>&1; then
        print_success "Pushed tag ${new_version} to origin"
    else
        print_warning "Failed to push tag. You can push it manually with: git push origin ${new_version}"
    fi
    
    echo
    print_info "🚀 Deploying to Firebase Hosting..."
    firebase deploy --only hosting
    
    if [ $? -eq 0 ]; then
        echo
        print_success "✅ Deployment completed successfully!"
        print_success "Version ${new_version} is now live!"
        echo
        
        # Check if push was successful
        if [ ${push_error:-0} -ne 0 ]; then
            echo
            print_warning "⚠️  Git push failed. Possible reasons:"
            echo "   - Branch protection rules (main branch requires PR)"
            echo "   - Repository rules violation"
            echo "   - Missing permissions"
            echo
            print_info "To push manually:"
            echo "   git push origin main"
            echo "   git push origin ${new_version}"
        fi
    else
        print_error "Deployment failed!"
        exit 1
    fi
}

# Run main function
main

