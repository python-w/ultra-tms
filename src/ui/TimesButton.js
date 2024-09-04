import { Button } from "@mui/material";
import styled from "styled-components";
import { get4k, mediaQueries } from "../utils/Helpers";
import ClearOutlinedIcon from "@mui/icons-material/ClearOutlined";

const Times = styled(Button)`
  &.MuiButton-root {
    background: transparent;
    border: 0;
    font-size: 175%;
    font-weight: normal;
    color: var(--primary-color);
    cursor: pointer;
    padding: 0;
    min-width: 40px;
    @media (min-width: ${mediaQueries.xxxl}px) {
      padding: 0;
      min-width: ${get4k(40)};
    }
  }
`;

export default function TimesButton({ onClick }) {
  return <Times onClick={onClick}><ClearOutlinedIcon /></Times>;
}
