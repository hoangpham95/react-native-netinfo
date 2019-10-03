import {NetInfoConfig} from './types';

let _netInfoConfig: NetInfoConfig = {
  reachabilityUrl: 'http://detectportal.firefox.com',
  reachabilityTest: async response => (await response.text()) === 'success',
  reachabilityLongTimeout: 60 * 1000,
  reachabilityShortTimeout: 5 * 1000,
};

/**
 * Overwrites default NetInfoConfig
 *
 * @param userConfig
 */
export function setNetInfoConfig(newConfig: Partial<NetInfoConfig>): void {
  Object.assign(_netInfoConfig, newConfig);
}

/**
 * @returns current netInfoConfig (clone of _netInfoConfig)
 */
export function getNetInfoConfig(): NetInfoConfig {
  return _netInfoConfig;
}
