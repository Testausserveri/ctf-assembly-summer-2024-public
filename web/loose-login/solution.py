from multiprocessing import cpu_count
from concurrent.futures import ProcessPoolExecutor
from hashlib import md5
from string import ascii_letters, digits
from time import time

amount_threads = cpu_count()

prefix = "Pass1" + "_" * 45
charset = ascii_letters + digits
cs_len = len(charset)

def worker(offset):
  i = offset
  while True:
    suffix = ""
    j = i
    while j > 0:
      suffix = suffix + charset[j % cs_len]
      j = j // cs_len
    i = i + amount_threads
    pw = prefix + suffix
    pw_hash = md5(pw.encode()).hexdigest()
    if not pw_hash.startswith("0e"): continue
    try:
      int(pw_hash[2:])
      print(pw, pw_hash)
    except:
      pass

if __name__ == "__main__":
  with ProcessPoolExecutor(max_workers=amount_threads) as executor:
    for i in range(amount_threads):
      executor.submit(worker, i)
