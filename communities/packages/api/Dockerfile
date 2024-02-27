# Use Node 16 alpine as parent image
FROM node:18-alpine

# Change the working directory on the Docker image to /app
WORKDIR /app

# Copy package.json and package-lock.json to the /app directory
COPY package.json  ./

# Install dependencies
RUN yarn install

# Copy the rest of project files into this image
COPY . .

# Build the project
RUN yarn build

# Expose application port
EXPOSE 4000

# Start the application
CMD ["npm", "start"]
