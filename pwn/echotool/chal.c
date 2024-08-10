#include <stdio.h>
#include <stdlib.h>

void win() {
    char flag[40];
    FILE *f = fopen("flag.txt", "r");
    if (f == NULL)
    {
        printf("Flag file is missing\n");
        exit(1);
    }
    fgets(flag, 40, f);

    printf("%s\n", flag);

    fclose(f);
}

int main() {

    setbuf(stdout, NULL);
    setbuf(stdin, NULL);
    setbuf(stderr, NULL);

    char userInput[64];

    printf("Enter message: ");

    gets(userInput);
    printf("%s\n", userInput);

    return 0;
}