#############
### Build ###
#############
# Stage 1
FROM node:alpine as build
WORKDIR /app
COPY package.json ./
# install dependencies
RUN npm install --frozen-lockfile
COPY . .
RUN npm run build
RUN npm prune --production

# Stage 2
FROM node:alpine as builder
WORKDIR /app
# copy from build image
COPY --from=build /app/package.json ./package.json
COPY --from=build /app/node_modules ./node_modules
COPY --from=build /app/.next ./.next
COPY --from=build /app/public ./public
EXPOSE 3000
CMD ["npm", "run", "start"]


###########
### Dev ###
###########
FROM node:16-alpine AS dev