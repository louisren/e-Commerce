# FROM docker:latest

# RUN apk add --no-cache py3-pip python3-dev libffi-dev openssl-dev curl gcc libc-dev make && \
#     pip3 install docker-compose
FROM debian:jessie

RUN apt-get update \
    && apt-get -y install apt-utils

RUN apt-get update \
    && apt-get -y install   ca-certificates curl

ENV DOCKER_VERSION 1.12.3
ENV COMPOSE_VERSION 1.9.0

RUN curl -L https://get.docker.com/builds/Linux/x86_64/docker-${DOCKER_VERSION}.tgz > /tmp/docker-${DOCKER_VERSION}.tgz \
    && tar -zxf /tmp/docker-${DOCKER_VERSION}.tgz -C /tmp \
    && cp /tmp/docker/docker /usr/local/bin/docker \
    && chmod +x /usr/local/bin/docker \
    && rm -rf /tmp/docker-${DOCKER_VERSION}.tgz /tmp/docker \
    && curl -L https://github.com/docker/compose/releases/download/${COMPOSE_VERSION}/docker-compose-Linux-x86_64 > /usr/local/bin/docker-compose \
    && chmod +x /usr/local/bin/docker-compose

# check installation
RUN docker-compose -v

RUN docker-compose up