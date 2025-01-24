FROM node:20-alpine AS builder
WORKDIR /app

RUN addgroup -S appgroup && adduser -S appuser -G appgroup

COPY package*.json ./
RUN chown -R appuser:appgroup /app
USER appuser
RUN npm install --legacy-peer-deps

COPY --chown=appuser:appgroup . .

RUN npm run build

FROM node:20-alpine AS runner
WORKDIR /app

RUN addgroup -S appgroup && adduser -S appuser -G appgroup

COPY --from=builder --chown=appuser:appgroup /app/package*.json ./
COPY --from=builder --chown=appuser:appgroup /app/.next ./.next
COPY --from=builder --chown=appuser:appgroup /app/public ./public
COPY --from=builder --chown=appuser:appgroup /app/node_modules ./node_modules

COPY --chown=appuser:appgroup load-env.sh ./

RUN chmod +x load-env.sh

USER appuser

EXPOSE 3000

CMD ["/bin/sh", "-c", "./load-env.sh && npm start"]
