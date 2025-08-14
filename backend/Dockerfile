FROM node:18-alpine

WORKDIR /app

# Copier package.json
COPY package*.json ./
RUN npm ci

# Copier le code
COPY . .

# Générer Prisma Client
RUN npx prisma generate

# Build TypeScript
RUN npm run build

EXPOSE 3000

CMD ["npm", "start"]
