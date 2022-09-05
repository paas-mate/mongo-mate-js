#!/bin/bash

mkdir -p /data/db
mkdir -p $MONGO_HOME/logs
nohup mongod --bind_ip_all >>$MONGO_HOME/logs/mongo.stdout.log 2>>$MONGO_HOME/logs/mongo.stderr.log &
