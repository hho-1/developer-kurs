FROM node:20.9.0-alpine3.18

WORKDIR /frontend

COPY . .

RUN npm i -g pnpm
RUN pnpm i

CMD pnpm start 

EXPOSE 5173