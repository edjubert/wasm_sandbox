math:
	emcc -s WASM=1 -s EXPORTED_FUNCTIONS="['_add', '_multiply']" -o wasm_files/math.js src/c/add.c src/c/multiply.c
hello_world:
	emcc -Oz -s SIDE_MODULE=1 -s WASM=1 -s EXPORTED_FUNCTIONS="['_hello_world']" -o wasm_files/hello_world.wasm src/c/hello_world.c

make: math hello_world

clean:
	rm wasm_files/*

re: clean make
