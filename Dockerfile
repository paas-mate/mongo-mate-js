FROM ttbb/mongo:nake

COPY . /opt/mongo/mate

WORKDIR /opt/mongo

CMD ["/usr/bin/dumb-init", "bash", "-vx", "/opt/mongo/mate/scripts/start.sh"]
