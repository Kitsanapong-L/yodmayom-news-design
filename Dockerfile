FROM oven/bun:1.4.4-slim AS dependencies

WORKDIR /app
ENV NEXT_TELEMETRY_DISABLED=1

COPY package.json bun.lock ./
COPY apps/web/package.json ./apps/web/package.json
COPY packages/ui/package.json ./packages/ui/package.json
COPY packages/typescript-config/package.json ./packages/typescript-config/package.json
COPY packages/eslint-config/package.json ./packages/eslint-config/package.json

RUN bun install --frozen-lockfile

FROM dependencies AS builder

COPY . .
RUN bun run --cwd apps/web build

FROM oven/bun:1.4.4-slim AS runner

WORKDIR /app

ENV NODE_ENV=production \
    NEXT_TELEMETRY_DISABLED=1 \
    HOSTNAME=0.0.0.0 \
    PORT=3000

COPY --from=builder --chown=bun:bun /app/apps/web/.next/standalone ./
COPY --from=builder --chown=bun:bun /app/apps/web/public ./apps/web/public
COPY --from=builder --chown=bun:bun /app/apps/web/.next/static ./apps/web/.next/static

USER bun

EXPOSE 3000

CMD ["bun", "apps/web/server.js"]
