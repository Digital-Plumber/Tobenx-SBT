#!/bin/bash

curl -s https://www.shopify.com/ng -o index.html

grep -Eo '(http|https)://[^"]+\.(css|js)' index.html | sort -u | while read -r url; do
    echo "Downloading $url..."
    curl -O "$url"
done
