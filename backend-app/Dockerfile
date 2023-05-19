# Build and host
FROM node:14-alpine

WORKDIR /app/backend
COPY package.json package-lock.json ./
RUN npm install --production
COPY . .

CMD ["node", "index.js"]
