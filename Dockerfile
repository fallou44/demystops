# Use Node.js 20 Alpine as build stage
FROM node:20-alpine AS builder

WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN npm install

# Copy Prisma schema and generate client
COPY prisma ./prisma/
RUN npx prisma generate

# Copy the rest of the application and build
COPY . .
RUN npm run build

# --- Production Stage ---
FROM node:20-alpine AS runner

WORKDIR /app

# Set environment to production
ENV NODE_ENV=production

# Copy package files and install production dependencies
COPY package*.json ./
RUN npm install --omit=dev && npm install -g tsx typescript

# Copy the built frontend to dist directory
COPY --from=builder /app/dist ./dist

# Copy the server and backend source code
COPY --from=builder /app/server.ts ./
COPY --from=builder /app/src ./src
COPY --from=builder /app/prisma ./prisma

# Expose port 3000 (Node API and Frontend)
EXPOSE 3000

# Start the application
CMD ["tsx", "server.ts"]