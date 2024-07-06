# Build Stage
FROM node:18-alpine AS BUILD_IMAGE
WORKDIR /app
COPY package*.json ./
RUN yarn install
COPY . .
WORKDIR /app/packages/frontend
RUN  yarn add styled-components && yarn build

# Reset the working directory
WORKDIR /app

# Production Stage
FROM node:18-alpine AS PRODUCTION_STAGE
WORKDIR /app
COPY --from=BUILD_IMAGE /app/package*.json ./
COPY --from=BUILD_IMAGE /app/packages/frontend ./packages/frontend
COPY --from=BUILD_IMAGE /app/node_modules ./node_modules
ENV NODE_ENV=production
EXPOSE 3000
###
WORKDIR /app/packages/frontend
CMD ["yarn", "start"]
