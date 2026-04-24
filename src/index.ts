// eslint-disable-next-line @typescript-eslint/triple-slash-reference
/// <reference path="./mirador.d.ts" />

import {
  getCanvasLabel,
  getConfig,
  getManifestSeeAlso,
  getManifestUrl,
  getVisibleCanvases,
  selectInfoResponse,
  updateWindow,
} from "mirador";
import { ComponentType } from "react";

import DownloadButton from "./components/DownloadButton";
import DownloadDialog from "./components/DownloadDialog";
import translations from "./locales";
import type { PluginConfig } from "./state/selectors";
import { getPluginConfig } from "./state/selectors";

interface MiradorPlugin {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  component: ComponentType<any>;
  config?: Record<string, unknown>;
  mapDispatchToProps?: (
    dispatch: (action: unknown) => void,
    ownProps: { windowId: string },
  ) => Record<string, unknown>;
  mapStateToProps?: (
    state: unknown,
    ownProps: { windowId: string },
  ) => Record<string, unknown>;
  mode: string;
  name: string;
  target: string;
}

const plugins: MiradorPlugin[] = [
  {
    component: DownloadButton,
    config: {
      translations,
    },
    mapDispatchToProps: (
      dispatch: (action: unknown) => void,
      { windowId }: { windowId: string },
    ) => ({
      updateConfig: (downloadDialog: Partial<PluginConfig>) =>
        dispatch(updateWindow(windowId, { downloadDialog })),
    }),
    mapStateToProps: (state: unknown, { windowId }: { windowId: string }) => ({
      containerId: getConfig(state).id,
      config: getPluginConfig(state, { windowId }),
    }),
    mode: "add",
    name: "DownloadButton",
    target: "WindowTopBarPluginArea",
  },
  {
    component: DownloadDialog,
    config: {
      translations,
    },
    mapDispatchToProps: (
      dispatch: (action: unknown) => void,
      { windowId }: { windowId: string },
    ) => ({
      updateConfig: (downloadDialog: Partial<PluginConfig>) =>
        dispatch(updateWindow(windowId, { downloadDialog })),
    }),
    mapStateToProps: (state: unknown, { windowId }: { windowId: string }) => ({
      canvasLabel: (canvasId: string) =>
        getCanvasLabel(state, { canvasId, windowId }),
      config: getPluginConfig(state, { windowId }),
      containerId: getConfig(state).id,
      infoResponse: (canvasId: string) =>
        selectInfoResponse(state, { canvasId, windowId }) ?? {},
      manifestUrl: getManifestUrl(state, { windowId }),
      seeAlso: getManifestSeeAlso(state, { windowId }),
      visibleCanvases: getVisibleCanvases(state, { windowId }),
    }),
    mode: "add",
    name: "DownloadDialog",
    target: "Window",
  },
];

export default plugins;
export { DownloadDialog, getPluginConfig, translations };
export type { PluginConfig } from "./state/selectors";
