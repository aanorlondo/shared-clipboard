# Build stage
FROM node:latest as build-stage
WORKDIR /app/frontend
COPY package.json package-lock.json ./
RUN npm install
COPY . .

RUN rm -rf dist
RUN npm run build

# Production stage
FROM nginx:latest as production-stage
RUN mkdir -p /app/
COPY --from=build-stage /app/frontend /app 
COPY --from=build-stage /app/frontend/dist /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]