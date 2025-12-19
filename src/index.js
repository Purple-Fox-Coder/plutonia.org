const PAGE_COUNT = 2;
var s_memory = new WebAssembly.Memory({ initial: PAGE_COUNT, maximum: PAGE_COUNT });

var s_import_object = {
  env: { consoleLog: (ptr, len) => {
           const memory = new Uint8Array(s_memory.buffer);
           const message = new TextDecoder('utf-8').decode(memory.subarray(ptr, ptr + len));
           console.log(message);
         },
         consoleWarn: (ptr, len) => {
           const memory = new Uint8Array(s_memory.buffer);
           const message = new TextDecoder('utf-8').decode(memory.subarray(ptr, ptr + len));
           console.warn(message);
         },
         consoleError: (ptr, len) => {
           const memory = new Uint8Array(s_memory.buffer);
           const message = new TextDecoder('utf-8').decode(memory.subarray(ptr, ptr + len));
           console.error(message);
         },
         memory: s_memory
      }
};

WebAssembly.instantiateStreaming(fetch("zig-out/bin/plutoniaDotOrg.wasm"), s_import_object).then((result) => {
    result.instance.exports.testWasm();
});
