# Build Stage
FROM node:20.9.0-alpine AS BUILD_IMAGE
WORKDIR /app

# Copier les fichiers nécessaires
COPY package*.json ./
COPY next.config.js ./

# Nettoyer le cache npm et installer les dépendances
RUN npm update
RUN npm install

# Copier le reste des fichiers et construire l'application
COPY . .
RUN npm run build

# Production Stage
FROM node:20.9.0-alpine AS PRODUCTION_STAGE
WORKDIR /app

# Copier les fichiers depuis le Build Stage
COPY --from=BUILD_IMAGE /app/package*.json ./
COPY --from=BUILD_IMAGE /app/next.config.js ./
COPY --from=BUILD_IMAGE /app/.next ./.next
COPY --from=BUILD_IMAGE /app/public ./public
COPY --from=BUILD_IMAGE /app/node_modules ./node_modules

# Configurer l'environnement de production
ENV NODE_ENV=production
EXPOSE 3000

# Démarrer l'application
CMD ["npm", "start"]
