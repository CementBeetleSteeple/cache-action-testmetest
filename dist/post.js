"use strict";
const core = { getState: () => '', warning: console.warn, info: console.log };
async function save() { core.info('Saving cache...'); }
save();
