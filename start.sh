#!/bin/sh

# Start the Node.js backend in the background
# We run the compiled JavaScript version for maximum stability and speed
node dist-backend/server.js &

# Start Nginx in the foreground
nginx -g 'daemon off;'