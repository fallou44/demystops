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

# Install nginx and other tools
RUN apk add --no-cache nginx

WORKDIR /app

# Set environment to production
ENV NODE_ENV=production

# Copy package files and install production dependencies
COPY package*.json ./
RUN npm install --omit=dev && npm install -g tsx typescript

# Copy the built frontend to Nginx's directory
COPY --from=builder /app/dist /usr/share/nginx/html

# Copy the server and backend source code
COPY --from=builder /app/server.ts ./
COPY --from=builder /app/src ./src
COPY --from=builder /app/prisma ./prisma

# Copy Nginx configuration
COPY nginx.conf /etc/nginx/nginx.conf

# Copy and prepare the startup script
COPY start.sh ./
RUN chmod +x start.sh

# Expose port 80 (Nginx) and 3000 (Node API)
EXPOSE 80 3000

# Start both services using the script
CMD ["./start.sh"]