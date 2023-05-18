#!/bin/bash

# Push Docker images to Docker Hub
docker push negan/clipboard-mongo:latest
docker push negan/clipboard-back:latest
docker push negan/clipboard-front:latest