import Box from "@material-ui/core/Box";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Typography from "@material-ui/core/Typography";
import PropTypes from "prop-types";
import React from "react";

import ImageLink from "./ImageLink";

const CanvasDownloadLinks = ({ canvas, label, sizes, t }) => (
  <Card className="mb-3" raised>
    <CardContent>
      <Typography component="h5" variant="h6">
        <Box fontWeight="fontWeightBold" textTransform="none">{`${t(
          "image"
        )}: ${label}`}</Box>
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
            [{ height: canvas.getHeight(), width: canvas.getWidth() }]
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

CanvasDownloadLinks.defaultProps = {
  sizes: [],
};

CanvasDownloadLinks.propTypes = {
  canvas: PropTypes.shape({
    getCanonicalImageUri: PropTypes.func.isRequired,
    getHeight: PropTypes.func.isRequired,
    getWidth: PropTypes.func.isRequired,
  }).isRequired,
  label: PropTypes.oneOfType(PropTypes.number, PropTypes.string).isRequired,
  sizes: PropTypes.arrayOf(
    PropTypes.shape({
      height: PropTypes.number.isRequired,
      width: PropTypes.number.isRequired,
    })
  ),
  t: PropTypes.func.isRequired,
};

export default CanvasDownloadLinks;
