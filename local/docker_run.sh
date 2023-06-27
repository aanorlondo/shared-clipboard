#!/bin/bash

# env vars
source ./prepare_local.sh

# clean first
docker rm -f CLIPBOARDS-MONGO-LOCAL
docker rm -f CLIPBOARDS-WEBAPP-LOCAL

# run the mongo db
docker run \
    -d \
    -p 27017:27017 \
    -e MONGO_INITDB_ROOT_USERNAME=$MONGO_USERNAME \
    -e MONGO_INITDB_ROOT_PASSWORD=$MONGO_PASSWORD \
    -e MONGO_INITDB_DATABASE=$MONGO_DB_NAME \
    -e MONGO_COLLECTION_NAME=$MONGO_COLLECTION_NAME \
    --name CLIPBOARDS-MONGO-LOCAL \
    negan/clipboard-mongo:local


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