import { getWindowConfig } from "mirador/dist/es/src/state/selectors";
import { createSelector } from "reselect";

const defaultConfig = {
  // Open the download dialog
  dialogOpen: false,
  // Enable the plugin
  enabled: true,
  // Set an optional size limit
  maxWidth: null,
  // Include download links to the renderings section of the manifest
  includeRenderings: false
};

/** Selector to get the plugin config for a given window */
const getPluginConfig = createSelector(
  [getWindowConfig],
  ({ downloadDialog = {} }) => ({
    ...defaultConfig,
    ...downloadDialog,
  }),
);

export { getPluginConfig };
