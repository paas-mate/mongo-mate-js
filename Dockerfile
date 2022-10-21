FROM ttbb/mongo:nake

RUN apt-get install -y --no-install-recommends nodejs && \
    apt-get clean all

COPY . /opt/mongo/mate

WORKDIR /opt/mongo/mate

RUN npm install

WORKDIR /opt/mongo

CMD ["/usr/bin/dumb-init", "bash", "-vx", "/opt/mongo/mate/scripts/start.sh"]
