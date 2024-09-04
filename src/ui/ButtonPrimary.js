import styled from "styled-components";
import { Button } from "@mui/material";

const PrimaryButton = styled(Button)`
    &.MuiButton-root {
        background: var(--primary-color);
        box-shadow: 0px 3px 2px 0px rgba(0, 0, 0, 0.07);
        color: #fff;
        svg{
            font-size: 130%;
            margin-right: 6px;
        }
        &:hover{
            background: #2B598D;
        }
        &:active{
            background: #2B598D;
            box-shadow: 0px 3px 6px 0px rgba(0, 0, 0, 0.20);
        }
    }
`

export default function ButtonPrimary({ children, onClick }) {
    return (
        <PrimaryButton onClick={onClick}>{children}</PrimaryButton>
    )
}
