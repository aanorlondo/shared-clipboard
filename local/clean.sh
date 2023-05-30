#!/bin/bash

docker rm -f CLIPBOARDS-MONGO-LOCAL
docker rm -f CLIPBOARDS-WEBAPP-LOCAL

docker rmi \
    negan/clipboard-mongo:local \
    negan/clipboard-webapp:local
