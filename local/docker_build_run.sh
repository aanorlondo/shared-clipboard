#!/bin/bash

# env vars
source ./prepare_local.sh

# prepare web app env vars
echo "VUE_APP_BACKEND_ROUTE=${BACKEND_ROUTE}" > "../webapp/.env.production"
echo "VUE_APP_AUTH_SERVER=${AUTH_SERVER}" >> "../webapp/.env.production"

bash ./docker_build.sh
bash ./docker_run.sh