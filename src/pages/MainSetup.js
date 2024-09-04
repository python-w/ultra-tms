import { useState } from "react";
import { Box, styled } from "@mui/material";
import { get4k } from "../utils/Helpers";
import PageHeader from "../ui/PageHeader";
import PageBody from "../ui/PageBody";
import TileView from "../features/TileView";
import GridView from "../features/GridView";
import GridViewIcon from "@mui/icons-material/GridView";
import ListViewIcon from "@mui/icons-material/FormatListBulleted";
import useStudentsApi from "../services/apiStudents";

export default function MainSetup() {
  const [currentView, setCurrentView] = useState("tile");
  const { students, loading, error } = useStudentsApi();

  const DrawerHeader = styled("div")(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: theme.spacing(0, 1),
    minHeight: 80,
    [theme.breakpoints.up("xxxl")]: {
      minHeight: get4k(80),
    },
  }));

  const handlePageView = (view) => {
    setCurrentView(view);
  };

  return (
    <Box className="main_view">
      <DrawerHeader />
      <Box className="page_outer">
        <PageHeader title="First Sub Item" hasBtn={true} icon={<ListViewIcon />} icon1={<GridViewIcon />} titletxt="tile" titletxt1="grid" handlePageView={(view) => handlePageView(view)} />
        <PageBody>
          {currentView === "tile" && <TileView students={students} />}
          {currentView === "grid" && <GridView students={students} />}
        </PageBody>
      </Box>
    </Box>
  );
}
