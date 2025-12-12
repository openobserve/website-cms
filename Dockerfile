# Creating multi-stage build for production
FROM node:22-alpine as build
RUN apk update && apk add --no-cache --no-scripts build-base gcc autoconf automake zlib-dev libpng-dev vips-dev git > /dev/null 2>&1
ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}

WORKDIR /opt/
COPY package.json package-lock.json ./
# COPY ./patches ./patches
RUN npm install -g node-gyp
RUN npm config set fetch-retry-maxtimeout 600000 -g && npm install --only=production
ENV PATH /opt/node_modules/.bin:$PATH
WORKDIR /opt/app
COPY . .
ENV NODE_OPTIONS=--max_old_space_size=8192
RUN npm run build

# Creating final production image
FROM node:22-alpine
RUN apk add --no-cache --no-scripts vips-dev && ldconfig /usr/lib
ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}
WORKDIR /opt/
COPY --from=build /opt/node_modules ./node_modules
# COPY --from=build /opt/patches ./patches
WORKDIR /opt/app
COPY --from=build /opt/app ./
ENV PATH /opt/node_modules/.bin:$PATH

RUN chown -R node:node /opt/app
USER node
EXPOSE 1337
EXPOSE 5432
CMD ["npm", "run", "start"]
