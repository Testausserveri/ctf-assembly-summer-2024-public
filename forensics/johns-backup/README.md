# John's Backup

Creator: Antti Ellilä

## Creation

Password: Ilovecats2!
Command `zip -r art.zip art && zip -e backup.zip art.zip`

## Solution

Basic zip password bruteforce with John the Ripper and rockyou.txt

`zip2john backup.zip > zip.hash`
`john --wordlist=rockyou.txt zip.hash`
