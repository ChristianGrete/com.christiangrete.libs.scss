#!/bin/sh

cd "$( dirname "$0" )/..";

bundle install --no-cache;

npm cache clean && npm install;

bower cache clean && bower install;
