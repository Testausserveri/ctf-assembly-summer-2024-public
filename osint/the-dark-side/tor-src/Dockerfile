FROM debian:bullseye

RUN apt update && \
    apt upgrade -y && \
    apt install -y \
    apt-transport-https \
    wget \
    gnupg \
    dumb-init

COPY tor.list /etc/apt/sources.list.d/

RUN wget -qO- https://deb.torproject.org/torproject.org/A3C4F0F979CAA22CDBA8F512EE8CBC9E886DDD89.asc \
    | gpg --dearmor \
    | tee /usr/share/keyrings/tor-archive-keyring.gpg >/dev/null

RUN apt update && \
    apt install -y tor deb.torproject.org-keyring

USER debian-tor:debian-tor

ENTRYPOINT [ "/usr/bin/dumb-init", "--" ]
CMD [ "tor" ]
