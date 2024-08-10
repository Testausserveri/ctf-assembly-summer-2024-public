#include <stdio.h>
#include <stdlib.h>

void win(int canary, int extra_canary) {

    char flag[40];
    FILE *f = fopen("flag.txt", "r");
    if (f == NULL)
    {
        printf("Flag file is missing\n");
        exit(1);
    }
    fgets(flag, 40, f);

    if (canary == 0xdeadbeef && extra_canary == 0xcafebabe) {
        printf("%s\n", flag);
    }

    fclose(f);
    __asm__("pop %rsi; ret;");
    return;
}

int main() {

    setbuf(stdout, NULL);
    setbuf(stdin, NULL);
    setbuf(stderr, NULL);

    char userInput[120];
    printf("This time I made sure to add some security checks!\n");
    printf("Enter message: ");

    gets(userInput);
    printf("%s\n", userInput);

    return 0;
}