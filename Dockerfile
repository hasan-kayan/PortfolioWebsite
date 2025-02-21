# Use a lightweight Node.js image
FROM node:18-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json first
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install --only=production

# Copy the rest of the app files
COPY . .

# Expose the application port
EXPOSE 3123

# Define the command to run the app
CMD ["node", "server.js"]
