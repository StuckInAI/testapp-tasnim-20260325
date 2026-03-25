# Use Node 20 Alpine base image
FROM node:20-alpine

# Set working directory
WORKDIR /app

# Copy package files and install dependencies
COPY package*.json ./
RUN npm ci --only=production

# Copy application files
COPY . .

# Generate Prisma client (if using Prisma) or run migrations for TypeORM
# For TypeORM, we'll run migrations at startup (optional, you can run manually)
# Uncomment if you want to auto-run migrations:
# RUN npm run migration:run

# Build the application
RUN npm run build

# Expose port 3000
EXPOSE 3000

# Start the application
CMD ["npm", "start"]
