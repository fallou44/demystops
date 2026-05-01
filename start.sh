#!/bin/sh

# Start the Node.js backend in the background
# We use tsx because the project is set up to run server.ts directly
tsx server.ts &

# Start Nginx in the foreground
nginx -g 'daemon off;'
