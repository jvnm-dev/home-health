FROM node:15.0
WORKDIR .
COPY ./package.json ./
RUN yarn
COPY . .
RUN yarn build
EXPOSE 3000
CMD ["yarn", "start"]