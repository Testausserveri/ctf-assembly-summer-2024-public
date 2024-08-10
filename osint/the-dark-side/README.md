# The Dark Side

Creator: Antti Ellilä

## Start

The secret key `tor-data/alternative/hs_ed25519_secret_key` has been erased, this one can't be started.  
Reconfigure tor with a different hidden service.

Set permissions correctly:
`sudo find tor-data -type d -exec chmod 700 {} \; && sudo find tor-data -type f -exec chmod 600 {} \; && sudo chown -R 102:102 tor-data`

## Solution

1. Notice Onion-Location header in the HTTP response
2. Open it on Tor Browser
