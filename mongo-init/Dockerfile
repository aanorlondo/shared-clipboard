FROM mongodb-raspberrypi4-unofficial-r6.0.14:latest

# Copy the initialization script to the container
# COPY mongo-init-script.js /docker-entrypoint-initdb.d/
COPY mongo-init-script.sh /docker-entrypoint-initdb.d/

EXPOSE 27017

CMD ["mongod"]