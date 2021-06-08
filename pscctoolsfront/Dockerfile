FROM node:carbon

# Create app directory
WORKDIR /usr/src/app

# Bundle app source
COPY . .

# npm install
RUN  npm install
# RUN  npm audit fix
# Run npm install --global grpc --unsafe-perm

EXPOSE 3008

CMD [ "npm", "run", "start:dist" ]
