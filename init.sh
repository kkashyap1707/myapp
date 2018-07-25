#!/usr/bin/env bash
BASE_SITE=52.77.223.186

# qa
export NODE_ENV=qa
export PORT=27017
export VIRTUAL_HOST=$BASE_SITE
docker-compose down
docker-compose -p ${VIRTUAL_HOST} up -d

# prod
#export NODE_ENV=production
#export PORT=8003
#export VIRTUAL_HOST=$BASE_SITE
#docker-compose -p ${VIRTUAL_HOST} up -d