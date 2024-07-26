#!/bin/bash

# Check if nodemon is installed globally
if npm list -g | grep -q "nodemon"; then
    echo "nodemon is already installed globally."
else
    echo "nodemon is not installed globally. Installing..."
    npm install -g nodemon
fi

# Run nodemon with the specified file
nodemon BigONotation/Problems/sorting/quickSort.js