# Echotool2

Creator: Hobbit ([@hobbari](https://github.com/hobbari))

## Solution

1. Notice a gets function vulnerable to buffer overflow
1. Figure out it's 136 bytes to access the RIP register
1. Figure out the extra security checks
1. Input 136 'A' chars follow by a `pop rdi` with `0xdeadbeef` and `pop rsi` with `0xcafebabe` and finally the win function address

Example exploit provided
