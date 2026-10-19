import * as core from '@actions/core';
import * as cache from '@actions/cache';

async function run(): Promise<void> {
  try {
    const cacheKey = core.getInput('cache-key', { required: true });
    const cachePaths = core.getMultilineInput('cache-paths', { required: true });
    const restoreKeys = core.getMultilineInput('restore-keys');

    core.saveState('cache-key', cacheKey);
    core.saveState('cache-paths', JSON.stringify(cachePaths));

    const cacheId = await cache.restoreCache(cachePaths, cacheKey, restoreKeys);
    if (cacheId) {
      core.info(`Cache restored from key: ${cacheKey}`);
      core.setOutput('cache-hit', 'true');
    } else {
      core.info('Cache not found, will upload after job');
      core.setOutput('cache-hit', 'false');
    }
  } catch (error) {
    core.setFailed(`Action failed: ${error}`);
  }
}

run();
