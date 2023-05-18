# Use the official Node.js image as the base
FROM node:14-alpine

# Set the working directory
WORKDIR /app/backend

# Copy package.json and package-lock.json to the working directory
COPY package.json package-lock.json ./

# Install the dependencies
RUN npm install --production

# Copy the rest of the application code
COPY . .

# Set the command to run the backend application
CMD ["node", "index.js"]
