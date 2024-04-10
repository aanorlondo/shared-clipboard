#!/bin/bash

# 6.0.14 (07/04/2024)
IMAGE_NAME=r6.0.14-mongodb-raspberrypi-docker-unofficial
FILE_NAME=mongodb.ce.pi4.r6.0.14-mongodb-raspberrypi-docker-unofficial.tar.gz

# 6.1.0 (09/03/2024)
IMAGE_NAME=r6.1.0-rc4-mdb-rpi-docker-unofficial 
FILE_NAME=mongodb-raspberrypi-unofficial-6.1.0-rc4.tar

# 7.0.7 (03/04/2024)
IMAGE_NAME=r7.0.7-mongodb-raspberrypi-docker-unofficial 
FILE_NAME=mongodb.ce.pi4.r7.0.7-mongodb-raspberrypi-docker-unofficial.tar.gz


wget https://github.com/themattman/mongodb-raspberrypi-docker/releases/download/${IMAGE_NAME}/${FILE_NAME}
docker load --input ${FILE_NAME}
docker images