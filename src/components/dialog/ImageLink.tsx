import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import { useTheme } from "@mui/material/styles";
import { TFunction } from "i18next";

type ImageLinkProps = {
  height: number;
  linkTarget: string;
  t: TFunction;
  width: number;
};

const ImageLink = ({ height, linkTarget, t, width }: ImageLinkProps) => {
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

export default ImageLink;
