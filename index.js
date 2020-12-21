const { getFunctions } = require('./src/js/getFunctions');

const getHello = getFunctions('hello_world.wasm', ['hello_world']);
const getMath = getFunctions('math.wasm', ['add', 'multiply']);

(async () => {
  const { hello_world } = await getHello();

  if (hello_world) hello_world(42);
})();


