# Rehydrated Coffee

Creator: Antti Ellilä

Decompile a simple java application

Recipe inside the source code encrypted with [CyberChef](https://gchq.github.io/CyberChef/#recipe=XOR({'option':'UTF8','string':'QuickC0ffeeFix!!'},'Standard',false)To_Base64('A-Za-z0-9%2B/%3D'))

Build with `./build.sh`

## Solution

Decompile the jar file with tools such as [Recaf](https://www.coley.software/Recaf/) or [Jd-gui](https://java-decompiler.github.io/) or any online tool.

Figure out the password `QuickC0ffeeFix!!`

Run the program, give it the password and receive the flag. Alternatively manually XOR decrypt the Base64 found inside the jar file with the password.
