#!/bin/bash

export HOSTNAME=$(hostname)

# webapp
export MONGO_USERNAME="username"
export MONGO_PASSWORD="password"
export MONGO_URL="host.docker.internal:27017"
export MONGO_DB_NAME="clipboards"
export MONGO_COLLECTION_NAME="entries"
export BACKEND_PORT="3000"
export BACKEND_ROUTE="clipboards"
export AUTH_SERVER="https://${HOSTNAME}/go-auth"