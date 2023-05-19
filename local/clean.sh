#!/bin/bash

docker rm -f CLIPBOARDS-MONGO
docker rm -f CLIPBOARDS-BACKEND
docker rm -f CLIPBOARDS-FRONTEND

docker rmi \
    negan/clipboard-mongo:latest \
    negan/clipboard-back:latest \
    negan/clipboard-front:latest
