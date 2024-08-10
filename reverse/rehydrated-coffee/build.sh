#!/usr/bin/sh
javac Main.java
jar -c -f rehydrated-coffee.jar -e Main Main.class
rm Main.class
