import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import { useTheme } from "@mui/material/styles";
import PropTypes from "prop-types";

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
