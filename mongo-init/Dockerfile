FROM mongo:latest

# Copy the initialization script to the container
COPY mongo-init-script.js /docker-entrypoint-initdb.d/

EXPOSE 27017

CMD ["mongod"]