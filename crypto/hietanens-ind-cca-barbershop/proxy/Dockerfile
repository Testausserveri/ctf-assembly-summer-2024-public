FROM ubuntu:20.04

RUN apt-get update && apt-get install -y socat && \
    apt-get clean && \
    rm -rf /var/lib/apt/lists/*

RUN groupadd -r ctf && useradd -r -g ctf ctf

USER ctf

CMD ["socat", "tcp-l:3015,reuseaddr,fork", "TCP:127.0.0.1:3005"]
