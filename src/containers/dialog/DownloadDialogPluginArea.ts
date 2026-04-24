import { withPlugins } from "mirador";
import { ComponentType } from "react";

import DownloadDialogPluginArea from "../../components/dialog/DownloadDialogPluginArea";

interface Props {
  windowId: string;
}

export default withPlugins("DownloadDialogPluginArea")(
  DownloadDialogPluginArea,
) as unknown as ComponentType<Props>;
