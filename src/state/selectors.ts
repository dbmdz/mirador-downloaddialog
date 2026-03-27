import { getWindowConfig } from "mirador";

type PluginConfig = {
  dialogOpen: boolean;
  enabled: boolean;
};

const defaultConfig: PluginConfig = {
  // Open the download dialog
  dialogOpen: false,
  // Enable the plugin
  enabled: true,
};

/** Selector to get the plugin config for a given window */
const getPluginConfig = (
  state: unknown,
  ownProps: { windowId: string },
): PluginConfig => {
  const { downloadDialog = {} } = getWindowConfig(state, ownProps);
  return { ...defaultConfig, ...(downloadDialog as Partial<PluginConfig>) };
};

export { getPluginConfig };
export type { PluginConfig };
