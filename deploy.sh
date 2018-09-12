#!/bin/bash
git pull
rm -r /var/www/html/*
cp -a ~/abc_website/site/* /var/www/html/
