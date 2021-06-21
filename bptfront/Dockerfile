FROM node:carbon

# Create app directory
WORKDIR /usr/src/app

# Bundle app source
COPY . .

# npm install
RUN npm install
# RUN  npm audit fix

EXPOSE 3008 9201
# CMD [ "npm", "run", "build-ui" ]
CMD [ "npm", "run", "build-ui" ]

# CMD [ "npm", "run", "start:dist" ]
CMD [ "npm", "run", "start:dist" ]
