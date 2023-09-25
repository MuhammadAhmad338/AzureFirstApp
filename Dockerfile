# Use the official Node.js runtime as the base image
FROM node:18

# Set the working directory inside the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code to the container
COPY . .

# Expose the port your app will run on (replace 8080 with your app's port)
EXPOSE 8080

# Define the command to start your Node.js application
CMD [ "node", "index.js" ]
