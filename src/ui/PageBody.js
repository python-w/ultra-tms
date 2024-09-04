import { Box } from "@mui/material";

export default function PageBody({ children }) {
    return (
        <Box className="page_container">
            <Box className="page_inner">{children}</Box>
        </Box>
    )
}
