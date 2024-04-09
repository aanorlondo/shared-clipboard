#!/bin/bash

# clean first
docker rmi \
    negan/clipboard-mongo:local \
    negan/clipboard-webapp:local

# build the mongo db
docker build -t negan/clipboard-mongo:local ../mongo-init
docker push negan/clipboard-mongo:local

# build the webapp
docker build -t negan/clipboard-webapp:local ../webapp
docker push negan/clipboard-webapp:local
