import Mirador from "mirador/dist/es/src/index";
import React from "react";

import downloadDialogPlugin from "../../src";

const Foobar = ({ windowId }) => <span>{windowId}</span>;

const config = {
  catalog: [
    {
      manifestId:
        "https://api.digitale-sammlungen.de/iiif/presentation/v2/bsb00135902/manifest",
      provider: "Bavarian State Library",
    },
    {
      manifestId:
        "https://api.digitale-sammlungen.de/iiif/presentation/v2/bsb10532463_00005_u001/manifest",
      provider: "Bavarian State Library",
    },
    {
      manifestId:
        "https://api.digitale-sammlungen.de/iiif/presentation/v2/bsb00034024/manifest",
      provider: "Bavarian State Library",
    },
  ],
  id: "demo",
  window: {
    allowFullscreen: true,
  },
  windows: [
    {
      canvasIndex: 8,
      downloadDialog: {
        AdditionalComponent: Foobar,
      },
      manifestId:
        "https://api.digitale-sammlungen.de/iiif/presentation/v2/bsb00034024/manifest",
      view: "single",
    },
  ],
};

Mirador.viewer(config, [...downloadDialogPlugin]);
