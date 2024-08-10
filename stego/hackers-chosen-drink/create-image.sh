#!/bin/bash
drink=$(cat ./source/drink.jpg | base64 -w0)
cp ./source/decoy.jpg ./tmp_decoy.jpg
exiftool -artist="$drink" ./tmp_decoy.jpg
rm ./tmp_decoy.jpg_original
cp ./source/tsry-hack3rs.jpg ./tsry-hack3rs.jpg
exiftool -All= tsry-hack3rs.jpg
exiftool "-thumbnailimage<=tmp_decoy.jpg" tsry-hack3rs.jpg
rm ./tsry-hack3rs.jpg_original
rm ./tmp_decoy.jpg
