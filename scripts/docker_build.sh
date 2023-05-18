#!/bin/bash

# Build and tag Docker images
docker build -t negan/clipboard-back:latest ../backend-app
docker build -t negan/clipboard-front:latest ../frontend-app