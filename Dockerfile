FROM httpd:2.4
EXPOSE 80
COPY ./build/ /usr/local/apache2/htdocs/
# for testing GitHub pages sub-directory
COPY ./build/ /usr/local/apache2/htdocs/yt-react-parallax
