#!/bin/bash

# build the mongo db
docker build -t negan/clipboard-mongo:rasp4 ../mongo-init
docker push negan/clipboard-mongo:rasp4

# build the webapp
docker build -t negan/clipboard-webapp:rasp4 ../webapp
docker push negan/clipboard-webapp:rasp4

