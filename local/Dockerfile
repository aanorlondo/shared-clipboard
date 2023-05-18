FROM mongo:latest

# Copy the initialization script to the container
COPY mongo-init-script.js /docker-entrypoint-initdb.d/

# Expose the default MongoDB port
EXPOSE 27017