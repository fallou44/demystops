#!/bin/sh

# Start the Node.js backend in the background
# We use ts-node-esm because it supports NestJS dependency injection (metadata)
ts-node-esm server.ts &

# Start Nginx in the foreground
nginx -g 'daemon off;'