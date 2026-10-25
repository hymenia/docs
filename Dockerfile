FROM node:22-alpine AS build

WORKDIR /app

RUN corepack enable

COPY package.json pnpm-lock.yaml ./

RUN pnpm install --frozen-lockfile

COPY . .
RUN pnpm build

FROM httpd:2.4-alpine AS runtime

COPY --from=build /app/dist /usr/local/apache2/htdocs

EXPOSE 80