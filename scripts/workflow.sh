#!/bin/bash

sh ./kube_clean.sh
sh ./docker_build.sh
sh ./docker_push.sh
sh ./kube_apply.sh