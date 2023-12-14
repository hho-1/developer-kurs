FROM node:20.9.0-alpine3.18

WORKDIR /backend

COPY . .

RUN mkdir -p logs         
RUN npm i

CMD npm start

EXPOSE 8000

