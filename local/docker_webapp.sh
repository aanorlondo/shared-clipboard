#!/bin/bash

# source env vars
source prepare_local.sh

# prepare web app env vars
echo "VUE_APP_BACKEND_ROUTE=${BACKEND_ROUTE}" > "../webapp/.env.production"
echo "VUE_APP_AUTH_SERVER=${AUTH_SERVER}" >> "../webapp/.env.production"


# clean first
docker rm -f CLIPBOARDS-WEBAPP-LOCAL
docker rmi negan/clipboard-webapp:local


# build the web app
docker build -t negan/clipboard-webapp:local ../webapp
docker push negan/clipboard-webapp:local


# run the backend app
docker run \
    -d \
    -p 3000:3000 \
    -e MONGO_USERNAME=$MONGO_USERNAME \
    -e MONGO_PASSWORD=$MONGO_PASSWORD \
    -e MONGO_URL=$MONGO_URL \
    -e MONGO_DB_NAME=$MONGO_DB_NAME \
    -e MONGO_COLLECTION_NAME=$MONGO_COLLECTION_NAME \
    -e BACKEND_PORT=$BACKEND_PORT \
    -e BACKEND_ROUTE=$BACKEND_ROUTE \
    -e AUTH_SERVER=$AUTH_SERVER \
    --name CLIPBOARDS-WEBAPP-LOCAL \
    negan/clipboard-webapp:local