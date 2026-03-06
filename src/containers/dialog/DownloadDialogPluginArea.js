import { withPlugins } from "mirador";
import { withTranslation } from "react-i18next";

import DownloadDialogPluginArea from "../../components/dialog/DownloadDialogPluginArea";

export default withTranslation()(
  withPlugins("DownloadDialogPluginArea")(DownloadDialogPluginArea),
);
