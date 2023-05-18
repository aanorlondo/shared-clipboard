# Stage 1: Build the Vue.js app
FROM node:14-alpine as build-stage

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package.json package-lock.json ./

# Install the dependencies
RUN npm install

# Generate .env file
RUN echo "VUE_APP_BACKEND_HOST=$BACKEND_HOST" > .env \
    && echo "VUE_APP_BACKEND_PORT=$BACKEND_PORT" >> .env \
    && echo "VUE_APP_BACKEND_ROUTE=$BACKEND_ROUTE" >> .env

# Copy the rest of the application code
COPY . .

# Build the Vue.js app
RUN npm run build

# Stage 2: Serve the built app
FROM node:14-alpine

# Set the working directory
WORKDIR /app

# Copy the built app from the previous stage
COPY --from=build-stage /app/dist .

# Install a simple web server
RUN npm install -g http-server

# Expose the default HTTP port
EXPOSE 80

# Set the entrypoint script
COPY entrypoint.sh /app/entrypoint.sh
RUN chmod +x /app/entrypoint.sh
ENTRYPOINT ["sh", "/app/entrypoint.sh"]
