# Build Stage
FROM node:18.19.1 AS BUILD_IMAGE
WORKDIR /app
COPY package*.json  tsconfig.json ./

RUN 

RUN yarn
COPY . .
RUN yarn build
#

# Production Stage
FROM node:18.19.1 AS PRODUCTION_STAGE
WORKDIR /app
COPY --from=BUILD_IMAGE /app/package*.json ./
COPY --from=BUILD_IMAGE /app/build ./build
COPY --from=BUILD_IMAGE /app/node_modules ./node_modules
ENV NODE_ENV=production
EXPOSE 3000
CMD ["yarn", "start"]