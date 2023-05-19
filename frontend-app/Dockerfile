# Build stage
FROM node:14-alpine as build-stage
WORKDIR /app/frontend
COPY package.json package-lock.json ./
RUN npm install
COPY . .

# Write the env vars
RUN echo "VUE_APP_BACKEND_HOST=${BACKEND_HOST}" >> "./.env" \
    && echo "VUE_APP_BACKEND_PORT=${BACKEND_PORT}" >> "./.env" \
    && echo "VUE_APP_BACKEND_ROUTE=${BACKEND_ROUTE}" >> "./.env"


RUN rm -rf dist
RUN npm run build

# Production stage
FROM nginx:stable-alpine as production-stage
COPY --from=build-stage /app/frontend/dist /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]