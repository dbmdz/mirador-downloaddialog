import Box from "@material-ui/core/Box";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Typography from "@material-ui/core/Typography";
import PropTypes from "prop-types";
import React from "react";

import ImageLink from "./ImageLink";

const CanvasDownloadLinks = ({ canvas, label, sizes, maxWidth, t }) => (
  <Card className="mb-3" raised>
    <CardContent>
      <Typography component="h5" style={{ textTransform: "none" }} variant="h6">
        <Box fontWeight="fontWeightBold">{`${t("image")}: ${label}`}</Box>
      </Typography>
      <List>
        {sizes
          .sort((a, b) => b.width - a.width)
          .reduce(
            (acc, { height, width }) => {
              // Initialize the array with either the full size, or the first size that matches the max width
              if (acc.length === 0) {
                if (meetsSizeLimit(width, maxWidth)) {
                  acc.push({ height, width });
                }
              // Once the array has been initalized, check if each subsequent size should be added
              // only take sizes, where the difference between the last taken width
              // and the current one is bigger than 500 pixels
              // and where the width doesn't exceed the max width, if set
              } else if (meetsSizeLimit(width, maxWidth) && (acc[acc.length - 1].width - width >= 500)) {
                acc.push({ height, width });
              }

              return acc;
            },[]
          )
          .map(({ height, width }) => (
            <ListItem dense key={`${height}x${width}`}>
              <ImageLink
                height={height}
                linkTarget={canvas.getCanonicalImageUri(width)}
                t={t}
                width={width}
              />
            </ListItem>
          ))}
      </List>
    </CardContent>
  </Card>
);

// function for checking if a max width has been set and if so, comparing it to a given width 
const meetsSizeLimit = (width, maxWidth) => {
  if (maxWidth && maxWidth != null) {
    return width <= maxWidth;
  } else return true;
}

CanvasDownloadLinks.defaultProps = {
  sizes: [],
};

CanvasDownloadLinks.propTypes = {
  canvas: PropTypes.shape({
    getCanonicalImageUri: PropTypes.func.isRequired,
    getHeight: PropTypes.func.isRequired,
    getWidth: PropTypes.func.isRequired,
  }).isRequired,
  label: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  sizes: PropTypes.arrayOf(
    PropTypes.shape({
      height: PropTypes.number.isRequired,
      width: PropTypes.number.isRequired,
    }),
  ),
  maxWidth: PropTypes.number,
  t: PropTypes.func.isRequired,
};

export default CanvasDownloadLinks;
