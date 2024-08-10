#include <stdio.h>
#include <stdlib.h>
#include <string.h>


void entry() {

    printf("Wow, you are a pro surfer!\n");

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

    char *welcome = "Welcome to our surfers lodge!\n";
    char *experience = "Please tell us how experienced are you with surfing: \n";
    char *info = "You told us your experience is: \n";
    char *result = "Let's see if you are good enough surfer to stay at our lodge\n";

    int expectation = 0xF00D;
    int *ptr = &expectation;

    printf("%s", welcome);
    printf("%s", experience);
    char input[40];


    fgets(input, 40, stdin);
    printf("%s", info);
    printf(input);
    printf("%s", result);

    if (strstr(input, "amateur") != NULL) {
        printf("You are not a pro surfer\n");
        exit(1);
    }

    if (expectation == 0xDEA1)
    {
        entry();
    }

    return 0;
}





