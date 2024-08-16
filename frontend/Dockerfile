
FROM node:18


WORKDIR /app

# Copy package.json and package-lock.json
COPY graph-db-task/package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY graph-db-task ./

# Build the application
RUN npm run build

# Serve the application
RUN npm install -g serve
CMD ["serve", "-s", "dist"]

# Expose port 3000
EXPOSE 3000
