FROM node:16-alpine as builder
WORKDIR /app
COPY ./package*.json ./
RUN npm install
COPY . .
RUN npm run build

FROM nginx
EXPOSE 3000
# replace the default configuration
COPY ./nginx/default.conf /etc/nginx/conf.d/default.conf
# copying all the client build file 
# into the nginx default folder
COPY --from=builder /app/build /usr/share/nginx/html