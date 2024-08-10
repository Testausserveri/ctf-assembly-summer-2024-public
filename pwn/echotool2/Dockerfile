FROM ubuntu:20.04

RUN apt-get update && apt-get install -y socat && \
    apt-get clean && \
    rm -rf /var/lib/apt/lists/*

EXPOSE 1337

RUN groupadd -r ctf && useradd -r -g ctf ctf

COPY bin/ /home/ctf/
WORKDIR /home/ctf

USER ctf

CMD ["socat", "tcp-l:1337,reuseaddr,fork", "EXEC:./chal"]