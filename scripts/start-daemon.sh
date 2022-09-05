#!/bin/bash

mkdir -p $MONGO_HOME/logs
nohup node $MONGO_HOME/mate/server.js >>$MONGO_HOME/logs/mongo_mate.stdout.log 2>>$MONGO_HOME/logs/mongo_mate.stderr.log
