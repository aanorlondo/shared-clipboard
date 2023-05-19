#!/bin/bash

# source env vars
source prepare_local.sh

# prepare web app env vars
echo "VUE_APP_BACKEND_ROUTE=${BACKEND_ROUTE}" > "../webapp/.env.production"


# clean first
docker rm -f CLIPBOARDS-WEBAPP-LOCAL
docker rmi negan/clipboard-webapp:local


# build the web app
docker build -t negan/clipboard-webapp:local ../webapp
docker push negan/clipboard-webapp:local


# run the web app
docker run \
    -d \
    -p 80:80 \
    -e BACKEND_ROUTE=$BACKEND_ROUTE \
    --name CLIPBOARDS-WEBAPP-LOCAL \
    negan/clipboard-webapp:local