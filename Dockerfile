FROM docker:latest

RUN docker pull docker/compose

# check installation
RUN docker-compose -v

RUN docker-compose up