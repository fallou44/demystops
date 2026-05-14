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
RUN npx tsc -p tsconfig.build.json

# --- Production Stage ---
FROM node:20-alpine AS runner

# Install nginx and other tools (openssl and libc6-compat are required for Prisma)
RUN apk add --no-cache nginx openssl libc6-compat

# Fix for Nginx on Alpine (ensure run directory exists)
RUN mkdir -p /run/nginx

WORKDIR /app

# Set environment to production
ENV NODE_ENV=production

# Copy package files and install production dependencies
COPY package*.json ./
COPY prisma ./prisma
RUN npm install --omit=dev && npx prisma generate

# Copy the built frontend to Nginx's directory
COPY --from=builder /app/dist /usr/share/nginx/html

# Copy the built backend
COPY --from=builder /app/dist-backend ./dist-backend
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./

# Copy Nginx configuration
COPY nginx.conf /etc/nginx/nginx.conf

# Copy and prepare the startup script
COPY start.sh ./
RUN chmod +x start.sh

# Expose port 80 (Nginx) and 3000 (Node API)
EXPOSE 80 3000

# Start both services using the script
CMD ["./start.sh"]