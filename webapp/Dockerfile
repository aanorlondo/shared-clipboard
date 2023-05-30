# Stage 1: Build the Vue.js app
FROM node:14-alpine AS build-stage
WORKDIR /app
COPY package*.json ./
RUN npm install --only=dev
RUN rm -rf ./dist
RUN npm install inherits
COPY . .
RUN npm run build
RUN rm -rf /app/node_modules

# Stage 2: Serve the built app with Node.js
FROM node:14-alpine AS production-stage
WORKDIR /app
COPY package*.json ./
RUN npm install --only=production
COPY --from=build-stage /app/dist /app/dist
COPY server.js ./

EXPOSE 3000
CMD [ "node", "server.js" ]