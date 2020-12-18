const fs = require('fs').promises;

const { createWebAssembly } = require('./createWebAssembly');

const getFunctions = (filename, requested) => async () => {
  const wasm_directory = `wasm_files`;
  const file = await fs.readFile(`${wasm_directory}/${filename}`);
  const bytes = new Uint8Array(file);
  const result = await createWebAssembly(bytes);
  const toRet = {};

  for (const req of requested) {
    toRet[req] = result.instance.exports[req];
  }

  return toRet;
}

module.exports = {
  getFunctions
}
