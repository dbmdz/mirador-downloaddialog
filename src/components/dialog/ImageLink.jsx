import Box from "@material-ui/core/Box";
import Link from "@material-ui/core/Link";
import { useTheme } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import React from "react";

const ImageLink = ({ height, linkTarget, t, width }) => {
  const theme = useTheme();
  return (
    <Box
      fontFamily={theme.typography.fontFamily ?? "sans-serif"}
      fontSize="0.75rem"
    >
      JPEG:{" "}
      <Link href={linkTarget} target="_blank">
        {`${width} x ${height} ${t("pixels")}`}
      </Link>
    </Box>
  );
};

ImageLink.propTypes = {
  height: PropTypes.number.isRequired,
  linkTarget: PropTypes.string.isRequired,
  t: PropTypes.func.isRequired,
  width: PropTypes.number.isRequired,
};

export default ImageLink;
