import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Typography from "@mui/material/Typography";
import { Canvas, ImageSize } from "mirador";
import { useTranslation } from "react-i18next";

import ImageLink from "./ImageLink";

interface CanvasDownloadLinksProps {
  canvas: Canvas;
  label: number | string;
  sizes?: ImageSize[];
}

const CanvasDownloadLinks = ({
  canvas,
  label,
  sizes = [],
}: CanvasDownloadLinksProps) => {
  const { t } = useTranslation();
  return (
    <Card className="mb-3" raised>
      <CardContent>
        <Typography
          component="h5"
          style={{ textTransform: "none" }}
          variant="h6"
        >
          <Box fontWeight="fontWeightBold">{`${t("image")}: ${label}`}</Box>
        </Typography>
        <List>
          {sizes
            .sort((a, b) => b.width - a.width)
            .slice(1)
            .reduce(
              (acc, { height, width }) => {
                // only take sizes, where the difference between the last taken width
                // and the current one is bigger than 500 pixels
                if (acc[acc.length - 1].width - width >= 500) {
                  acc.push({ height, width });
                }
                return acc;
              },
              // this represents the full size
              [{ height: canvas.getHeight(), width: canvas.getWidth() }],
            )
            .map(({ height, width }) => (
              <ListItem dense key={`${height}x${width}`}>
                <ImageLink
                  height={height}
                  linkTarget={canvas.getCanonicalImageUri(width)}
                  width={width}
                />
              </ListItem>
            ))}
        </List>
      </CardContent>
    </Card>
  );
};

export default CanvasDownloadLinks;
