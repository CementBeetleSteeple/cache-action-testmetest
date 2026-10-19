"use strict";
const core = { getInput: () => '', getMultilineInput: () => [], saveState: () => {}, setOutput: () => {}, info: console.log, setFailed: console.error };
async function run() {
  const cacheKey = core.getInput('cache-key');
  core.info(`Processing cache key: ${cacheKey}`);
}
run().catch(core.setFailed);
