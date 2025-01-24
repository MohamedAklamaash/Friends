#!/bin/sh
if [ -f .env ]; then
export $(cat .env | xargs)
fi
exec "$@"