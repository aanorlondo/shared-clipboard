#!/bin/bash

# clean first
docker rmi \
    negan/clipboard-mongo:local \
    negan/clipboard-back:local \
    negan/clipboard-front:local


# build the mongo db
docker build -t negan/clipboard-mongo:local ../mongo-init
docker push negan/clipboard-mongo:local


# buildthe backend app
docker build -t negan/clipboard-back:local ../backend-app
docker push negan/clipboard-back:local


# build the frontend app
docker build -t negan/clipboard-front:local ../frontend-app
docker push negan/clipboard-front:local
