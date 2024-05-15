#!/bin/bash

# 1. build the image: 
#docker build -t nginx-website .

# 2. run the container for the first time
docker run --name my-nginx-website -p 8000:80 -v $(pwd):/usr/share/nginx/html -v $(pwd)/nginx.conf:/etc/nginx/nginx.conf -d nginx-website

#3. run the container after the first time
# docker start my-nginx-website
