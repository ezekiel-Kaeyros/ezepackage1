# Build Stage
FROM node:20.11.1-alpine AS BUILD_IMAGE
WORKDIR /app
COPY package*.json ./
RUN yarn install
COPY . .
WORKDIR /app/packages/frontend
RUN  yarn add styled-components
RUN yarn install
RUN yarn add styled-components
RUN yarn add react-i18next
RUN yarn add next-i18next
RUN yarn add @types/i18next @types/react-i18next 
RUN  yarn build

# Reset the working directory


# Production Stage
FROM node:20.11.1-alpine AS PRODUCTION_STAGE
WORKDIR /app
COPY --from=BUILD_IMAGE /app/package*.json ./
COPY --from=BUILD_IMAGE /app/packages/frontend ./packages/frontend
COPY --from=BUILD_IMAGE /app/node_modules ./node_modules
ENV NODE_ENV=production
EXPOSE 3000
###
WORKDIR /app/packages/frontend
CMD ["yarn", "start"]
