import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogTitle from "@material-ui/core/DialogTitle";
import Link from "@material-ui/core/Link";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import { useTheme } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import ns from "mirador/dist/es/src/config/css-ns";
import ScrollIndicatedDialogContent from "mirador/dist/es/src/containers/ScrollIndicatedDialogContent";
import PropTypes from "prop-types";
import React from "react";

import DownloadDialogPluginArea from "../containers/dialog/DownloadDialogPluginArea";
import CanvasDownloadLinks from "./dialog/CanvasDownloadLinks";

const DownloadDialog = ({
  canvasLabel,
  children,
  config,
  containerId,
  infoResponse,
  manifestUrl,
  renderings,
  seeAlso,
  t,
  updateConfig,
  visibleCanvases,
  windowId,
}) => {
  const theme = useTheme();
  const { dialogOpen, enabled, includeRenderings } = config;
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
      container={document.querySelector(`#${containerId} .${ns("viewer")}`)}
      fullWidth
      maxWidth="xs"
      onClose={closeDialog}
      open={dialogOpen}
      scroll="paper"
    >
      <DialogTitle disableTypography>
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
            maxWidth={config.maxWidth}
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
                <Box fontWeight="fontWeightBold" textTransform="none">
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
                  {includeRenderings && renderings
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

DownloadDialog.defaultProps = {
  children: undefined,
  manifestUrl: undefined,
  seeAlso: [],
};

DownloadDialog.propTypes = {
  canvasLabel: PropTypes.func.isRequired,
  children: PropTypes.element,
  config: PropTypes.shape({
    dialogOpen: PropTypes.bool.isRequired,
    enabled: PropTypes.bool.isRequired,
  }).isRequired,
  containerId: PropTypes.string.isRequired,
  infoResponse: PropTypes.func.isRequired,
  manifestUrl: PropTypes.string,
  renderings: PropTypes.arrayOf(
    PropTypes.shape({
      format: PropTypes.string,
      label: PropTypes.string,
      value: PropTypes.string,
    }),
  ),
  seeAlso: PropTypes.arrayOf(
    PropTypes.shape({
      format: PropTypes.string,
      label: PropTypes.string,
      value: PropTypes.string,
    }),
  ),
  t: PropTypes.func.isRequired,
  updateConfig: PropTypes.func.isRequired,
  visibleCanvases: PropTypes.arrayOf(
    PropTypes.shape({ id: PropTypes.string, index: PropTypes.number }),
  ).isRequired,
  windowId: PropTypes.string.isRequired,
};

export default DownloadDialog;
