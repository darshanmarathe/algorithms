#!/bin/bash


# Check if a commit message is provided
if [[ $# -eq 0 ]]; then
    echo "Please provide a commit message."
    exit 1
fi

# Add all changes to the staging area
# sed -i -e 's/\r$//' scriptname.sh
git add .

# Commit changes with the provided message
COMMIT_MESSAGE="$1"
git commit -m "$COMMIT_MESSAGE"


# Push changes to the remote repository (assuming 'origin' as the remote)
git push

echo "Changes committed and pushed successfully!"
