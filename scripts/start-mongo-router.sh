#!/bin/bash

mkdir /opt/sh/mongo/config
cp /opt/sh/mate/config/router.yaml /opt/sh/mongo/config/router.yaml

source /etc/profile

mongos --config /opt/sh/mongo/config/router.yaml
