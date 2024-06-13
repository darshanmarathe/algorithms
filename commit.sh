#!/bin/bash

# Set your Git username and email
GIT_USERNAME="YourUsername"
GIT_EMAIL="your@email.com"

# Check if a commit message is provided
if [[ $# -eq 0 ]]; then
    echo "Please provide a commit message."
    exit 1
fi

# Add all changes to the staging area
git add .

# Commit changes with the provided message
COMMIT_MESSAGE="$1"
git commit -m "$COMMIT_MESSAGE"

# Set the Git user details
git config user.name "$GIT_USERNAME"
git config user.email "$GIT_EMAIL"

# Push changes to the remote repository (assuming 'origin' as the remote)
git push origin master

echo "Changes committed and pushed successfully!"
