#!/bin/bash

# Check if a commit message is provided as an argument
if [ -z "$1" ]; then
  echo "Please provide a commit message."
  exit 1
fi

commit_message="$1"

# Add all changes
git add .

# Commit with the provided commit message
git commit -m "$commit_message"

# Push changes to default branch
git push

# Push changes to Heroku branch (assuming the branch name is 'main')
git push heroku main
