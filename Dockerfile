FROM nginx:stable-alpine as production

RUN rm /etc/nginx/conf.d/default.conf
COPY nginx.conf /etc/nginx/nginx.conf
COPY . /usr/share/nginx/html

# Expose port 8422
EXPOSE 8422

CMD ["nginx", "-g", "daemon off;"]
