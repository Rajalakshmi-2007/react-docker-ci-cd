# This multi-stage Dockerfile builds the React app and serves it with Nginx.

# Stage 1: Build the React application
FROM node:18-alpine AS build

WORKDIR /app

COPY my-app/package*.json ./

RUN npm install

COPY my-app/. .

RUN npm run build

# Stage 2: Serve the application using Nginx
FROM nginx:1.25-alpine

COPY --from=build /app/build /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]