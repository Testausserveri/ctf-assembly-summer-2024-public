from pwn import *
from Crypto.Util.number import long_to_bytes
from ast import literal_eval

conn = remote("localhost", 3005)
print("opened connection")
conn.recvuntil(b'card: ')
(n, e) = literal_eval(conn.recvuntil(b')').decode())
print(f"got public key: {(n, e)}")
conn.recvuntil(b'candy: ')
candy = int(conn.recvuntil(b'\n')[:-1].decode())
print(f"got candy:  {candy}")

two_enc = pow(2, e, n)
conn.sendlineafter(b'like?: ', str((two_enc * candy) % n).encode())
print(f"sent payload: {(two_enc * candy) % n}")
conn.recvuntil(b'haircut: ')
flag_times_two = int(conn.recvuntil(b',')[:-1].decode())
print(f"got haircut:  {flag_times_two}")

flag_int = (pow(2, -1, n) * flag_times_two) % n
flag = long_to_bytes(flag_int).decode()
print(f"got flag: {flag}")
conn.close()

