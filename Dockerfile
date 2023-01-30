# Use a node base image
FROM node:14

# Set the working directory
WORKDIR /app

# Copy the package.json and package-lock.json files
COPY package*.json ./

# Install the dependencies
RUN npm install

# Copy the rest of the application files
COPY . .

# Build the Vue.js application
RUN npm run build

# Expose the container's listening port
EXPOSE 8080

# Start the Vue.js application
CMD ["npm", "start"]
