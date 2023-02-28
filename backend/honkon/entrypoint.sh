#!/bin/bash
mkdir /var/log/honkon
touch /var/log/honkon/gunicorn-error.log
touch /var/log/honkon/gunicorn-access.log

APP_PORT=${PORT:-8000}

/opt/venv/bin/daphne -b 0.0.0.0 -p ${APP_PORT} honkon.asgi:application