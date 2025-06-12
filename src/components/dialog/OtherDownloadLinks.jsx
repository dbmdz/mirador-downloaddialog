import Box from "@material-ui/core/Box";
import Link from "@material-ui/core/Link";
import ListItem from "@material-ui/core/ListItem";
import { useTheme } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import React from "react";

const OtherDownloadLinks = ({ links }) => {
  const theme = useTheme();
  return (
    <>
      {links
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
    </>
  )
}

OtherDownloadLinks.propTypes = {
  links: PropTypes.arrayOf(
    PropTypes.shape({
      format: PropTypes.string,
      label: PropTypes.string,
      value: PropTypes.string,
    })
  )
}

export default OtherDownloadLinks;