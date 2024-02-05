FROM node:18.16.0-bullseye AS development
WORKDIR /
COPY package*.json ./
COPY ./backend/package*.json ./backend/
COPY ./backend ./backend
RUN npm install --workspace=backend
# RUN npm run typeorm migration:run --workspace=backend
CMD ["npm", "run", "start:dev"]