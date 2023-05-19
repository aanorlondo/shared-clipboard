#!/bin/bash

# Build and tag Docker images
docker build -t negan/clipboard-mongo:latest ../mongo-init
docker build -t negan/clipboard-back:latest ../backend-app


# Prepare and build front
echo "VUE_APP_BACKEND_HOST=${BACKEND_HOST}" > "../frontend-app/.env.production" 
echo "VUE_APP_BACKEND_ROUTE=${BACKEND_ROUTE}" >> "../frontend-app/.env.production"

docker build -t negan/clipboard-front:latest ../frontend-app