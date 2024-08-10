FROM node:20

ENV PUPPETEER_SKIP_CHROMIUM_DOWNLOAD=true

# adapted from https://github.com/puppeteer/puppeteer/blob/b5aab04cbc1a253526857dbcb7bd65ad58eb423d/docker/Dockerfile#L9-L16
RUN apt-get update \
    && apt-get install -y wget gnupg \
    && wget -q -O - https://dl-ssl.google.com/linux/linux_signing_key.pub | gpg --dearmor -o /usr/share/keyrings/googlechrome-linux-keyring.gpg \
    && sh -c 'echo "deb [arch=amd64 signed-by=/usr/share/keyrings/googlechrome-linux-keyring.gpg] https://dl-ssl.google.com/linux/chrome/deb/ stable main" >> /etc/apt/sources.list.d/google.list' \
    && apt-get update \
    && apt-get install google-chrome-stable -y --no-install-recommends \
    && rm -rf /var/lib/apt/lists/*

WORKDIR /app

RUN chown -R node:node /app
USER node

COPY --chown=node:node package.json yarn.lock  ./

RUN yarn

COPY --chown=node:node static/ static/
COPY --chown=node:node src/ src/

CMD [ "yarn", "start" ]
