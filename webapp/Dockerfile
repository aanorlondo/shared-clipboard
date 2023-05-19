# Stage 1: Build the Vue.js app
FROM node:latest AS build-stage
WORKDIR /app
COPY package*.json ./
RUN npm install --only=dev
COPY . .
RUN npm run build

# Stage 2: Serve the built app with Node.js
FROM node:latest AS production-stage
WORKDIR /app
COPY backend/package*.json ./
RUN npm install --only=production
COPY --from=build-stage /app/dist /app/dist
COPY . .

EXPOSE 3000
CMD [ "node", "server.js" ]