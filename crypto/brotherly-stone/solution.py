from itertools import chain

ciphertext = open("ciphertext.txt")
plaintext = open("plaintext.txt")

cipherlines = ciphertext.readlines()
plainlines = plaintext.readlines()

flag_enc = cipherlines[-1]

cipher_first = cipherlines[2]
plain_first = plainlines[2]

dot_occurance = cipher_first.find(".")
cipher_first_remove_plain = cipher_first[dot_occurance+1:]
plain_first_remove_plain = plain_first[dot_occurance+1:]

cipher_second = cipherlines[4]
plain_second = plainlines[4]
cipher_third = cipherlines[6]
plain_third = plainlines[6]

cipher_chain = chain(cipher_first_remove_plain[:-1], cipher_second[:-1], cipher_third[:-1], "{}_", "Y", "S") # remove newlines and patch up charachters that are not in the plaintext
plain_chain = chain(plain_first_remove_plain[:-1], plain_second[:-1],plain_third[:-1], "{}_", "R", "Y")

print(cipher_third)
print(plain_third)
cipher = dict(zip(cipher_chain, plain_chain))
flag = ''.join(map(lambda x: cipher[x],flag_enc))
print(flag)
