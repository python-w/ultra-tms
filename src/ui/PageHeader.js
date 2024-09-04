import { Box, useTheme, ButtonGroup } from "@mui/material";
import unionSvg from "../images/union.svg";
import styled from "styled-components";
import ButtonPrimary from "./ButtonPrimary";
import { get4k } from "../utils/Helpers";

const StyledBox = styled(Box)`
  position: relative;
  img {
    position: absolute;
    top: 0;
    left: 100%;
    height: 100%;
    width: auto;
  }
`;

export default function PageHeader({ title, icon, icon1, hasBtn, handlePageView }) {
  const theme = useTheme();
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        paddingRight: hasBtn && "32px",
        [theme.breakpoints.up("xxxl")]: { paddingRight: hasBtn && get4k(32) },
        [theme.breakpoints.down("sm")]: {
          paddingRight: hasBtn && "16px",
        },
      }}
    >
      <StyledBox
        component="span"
        sx={{
          fontSize: "24px",
          fontWeight: "700",
          textTransform: "uppercase",
          color: "var(--primary-color)",
          padding: "20px 32px",
          background: "#fff",
          display: "inline-block",
          letterSpacing: "2.4px",
          [theme.breakpoints.up("xxxl")]: {
            fontSize: get4k(24),
            padding: `${get4k(20)} ${get4k(32)}`,
          },
          [theme.breakpoints.down("sm")]: {
            fontSize: "20px",
            letterSpacing: 1,
            padding: "10px 0 10px 20px",
          },
        }}
      >
        {title} <img src={unionSvg} alt="icon" />
      </StyledBox>
      {hasBtn && (
        <ButtonGroup variant="contained" aria-label="Basic button group" disableElevation>
          <ButtonPrimary onClick={() => handlePageView('tile')}>{icon}</ButtonPrimary>
          <ButtonPrimary onClick={() => handlePageView('grid')}>{icon1}</ButtonPrimary>
        </ButtonGroup>
      )}
    </Box>
  );
}
