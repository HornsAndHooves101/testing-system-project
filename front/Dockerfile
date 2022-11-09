FROM node:14 AS build-step
WORKDIR /build
COPY package.json package-lock.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM nginx:latest
COPY default.conf /etc/nginx/conf.d/default.conf
COPY --from=build-step /build/build /usr/share/nginx/html/