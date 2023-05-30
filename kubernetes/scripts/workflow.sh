#!/bin/bash

# env vars
source ./prepare_prod.sh

sh ./kube_clean.sh
sh ./docker_build.sh
sh ./docker_push.sh
sh ./kube_apply.sh