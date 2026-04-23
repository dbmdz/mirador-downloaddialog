import { getWindowConfig } from "mirador";
import { createSelector } from "reselect";

interface PluginConfig {
  dialogOpen: boolean;
  enabled: boolean;
}

const defaultConfig: PluginConfig = {
  // Open the download dialog
  dialogOpen: false,
  // Enable the plugin
  enabled: true,
};

/** Selector to get the plugin config for a given window */
const getPluginConfig = createSelector([getWindowConfig], (windowConfig) => ({
  ...defaultConfig,
  ...((windowConfig.downloadDialog ?? {}) as Partial<PluginConfig>),
}));

export { getPluginConfig };
export type { PluginConfig };
