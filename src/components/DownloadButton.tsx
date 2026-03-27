import DownloadIcon from "@mui/icons-material/VerticalAlignBottomSharp";
import { TFunction } from "i18next";
import { MiradorMenuButton } from "mirador";

import { PluginConfig } from "../state/selectors";

interface DownloadButtonProps {
  config: PluginConfig;
  containerId: string;
  t: TFunction;
  updateConfig: (config: PluginConfig) => void;
}

const DownloadButton = ({
  config,
  containerId,
  t,
  updateConfig,
}: DownloadButtonProps) => {
  const { dialogOpen, enabled } = config;
  if (!enabled) {
    return null;
  }
  return (
    <MiradorMenuButton
      aria-expanded={dialogOpen}
      aria-haspopup
      aria-label={t("showDownloadOptions")}
      containerId={containerId}
      onClick={() =>
        updateConfig({
          ...config,
          dialogOpen: !dialogOpen,
        })
      }
    >
      <DownloadIcon />
    </MiradorMenuButton>
  );
};

export default DownloadButton;
