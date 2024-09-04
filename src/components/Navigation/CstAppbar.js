import { useState } from "react";
import { useTheme } from "@mui/material/styles";
import { Box, IconButton, Menu, MenuItem, Tooltip, Avatar, Divider, ListItemIcon, Button } from "@mui/material";
import MuiAppBar from "@mui/material/AppBar";
import { get4k } from "../../utils/Helpers";
import { Logout, Settings } from "@mui/icons-material";

const pages = ['Products', 'Pricing', 'Blog'];

const CstAppbar = ({ onDrawerOpen, ondrawerWidth, onBelowXlBreakpoint, onBelowLgBreakpoint, onhandleDrawerToggle }) => {
  const theme = useTheme();
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <MuiAppBar
      position="fixed"
      open={onDrawerOpen}
      sx={{
        zIndex: -1,
        marginLeft: onDrawerOpen ? ondrawerWidth : "",
        width: !onBelowXlBreakpoint ? (onDrawerOpen ? `calc(100% - ${ondrawerWidth}px)` : `calc(100% - ${theme.spacing(13.125)} + 1px)`) : `100%`,
        [theme.breakpoints.up("xxxl")]: { width: onDrawerOpen ? `calc(100% - ${get4k(ondrawerWidth)})` : `calc(100% - ${get4k(105)})` },
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center", textAlign: "center", justifyContent: "flex-end", marginRight: 3, [theme.breakpoints.up("xs")]: { minHeight: 80 }, [theme.breakpoints.up("xxxl")]: { minHeight: get4k(80) } }}>
        {pages.map((page) => (
          <Button key={page} onClick={handleClose} sx={{ my: 2, color: 'rgba(0, 0, 0, 0.6)', border: 'none', display: "block", '&:hover': {color: "var(--primary-color)"} }}>
            {page}
          </Button>
        ))}
        <Tooltip title="Account settings">
          <IconButton onClick={handleClick} size="small" sx={{ ml: 2 }} aria-controls={open ? "account-menu" : undefined} aria-haspopup="true" aria-expanded={open ? "true" : undefined}>
            <Avatar sx={{ width: 32, height: 32 }}>M</Avatar>
          </IconButton>
        </Tooltip>
      </Box>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        slotProps={{
          paper: {
            elevation: 0,
            sx: {
              overflow: "visible",
              filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
              mt: 1.5,
              "& .MuiAvatar-root": {
                width: 32,
                height: 32,
                ml: -0.5,
                mr: 1,
              },
              "&::before": {
                content: '""',
                display: "block",
                position: "absolute",
                top: 0,
                right: 14,
                width: 10,
                height: 10,
                bgcolor: "background.paper",
                transform: "translateY(-50%) rotate(45deg)",
                zIndex: 0,
              },
            },
          },
        }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        <MenuItem onClick={handleClose}>
          <Avatar /> Profile
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Avatar /> My account
        </MenuItem>
        <Divider />
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <Settings fontSize="small" sx={{ color: "#cecece" }} />
          </ListItemIcon>
          Settings
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <Logout fontSize="small" sx={{ color: "#cecece" }} />
          </ListItemIcon>
          Logout
        </MenuItem>
      </Menu>
    </MuiAppBar>
  );
};
export default CstAppbar;
