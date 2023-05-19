#!/bin/bash

# source env vars
source prepare_local.sh

# prepare front-end app
echo "VUE_APP_BACKEND_HOST=${BACKEND_HOST}" > "../frontend-app/.env.production" 
echo "VUE_APP_BACKEND_PORT=${BACKEND_PORT}" >> "../frontend-app/.env.production" 
echo "VUE_APP_BACKEND_ROUTE=${BACKEND_ROUTE}" >> "../frontend-app/.env.production"


# clean first
docker rm -f CLIPBOARDS-FRONTEND-LOCAL
docker rmi negan/clipboard-front:local


# build the frontend app
docker build -t negan/clipboard-front:local ../frontend-app
docker push negan/clipboard-front:local


# run the frontend app
docker run \
    -d \
    -p 80:80 \
    -e BACKEND_HOST=$BACKEND_HOST \
    -e BACKEND_PORT=$BACKEND_PORT \
    -e BACKEND_ROUTE=$BACKEND_ROUTE \
    --name CLIPBOARDS-FRONTEND-LOCAL \
    negan/clipboard-front:local