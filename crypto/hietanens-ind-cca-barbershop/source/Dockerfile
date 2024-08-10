FROM ubuntu:22.04 AS chroot

RUN DEBIAN_FRONTEND=noninteractive apt-get update && \
    DEBIAN_FRONTEND=noninteractive apt-get upgrade -y && \
    DEBIAN_FRONTEND=noninteractive apt-get install -y python3-pip && \
    python3 -m pip install pycryptodome && \
    groupadd -g 1337 ctf && useradd -r -u 1337 -g ctf ctf && \
    mkdir -p /home/ctf/
COPY flag.py service.py /home/ctf/
RUN chmod +x /home/ctf/service.py

# Now setting up the actual container
FROM ghcr.io/google/nsjail/nsjail:latest

COPY --from=chroot / /chroot

ENTRYPOINT nsjail --port 1337 --chroot /chroot/ --user 1337 --group 1337 --cwd /home/ctf/ --tmpfsmount /tmp --bindmount_ro /etc/resolv.conf:/etc/resolv.conf --time_limit 600 /home/ctf/service.py
