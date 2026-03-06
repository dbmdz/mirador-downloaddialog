import {
  getCanvasLabel,
  getContainerId,
  getManifestRelatedContent,
  getManifestUrl,
  getVisibleCanvases,
  selectInfoResponse,
  updateWindow,
} from "mirador";
import { withTranslation } from "react-i18next";

import DownloadButton from "./components/DownloadButton";
import DownloadDialog from "./components/DownloadDialog";
import translations from "./locales";
import { getPluginConfig } from "./state/selectors";

export default [
  {
    component: withTranslation()(DownloadButton),
    config: {
      translations,
    },
    mapDispatchToProps: (dispatch, { windowId }) => ({
      updateConfig: (downloadDialog) =>
        dispatch(updateWindow(windowId, { downloadDialog })),
    }),
    mapStateToProps: (state, { windowId }) => ({
      containerId: getContainerId(state),
      config: getPluginConfig(state, { windowId }),
    }),
    mode: "add",
    name: "DownloadButton",
    target: "WindowTopBarPluginArea",
  },
  {
    component: withTranslation()(DownloadDialog),
    config: {
      translations,
    },
    mapDispatchToProps: (dispatch, { windowId }) => ({
      updateConfig: (downloadDialog) =>
        dispatch(updateWindow(windowId, { downloadDialog })),
    }),
    mapStateToProps: (state, { windowId }) => ({
      canvasLabel: (canvasId) => getCanvasLabel(state, { canvasId, windowId }),
      config: getPluginConfig(state, { windowId }),
      containerId: getContainerId(state),
      infoResponse: (canvasId) =>
        selectInfoResponse(state, { canvasId, windowId }) ?? {},
      manifestUrl: getManifestUrl(state, { windowId }),
      seeAlso: getManifestRelatedContent(state, { windowId }),
      visibleCanvases: getVisibleCanvases(state, { windowId }),
    }),
    mode: "add",
    name: "DownloadDialog",
    target: "Window",
  },
];

export { DownloadDialog, getPluginConfig, translations };
