import { withPlugins } from "mirador/dist/es/src/extend/withPlugins";
import { withTranslation } from "react-i18next";
import { connect } from "react-redux";
import { compose } from "redux";

import DownloadDialogPluginArea from "../../components/dialog/DownloadDialogPluginArea";

const ComposedDownloadDialogPluginArea = compose(
  withTranslation(),
  connect(null, null),
  withPlugins("DownloadDialogPluginArea"),
)(DownloadDialogPluginArea);

export default ComposedDownloadDialogPluginArea;
