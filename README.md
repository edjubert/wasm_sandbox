# WASM Sandbox
## Install emscripten
https://emscripten.org/docs/getting_started/downloads.html

## start index
```bash
yarn start
```

## Add C function
C files are located under `src/c/`
Don't forget to add rule to Makefile

## Call C function from `index.js`
Call `getFunctions` with the file name you put in the Makefile

