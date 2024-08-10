# Echotool

Creator:
- Hobbit ([@hobbari](https://github.com/hobbari))
- Sanduuz ([@sanduuz](https://github.com/sanduuz))

## Solution

1. Notice a gets function vulnerable to buffer overflow
1. Figure out it's 72 bytes to access the RIP register
1. Input 72 'A' chars and the address of the win function

Example exploit provided
