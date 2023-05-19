#!/bin/bash

# env vars
source ./prepare_local.sh

sh ./docker_clean.sh
sh ./docker_build.sh
sh ./docker_run.sh