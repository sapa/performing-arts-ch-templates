FROM alpine:3.4
MAINTAINER sapa (birk weiberg)

# Create apps folder
RUN mkdir /apps

COPY plugin.properties /apps/performing-arts-ch/
COPY assets  /apps/performing-arts-ch/assets/
COPY config  /apps/performing-arts-ch/config/
COPY data  /apps/performing-arts-ch/data/ 
COPY resources /apps/performing-arts-ch/resources/ 
#COPY images /apps/performing-arts-ch/images/

RUN chown -R 100:101 /apps/

VOLUME /apps/performing-arts-ch

CMD ["/bin/sh"]