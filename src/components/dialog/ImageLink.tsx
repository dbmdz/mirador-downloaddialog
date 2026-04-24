import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import { useTheme } from "@mui/material/styles";
import { useTranslation } from "react-i18next";

interface ImageLinkProps {
  height: number;
  linkTarget: string;
  width: number;
}

const ImageLink = ({ height, linkTarget, width }: ImageLinkProps) => {
  const theme = useTheme();
  const { t } = useTranslation();
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
