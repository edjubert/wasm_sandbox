void consolelog(char str);
void consoleint(int num);

int hello_world(int i) {
  char *hello = "Hello World!";

  while (*hello) {
    consolelog(*hello);
    hello++;
  }
  consoleint(i);

  return 1;
}
