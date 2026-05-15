import DownloadIcon from "@mui/icons-material/VerticalAlignBottomSharp";
import { MiradorMenuButton } from "mirador";
import { useTranslation } from "react-i18next";

import { PluginConfig } from "../state/selectors";

interface DownloadButtonProps {
  config: PluginConfig;
  containerId: string;
  updateConfig: (config: PluginConfig) => void;
}

const DownloadButton = ({ config, updateConfig }: DownloadButtonProps) => {
  const { t } = useTranslation();
  const { dialogOpen, enabled } = config;
  if (!enabled) {
    return null;
  }
  return (
    <MiradorMenuButton
      aria-expanded={dialogOpen}
      aria-haspopup
      aria-label={t("showDownloadOptions")}
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
