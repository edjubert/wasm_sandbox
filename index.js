const { getFunctions } = require('./src/js/getFunctions');

const getMath = getFunctions('math.wasm', ['add', 'multiply']);

(async () => {
  const { add, multiply } = await getMath();

  console.log({ add: add(2, 3), multiply: multiply(3, 5) });
})();


