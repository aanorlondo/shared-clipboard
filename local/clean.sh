#!/bin/bash

docker rm -f CLIPBOARDS-MONGO-LOCAL
docker rm -f CLIPBOARDS-BACKEND-LOCAL
docker rm -f CLIPBOARDS-FRONTEND-LOCAL

docker rmi \
    negan/clipboard-mongo:local \
    negan/clipboard-back:local \
    negan/clipboard-front:local
