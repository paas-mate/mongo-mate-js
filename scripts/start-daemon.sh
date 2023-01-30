#!/bin/bash

MONGO_MATE="${MONGO_HOME}/mate"
MONGO_SCRIPTS="${MONGO_MATE}/scripts"
START_STANDALONE_SCRIPT="${MONGO_SCRIPTS}/start-mongo-stand-alone.sh"
START_CONFIG_SCRIPT="${MONGO_SCRIPTS}/start-mongo-config.sh"
START_ROUTER_SCRIPT="${MONGO_SCRIPTS}/start-mongo-router.sh"
START_SHARD_SCRIPT="${MONGO_SCRIPTS}/start-mongo-shard.sh"

mkdir -p $MONGO_HOME/logs

case ${DEPLOY_TYPE} in
"stand-alone")
  echo "start stand alone mongo."
  bash -xv ${START_STANDALONE_SCRIPT}
  ;;
"config")
  echo "start mongo config."
  bash -xv ${START_CONFIG_SCRIPT}
  ;;
"router")
  echo "start mongo router."
  bash -xv ${START_ROUTER_SCRIPT}
  ;;
"shard")
  echo "start mongo shard."
  bash -xv ${START_SHARD_SCRIPT}
  ;;
esac

