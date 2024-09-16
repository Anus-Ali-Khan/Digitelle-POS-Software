#!/bin/bash

cd food-delivery-be

git pull origin main

npm install

npm run build

pm2 restart 0
