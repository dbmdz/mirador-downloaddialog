import { getWindowConfig } from "mirador";

const defaultConfig = {
  // Open the download dialog
  dialogOpen: false,
  // Enable the plugin
  enabled: true,
};

/** Selector to get the plugin config for a given window */
const getPluginConfig = (state, ownProps) => {
  const { downloadDialog = {} } = getWindowConfig(state, ownProps);
  return { ...defaultConfig, ...downloadDialog };
};

export { getPluginConfig };
