import { withPlugins } from "mirador";
import { ComponentType } from "react";
import { withTranslation } from "react-i18next";

import DownloadDialogPluginArea from "../../components/dialog/DownloadDialogPluginArea";

type Props = { windowId: string };

export default withTranslation()(
  withPlugins("DownloadDialogPluginArea")(DownloadDialogPluginArea),
) as ComponentType<Props>;
