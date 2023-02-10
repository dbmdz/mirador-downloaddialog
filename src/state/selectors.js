import { getWindowConfig } from "mirador/dist/es/src/state/selectors";
import { createSelector } from "reselect";

const defaultConfig = {
  // Open the download dialog
  dialogOpen: false,
  // Enable the plugin
  enabled: true,
};

/** Selector to get options for a given window */
const getPluginConfig = createSelector(
  [getWindowConfig],
  ({ downloadDialog }) => ({
    ...defaultConfig,
    ...(downloadDialog ?? {}),
  })
);

export { getPluginConfig };
