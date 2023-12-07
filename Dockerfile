FROM node:lts-slim as builder
WORKDIR /app

COPY package.json package-lock.json ./
COPY . .

RUN npm i
RUN npm run build

FROM node:lts-slim as prod
WORKDIR /app

COPY --from=builder /app/package.json .
COPY --from=builder /app/package-lock.json .
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/dist ./dist

RUN npm i --omit=dev

CMD ["npm", "start"]