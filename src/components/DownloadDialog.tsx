import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogTitle from "@mui/material/DialogTitle";
import Link from "@mui/material/Link";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import { useTheme } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import { TFunction } from "i18next";
import { Canvas, ImageSize, ScrollIndicatedDialogContent } from "mirador";
import { ReactElement } from "react";

import DownloadDialogPluginArea from "../containers/dialog/DownloadDialogPluginArea";
import { PluginConfig } from "../state/selectors";
import CanvasDownloadLinks from "./dialog/CanvasDownloadLinks";

interface SeeAlsoEntry {
  format?: string;
  label?: string;
  value?: string;
}

interface DownloadDialogProps {
  canvasLabel: (canvasId: string) => string;
  children?: ReactElement;
  config: PluginConfig;
  containerId: string;
  infoResponse: (canvasId: string) => { json?: { sizes?: ImageSize[] } };
  manifestUrl?: string;
  seeAlso?: SeeAlsoEntry[];
  t: TFunction;
  updateConfig: (config: PluginConfig) => void;
  visibleCanvases: Canvas[];
  windowId: string;
}

const DownloadDialog = ({
  canvasLabel,
  children,
  config,
  containerId,
  infoResponse,
  manifestUrl,
  seeAlso = [],
  t,
  updateConfig,
  visibleCanvases,
  windowId,
}: DownloadDialogProps) => {
  const theme = useTheme();
  const { dialogOpen, enabled } = config;
  if (!enabled || !dialogOpen) {
    return null;
  }
  const closeDialog = () =>
    updateConfig({
      ...config,
      dialogOpen: false,
    });
  return (
    <Dialog
      container={document.querySelector(`#${containerId} .mirador-viewer`)}
      fullWidth
      maxWidth="xs"
      onClose={closeDialog}
      open={dialogOpen}
      scroll="paper"
    >
      <DialogTitle>
        <Typography variant="h4">
          <Box fontWeight="fontWeightBold">{t("downloadOptions")}</Box>
        </Typography>
      </DialogTitle>
      <ScrollIndicatedDialogContent dividers>
        {visibleCanvases.map((canvas) => (
          <CanvasDownloadLinks
            canvas={canvas}
            key={canvas.id}
            label={canvasLabel(canvas.id)}
            sizes={infoResponse(canvas.id).json?.sizes}
            t={t}
          />
        ))}
        <DownloadDialogPluginArea windowId={windowId} />
        {children}
        <Box sx={{ marginTop: "1rem" }}>
          <Card raised>
            <CardContent>
              <Typography
                component="h5"
                style={{ textTransform: "none" }}
                variant="h6"
              >
                <Box fontWeight="fontWeightBold">
                  {t("otherDownloadOptions")}
                </Box>
              </Typography>
              <List>
                <ListItem dense>
                  <Box
                    fontFamily={theme.typography.fontFamily ?? "sans-serif"}
                    fontSize="0.75rem"
                  >
                    <Link href={manifestUrl} rel="noopener" target="_blank">
                      {t("iiifManifest")}
                    </Link>
                  </Box>
                </ListItem>
                {seeAlso
                  .filter(({ format }) => format !== "text/html")
                  .map(({ label, value }) => (
                    <ListItem dense key={value}>
                      <Box
                        fontFamily={theme.typography.fontFamily ?? "sans-serif"}
                        fontSize="0.75rem"
                      >
                        <Link href={value} rel="noopener" target="_blank">
                          {label}
                        </Link>
                      </Box>
                    </ListItem>
                  ))}
              </List>
            </CardContent>
          </Card>
        </Box>
      </ScrollIndicatedDialogContent>
      <DialogActions>
        <Button color="primary" onClick={closeDialog}>
          {t("close")}
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default DownloadDialog;
