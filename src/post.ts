import * as core from '@actions/core';
import * as cache from '@actions/cache';

async function saveCache(): Promise<void> {
  const cacheKey = core.getState('cache-key');
  const cachePaths = JSON.parse(core.getState('cache-paths') || '[]');
  if (!cacheKey || !cachePaths.length) return;
  try {
    await cache.saveCache(cachePaths, cacheKey);
    core.info(`Cache saved with key: ${cacheKey}`);
  } catch (error) {
    core.warning(`Cache save failed: ${error}`);
  }
}

saveCache();
