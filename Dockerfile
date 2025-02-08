FROM node:lts-slim as builder
WORKDIR /app

COPY package.json package-lock.json ./
RUN npm i
COPY . .
RUN npm run build

FROM node:lts-slim as runner
WORKDIR /app

RUN addgroup --system appgroup && adduser --system --group appuser

COPY --from=builder /app/package.json .
COPY --from=builder /app/package-lock.json .
COPY --from=builder /app/next.config.js ./
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static

RUN chmod -R 777 .next

USER appuser

ENV NODE_ENV=production
EXPOSE 3000
CMD ["npm", "start"]