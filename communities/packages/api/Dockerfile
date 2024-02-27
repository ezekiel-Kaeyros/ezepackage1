FROM node:18-alpine

WORKDIR /app

COPY package.json .

RUN yarn

RUN yarn build

# RUN npm install -g nodemon

COPY . .

EXPOSE 4000

CMD ["npm", "start"]