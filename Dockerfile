# Base image
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package.json yarn.lock ./

# Install dependencies
RUN yarn install --frozen-lockfile

# Copy the rest of the application
COPY . .

# Build the application using Yarn
RUN yarn build

# Expose a port for TCP communication (e.g., 5000)
EXPOSE 3002

# Start the application
CMD ["yarn", "start:prod"]
