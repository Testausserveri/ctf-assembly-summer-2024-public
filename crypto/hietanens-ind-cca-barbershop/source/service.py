#!/usr/bin/env python3

from Crypto.Util.number import long_to_bytes, bytes_to_long, getPrime
from typing import Optional
from flag import flag


class Barbershop:
    def __init__(self) -> None:
        self._p: int = getPrime(1024)
        self._q: int = getPrime(1024)
        self._n: int = self._p * self._q
        self._e: int = 65537
        self._d: int = pow(self._e, -1, (self._p - 1) * (self._q - 1))
        self._candy: int = pow(bytes_to_long(flag.encode()), self._e, self._n)

    def welcome(self) -> None:
        print("Hello, welcome to my barbershop!!")
        print(f"Here, take my business card: ({self._n},{self._e})")
        print(f"Here, take a candy: {self._candy}")
        print("Be careful, it is very hard to crack naively... some say it even takes longer than the universe will exist...")
        print("to exit press Ctrl + c")

    def cut_hair(self, haircut: int) -> None:
        if haircut == self._candy:
            print("Why do you want a haircut resembling a candy??")
        else:
            print(f"Here's your haircut: {pow(haircut, self._d, self._n)}, hope you like it!")

    def get_haircut(_self) -> Optional[int]:
        try:
            haircut = int(input("What kind of haircut would you like?: "))
            return haircut
        except EOFError:
            print("\nHope you had a nice stay at our barbershop!")
            return None
        except ValueError:
            print("The haircut was the wrong type...  I only accept integer haircuts")
            return None


shop = Barbershop()
shop.welcome()
while True:
    match shop.get_haircut():
        case None:
            exit()
        case haircut:
            shop.cut_hair(haircut)



