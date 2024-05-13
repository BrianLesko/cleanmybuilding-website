# Use the official Nginx image as the base
FROM nginx

# Copy the configuration file into the Docker image
COPY nginx.conf /etc/nginx/nginx.conf