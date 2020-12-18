const DEFAULT_MEMORY = {
  initial: 256,
  maximum: 256,
};
const table = new WebAssembly.Table({
  initial: 0,
  maximum: 0,
  element: 'anyfunc'
});
const abortStackOverflow = err => {
  throw new Error(`overflow: ${err}`);
}

const createWebAssembly = async function(bytes) {
    const memory = new WebAssembly.Memory(DEFAULT_MEMORY);
    const env = {
      abortStackOverflow,
      table,
      memory,
      __table_base: 0,
      __memory_base: 1024,
      STACKTOP: 0,
      STACK_MAX: memory.buffer.byteLength
    };

    return WebAssembly.instantiate(bytes, { env });
  }

module.exports = {
  createWebAssembly
}
