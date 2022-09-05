FROM ttbb/mongo:nake

ENV MONGO_HOME /opt/sh/mongo

RUN dnf install -y nodejs && \
    dnf clean all

COPY . /opt/sh/mongo/mate

WORKDIR /opt/sh/mongo/mate

RUN npm install

WORKDIR /opt/sh/mongo

CMD ["/usr/bin/dumb-init", "bash", "-vx", "/opt/sh/mongo/mate/scripts/start.sh"]
