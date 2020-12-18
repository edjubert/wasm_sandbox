math:
	emcc -s WASM=1 -s EXPORTED_FUNCTIONS="['_add', '_multiply']" -o wasm_files/math.js src/c/add.c src/c/multiply.c

make: math

clean:
	rm wasm_files/math.wasm wasm_files/math.js
