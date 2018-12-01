#!/bin/bash
git pull
rm -r /var/www/html/*
cp -a ~/abc_website/site/* /var/www/html/
read -rsp $'Press any key to continue...\n' -n1 key
