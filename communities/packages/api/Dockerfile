# Use Node 16 alpine as parent image
FROM node:16-alpine

# Change the working directory on the Docker image to /app
WORKDIR /app

# Copy package.json and package-lock.json to the /app directory
COPY package.json ./

# RUN npm install -g npm@10.4.0

# Install dependencies
RUN npm install

RUN npm install -g typescript

# Copy the rest of project files into this image
COPY . .

# Build the project
RUN API_PORT=4000 \
    API_URL=http://ec2-3-69-225-24.eu-central-1.compute.amazonaws.com:4000 \
    NODE_ENV=production \
    SECRET=WriteYourSecret \
    FRONTEND_URL=http://ec2-3-69-225-24.eu-central-1.compute.amazonaws.com:3002 \
    MONGO_URL=mongodb+srv://eze:nMWN2NG50nSLJrOC@eze-communities.ufwbl4d.mongodb.net/?retryWrites=true&w=majority \
    CLOUDINARY_CLOUD_NAME=dyekwrvwe \
    CLOUDINARY_API_KEY=981519692274267 \
    CLOUDINARY_SECRET=EnwDIzzscMxY5SacVWoqUXE0mzw \
    MAILGUN_API_KEY=YOUR_MAILGUN_API_KEY \
    MAILGUN_DOMAIN=YOUR_MAILGUN_DOMAIN \
    npm run build

# Expose application port
EXPOSE 4000

# Start the application
CMD ["npm", "start"]