# Hietanens IND-CCA barbershop

Creator: Spilled Beans

## Solution

1. Realise that the barbershop is a decryption oracle
1. Realise the candy is the encrypted flag
1. Realise decrypting the flag is blocked
1. Decrypt 2^e*candy
1. Multiple the result by pow(2, -1, n) and take the mod n
1. Convert from int to text

Example solution script provided
