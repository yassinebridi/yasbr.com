# Install dependencies only when needed
FROM node:alpine AS deps
# Check https://github.com/nodejs/docker-node/tree/b4117f9333da4138b03a546ec926ef50a31506c3#nodealpine to understand why libc6-compat might be needed.
RUN apk add --no-cache libc6-compat
WORKDIR /app
COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile

# Rebuild the source code only when needed
FROM node:alpine AS builder
WORKDIR /app
COPY . .
COPY --from=deps /app/node_modules ./node_modules
RUN yarn build && yarn install --production --ignore-scripts --prefer-offline

# Production image, copy all the files and run next
FROM node:alpine AS runner
WORKDIR /app

ENV NODE_ENV production

ARG MY_NOTION_TOKEN=$MY_NOTION_TOKEN
ARG NOTION_TOKEN=$NOTION_TOKEN

# Notion Database IDs
ARG POSTS_DATABASE_ID=$POSTS_DATABASE_ID
ARG TAGS_DATABASE_ID=$TAGS_DATABASE_ID
ARG HOME_DATABASE_ID=$HOME_DATABASE_ID
ARG INTRO_DATABASE_ID=$INTRO_DATABASE_ID
ARG SKILLS_DATABASE_ID=$SKILLS_DATABASE_ID
ARG SERVICES_DATABASE_ID=$SERVICES_DATABASE_ID
ARG PROJECTS_DATABASE_ID=$PROJECTS_DATABASE_ID
ARG TESTIMS_DATABASE_ID=$TESTIMS_DATABASE_ID
ARG CONTACT_DATABASE_ID=$CONTACT_DATABASE_ID
ARG USES_DATABASE_ID=$USES_DATABASE_ID

RUN addgroup -g 1001 -S nodejs
RUN adduser -S nextjs -u 1001

COPY --from=builder /app/next.config.js ./
COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json

USER nextjs

EXPOSE 3000

ENV NEXT_TELEMETRY_DISABLED 1

CMD ["yarn", "start"]
