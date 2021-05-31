FROM docker:latest

RUN pip3 install docker-compose

# check installation
RUN docker-compose -v

RUN docker-compose up