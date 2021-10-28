FROM httpd:2.4
EXPOSE 80
COPY ./build/ /usr/local/apache2/htdocs/

