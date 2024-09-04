import React, { useState } from "react";
import { styled, useTheme } from "@mui/material/styles";
import { Box, List, Divider, IconButton, ListItem, ListItemButton, ListItemIcon, ListItemText, useMediaQuery, Tooltip, Typography } from "@mui/material";
import MuiDrawer from "@mui/material/Drawer";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import DrawerBtnBg from "../../images/DrawerBtnBg.svg";
import CReportsSvg from "../../images/Reports.svg";
import CstAppbar from "./CstAppbar";
import { get4k, mediaQueries } from "../../utils/Helpers";
import { Outlet, NavLink, useLocation } from "react-router-dom";
import { styled as styledC } from "styled-components";
import ClubLogo from "../../images/logo.svg";
import ClubLogoIcon from "../../images/logo-icon.svg";
import UnionBg from "../../images/union.svg";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";

const drawerWidth = 400;

const openedMixin = (theme) => ({
  width: `calc((${drawerWidth} + 16) * 1px)`,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflow: "hidden",
  [theme.breakpoints.up("xxxl")]: {
    width: `calc(${get4k(drawerWidth)} + ${get4k(16)})`,
    borderRadius: `0 ${get4k(40)} ${get4k(40)} 0`,
  },
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflow: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("xl")]: {
    width: `calc(${theme.spacing(15)} + 1px)`,
  },
  [theme.breakpoints.down("xl")]: {
    width: 0,
  },
  [theme.breakpoints.up("xxxl")]: {
    width: get4k(120),
    borderRadius: `0 ${get4k(40)} ${get4k(40)} 0`,
  },
});

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== "open" })(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  overflow: "hidden",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  color: #fff;
  display: flex;

  &:hover {
    text-decoration: none;
  }
`;

const LogoBgStyled = styledC.div`
  position: absolute;
  right: -58px;
  width: 86px;
  height: 100%;
  transform: rotate(180deg) scaleX(-1);
  top: -1px;
  @media (min-width: ${mediaQueries.xxxl}px) {
    right: ${get4k(-58)};
    width: ${get4k(86)};
    top: ${get4k(-1)}
  }
  & .logoBg {
    height: 100%;
    width: auto;
  },
`;

const StyledClubLogoIcon = styled("img")(({ theme }) => ({
  width: 48,
  height: 48,
  objectFit: 'contain',
  [theme.breakpoints.up("xxxl")]: {
    width: get4k(48),
    height: get4k(48)
  }
}));

const StyledClubLogo = styled("img")(({ theme }) => ({
  width: 'auto',
  height: '48px',
  objectFit: 'contain',
  maxWidth: '100%',
  position: 'relative',
  zIndex: '1',
  [theme.breakpoints.up("xxxl")]: {
    width: 'auto',
    height: get4k(48)
  }
}));

const MiniDrawer = () => {
  const theme = useTheme();

  const isBelowXlBreakpoint = useMediaQuery(theme.breakpoints.down("xl"));
  const isBelowLgBreakpoint = useMediaQuery(theme.breakpoints.down("lg"));
  const is4KScreen = useMediaQuery(theme.breakpoints.up("xxxl"));

  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const DrawerHeader = styled("div")(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    // ...theme.mixins.toolbar,
    minHeight: 80,
    [theme.breakpoints.up("xxxl")]: {
      minHeight: get4k(80)
    }
  }));
  const handleDrawerToggle = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };
  const CloseDrawer = (drawerState) => () => {
    setIsDrawerOpen(drawerState);
  };
  const handlDrawerScroll = (index) => {
    const menuParent = document.querySelector('.menuParent-' + index);
    setIsDrawerOpen(true);
    setTimeout(function () {
      menuParent.scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
      });
    }, 100)
  }

  const menuItems = [
    {
      menu: "First Main",
      children: [
        { label: "FM First Sub Item", path: "/fm-first-sub-item" },
        { label: "FM Second Sub Item", path: "/fm-second-sub-item" },
      ],
      icon: CReportsSvg,
    },
    {
      menu: "Second Main",
      children: [
        { label: "SM First Sub Item", path: "/sm-first-sub-item" },
        { label: "SM Second Sub Item", path: "/sm-second-sub-item" },
      ],
      icon: CReportsSvg,
    },
    {
      menu: "Third Main",
      children: [
        { label: "TM First Sub Item", path: "/tm-first-sub-item" },
        { label: "TM Second Sub Item", path: "/tm-second-sub-item" },
      ],
      icon: CReportsSvg,
    },
  ];

  function CheckIfActive(menuItem) {
    const location = useLocation();
    return menuItem.children.some((child) => child.path === location.pathname);
  }

  function CheckIfActiveChild(menuItemChild) {
    const location = useLocation();
    return menuItemChild.path === location.pathname;
  }

  return (
    <>
      <Drawer className="navigationDrawer" variant="permanent" open={isDrawerOpen} anchor={"left"} onClose={() => setIsDrawerOpen(false)} sx={{ position: isBelowXlBreakpoint ? "absolute" : "relative" }}>
        {!isBelowXlBreakpoint ? (
          <IconButton disableRipple className="navDrawerBtn" onClick={handleDrawerToggle} sx={{ position: "absolute", right: 1, color: "#fff", height: 120, padding: 0, width: 16, top: 56, borderRadius: 0, overflow: "hidden", [theme.breakpoints.up("xxxl")]: { right: get4k(1), height: get4k(120), width: get4k(16), top: get4k(56) } }}>
            <img alt="Drawer Button" src={DrawerBtnBg} style={{ position: "absolute", width: "100%", height: "100%", zIndex: 1 }} />
            {isDrawerOpen ? <ChevronLeftIcon sx={{ zIndex: 2, fontSize: 24, [theme.breakpoints.up("xxxl")]: { fontSize: get4k(24) } }} /> : <ChevronRightIcon sx={{ zIndex: 2, fontSize: 24, [theme.breakpoints.up("xxxl")]: { fontSize: get4k(24) } }} />}
          </IconButton>
        ) : (
          ""
        )}
        <Box sx={{ backgroundImage: "linear-gradient(#356DAD, transparent)", backgroundColor: "#1D518D", color: "#fff", border: "none", width: `calc(100% - 16px)`, borderRadius: "0 40px 40px 0", position: "relative", height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between", overflowY: !isDrawerOpen ? "hidden" : "visible", [theme.breakpoints.up("xxxl")]: { width: `calc(100% - ${get4k(16)})`, borderRadius: `0 ${get4k(40)} ${get4k(40)} 0` } }}>
          <CstAppbar onDrawerOpen={isDrawerOpen} ondrawerWidth={drawerWidth} onBelowXlBreakpoint={isBelowXlBreakpoint} onBelowLgBreakpoint={isBelowLgBreakpoint} onhandleDrawerToggle={handleDrawerToggle} />
          <DrawerHeader
            className="drawerHeader"
            sx={{
              [theme.breakpoints.up("xxxl")]: {
                minHeight: get4k(84),
                padding: !isDrawerOpen ? `0 ${get4k(12)}` : `0 ${get4k(32)}`,
              },
              [theme.breakpoints.up("xs")]: {
                minHeight: 84,
                padding: !isDrawerOpen ? "0 12px" : "0 32px",
                zIndex: 1101,
                justifyContent: "flex-start",
              },
            }}
          >
            <Box sx={{ backgroundColor: "white", width: isDrawerOpen ? 232 : 88, height: 84, borderRadius: isDrawerOpen ? "0 0 30px 30px" : "0 0 25px 25px", display: "flex", alignItems: "center", justifyContent: "center", padding: 2, position: "relative", [theme.breakpoints.up("xxxl")]: { width: isDrawerOpen ? get4k(232) : get4k(88), height: get4k(84), borderRadius: isDrawerOpen ? `0 0 ${get4k(30)} ${get4k(30)}` : `0 0 ${get4k(25)} ${get4k(25)}`, padding: get4k(16) } }}>
              {!isDrawerOpen ? (
                <StyledClubLogoIcon src={ClubLogoIcon} width={48} height={48} alt="Club Logo Icon" />
              ) : (
                <>
                  <StyledClubLogo src={ClubLogo} width={204} height={52} alt="Club Logo" />
                  <LogoBgStyled>
                    <img src={UnionBg} width={86} height={69} className="logoBg" alt="Logo Area Style" />
                  </LogoBgStyled>
                </>
              )}
            </Box>
            {isBelowXlBreakpoint && isDrawerOpen ? (
              <IconButton disableRipple className="navDrawerBtn" onClick={CloseDrawer(false)} sx={{ position: "absolute", right: 30, color: "#fff", padding: 0, width: 16, height: 16, borderRadius: 0, overflow: "hidden", [theme.breakpoints.up("xxxl")]: { right: get4k(30), width: get4k(16), height: get4k(16) } }}>
                <CloseOutlinedIcon sx={{ zIndex: 2, fontSize: 24, [theme.breakpoints.up("xxxl")]: { fontSize: get4k(24) } }} />
              </IconButton>
            ) : (
              ""
            )}
          </DrawerHeader>
          <List
            sx={{
              flex: 1,
              overflowY: "auto",
              overflowX: "hidden",
              marginRight: "16px",
              marginLeft: isDrawerOpen ? 0 : "16px",
              mt: 4,
              [theme.breakpoints.up("xxxl")]: {
                marginRight: get4k(16),
                marginLeft: isDrawerOpen ? 0 : get4k(16),
                mt: get4k(32),
                paddingBlock: get4k(8)
              },
            }}
          >
            {menuItems.map((menuItem, index) => (
              <ListItem key={index} disablePadding sx={{ display: "block" }}>
                <List sx={{ py: 0 }}>
                  <ListItem onClick={() => handlDrawerScroll(index)}
                    sx={{
                      minHeight: 40,
                      justifyContent: isDrawerOpen ? "initial" : "center",
                      pr: 2,
                      pl: isDrawerOpen ? 4 : 2,
                      marginBottom: isDrawerOpen ? 0 : 1,
                      marginInline: isDrawerOpen ? 0 : "auto",
                      width: isDrawerOpen ? "100%" : "48px",
                      [theme.breakpoints.up("xxxl")]: {
                        minHeight: get4k(40),
                        pr: get4k(16),
                        pl: isDrawerOpen ? get4k(32) : get4k(16),
                        width: isDrawerOpen ? "100%" : get4k(48),
                        paddingBlock: get4k(8)
                      },
                    }}
                    className={`menuParent-${index}  ${!isDrawerOpen && CheckIfActive(menuItem) ? 'hasActiveChild' : ''}`}
                  >
                    {isDrawerOpen ?
                      <>
                        <ListItemIcon
                          sx={{
                            minWidth: 0,
                            mr: is4KScreen ? get4k(12) : 1.5,
                            justifyContent: "center",
                          }}
                        >
                          <img src={menuItem.icon} alt="" />
                        </ListItemIcon>
                        <ListItemText primary={menuItem.menu} sx={{ textTransform: "uppercase" }} />
                      </>
                      :
                      <Tooltip title={menuItem.menu} arrow>
                        <ListItemIcon
                          sx={{
                            minWidth: 0,
                            mr: 0,
                            justifyContent: "center",
                          }}
                        >
                          <img src={menuItem.icon} alt="" />
                        </ListItemIcon>
                      </Tooltip>
                    }
                  </ListItem>
                </List>
                {isDrawerOpen ? (
                  <>
                    <List sx={{ py: 0 }}>
                      {menuItem.children.map((menuItemChild, index) => (
                        <ListItem key={index} disablePadding sx={{ display: "block" }}>
                          <StyledNavLink to={menuItemChild.path}>
                            <ListItemButton
                              sx={{
                                minHeight: 48,
                                justifyContent: isDrawerOpen ? "initial" : "center",
                                pl: 5,
                                [theme.breakpoints.up("xxxl")]: {
                                  minHeight: get4k(48),
                                  pl: get4k(40),
                                },
                              }}
                            >
                              <ListItemIcon
                                sx={{
                                  minWidth: 0,
                                  mr: 2,
                                  justifyContent: "center",
                                  "&::before": {
                                    content: '""',
                                    width: CheckIfActiveChild(menuItemChild) ? 16 : 6,
                                    height: 6,
                                    backgroundColor: "white",
                                    borderRadius: "100px",
                                    transition: theme.transitions.create("width", {
                                      easing: theme.transitions.easing.sharp,
                                      duration: theme.transitions.duration.enteringScreen,
                                    }),
                                  },
                                  [theme.breakpoints.up("xxxl")]: {
                                    mr: get4k(16),
                                  },
                                }}
                              ></ListItemIcon>

                              <ListItemText primary={menuItemChild.label} />
                            </ListItemButton>
                          </StyledNavLink>
                        </ListItem>
                      ))}
                    </List>
                    {index !== menuItems.length - 1 && (
                      <Divider
                        sx={{
                          mr: 1,
                          ml: 4,
                          justifyContent: "center",
                          my: "20px",
                          backgroundColor: "rgba(255,255,255,0.2)",
                          [theme.breakpoints.up("xxxl")]: {
                            mr: get4k(8),
                            ml: get4k(32),
                            my: get4k(20),
                          },
                        }}
                      />
                    )}
                  </>
                ) : (
                  ""
                )}
              </ListItem>
            ))}
          </List>
          <Divider sx={{ mx: 2, mt: 2, [theme.breakpoints.up("xxxl")]: { mx: get4k(16), mt: get4k(16) } }} />
          <Box sx={{ width: "100%", height: 84, display: "flex", alignItems: "center", padding: 2, paddingLeft: !isDrawerOpen ? 2 : 4, position: "relative", justifyContent: !isDrawerOpen ? "center" : "flex-start", [theme.breakpoints.up("xxxl")]: { padding: get4k(16), paddingLeft: !isDrawerOpen ? get4k(16) : get4k(32) } }}>
            {isDrawerOpen && 
              <Typography component="p" sx={{fontSize: 14, fontWeight: '400'}}>Copyright © LogoIpsum 2024</Typography>
            }
          </Box>
        </Box>
      </Drawer>
      <Outlet />
    </>
  );
};

export default MiniDrawer;
