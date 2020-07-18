#!/usr/bin/env bash

echo =============================================
echo $REACT_APP_API_URL
echo =============================================

cd /app
npm run build

cd /app/build
serve -p 80 -s .

exec "$@"

