FROM node:16 as build-stage

RUN apt update -y
RUN apt install git -y

WORKDIR /var/app
COPY . /var/app

RUN npm install
RUN npm run build

FROM nginx:latest as production-stage
COPY --from=build /var/app/dist /usr/share/nginx/html/
EXPOSE 80
#CMD ["nginx", "-g", "daemon off;"]
