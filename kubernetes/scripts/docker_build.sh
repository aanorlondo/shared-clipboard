#!/bin/bash

# Build and tag Docker images
docker build -t negan/clipboard-mongo:latest ../../mongo-init
docker build -t negan/clipboard-webapp:latest ../../webapp


# Prepare and build webapp
echo "VUE_APP_BACKEND_ROUTE=${BACKEND_ROUTE}" > "../../webapp/.env.production"

docker build -t negan/clipboard-webapp:latest ../../webapp