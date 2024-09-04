import { useState } from "react";
import { styled, Paper, Grid2, Avatar, Typography, List, ListItem, ListItemText, ListItemAvatar, IconButton, Menu, MenuItem, alpha, Divider } from "@mui/material";
import ButtonPrimary from "../ui/ButtonPrimary";
import { MoreVert, Edit, Delete, Flag } from "@mui/icons-material";
import ExpandedView from "./ExpandView";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  border: "1px solid #cecece",
  boxShadow: "none",
  borderRadius: 15,
  color: theme.palette.text.secondary,
  ...theme.applyStyles("dark", {
    backgroundColor: "#1A2027",
  }),
}));
const StyledMenu = styled((props) => (
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'right',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'right',
    }}
    {...props}
  />
))(({ theme }) => ({
  '& .MuiPaper-root': {
    borderRadius: 6,
    marginTop: theme.spacing(1),
    minWidth: 180,
    color: 'rgb(55, 65, 81)',
    border: '1px solid #cecece',
    '& .MuiMenu-list': {
      padding: '4px 0',
    },
    '& .MuiMenuItem-root': {
      '& .MuiSvgIcon-root': {
        fontSize: 18,
        color: theme.palette.text.secondary,
        marginRight: theme.spacing(1.5),
      },
      '&:active': {
        backgroundColor: alpha(
          theme.palette.primary.main,
          theme.palette.action.selectedOpacity,
        ),
      },
    },
    ...theme.applyStyles('dark', {
      color: theme.palette.grey[300],
    }),
  },
}));

export default function TileView({ students }) {
  const [tileExpand, setTileExpand] = useState(new Array(students.length).fill(false));
  const [anchorEl, setAnchorEl] = useState(new Array(students.length).fill(null));
  const [visibleStudents, setVisibleStudents] = useState(24);

  const handleTileBunClick = (event, index) => {
    setAnchorEl((prevAnchorEl) => {
      prevAnchorEl[index] = event.currentTarget;
      return [...prevAnchorEl];
    });
  };

  const handleExpandClick = (index) => {
    setTileExpand((prevTileExpand) => {
      const newTileExpanded = [...prevTileExpand];
      newTileExpanded[index] = !newTileExpanded[index];
      return newTileExpanded;
    });
  };

  const handleClose = (index) => {
    setAnchorEl((prevAnchorEl) => {
      prevAnchorEl[index] = null;
      return [...prevAnchorEl];
    });
  };

  const handleLoadMore = () => {
    setVisibleStudents((prevVisibleStudents) => prevVisibleStudents + 6);
  };

  return (
    <Grid2 container spacing={2}>
      {students.slice(0, visibleStudents).map((student, index) => (
        <Grid2 size={3} key={student.id} onClick={() => handleExpandClick(index)}>
          <Item>
            <List sx={{ width: "100%", bgcolor: "background.paper" }} disablePadding>
              <ListItem alignItems="flex-start" disablePadding>
                <ListItemAvatar sx={{ marginRight: 2, marginTop: 0 }}>
                  <Avatar alt={student.name} src={student.image} sx={{ width: 56, height: 56 }} />
                </ListItemAvatar>
                <ListItemText
                  primary={student.name}
                  secondary={
                    <>
                      <Typography component="span" variant="body2" sx={{ color: "text.primary", display: "inline" }}>
                        {student.gender}, {student.age}
                      </Typography>
                      {" - "} {student.address.country}
                    </>
                  }
                />
                <IconButton aria-label="settings" onClick={(event) => handleTileBunClick(event, index)}>
                  <MoreVert />
                </IconButton>
                <StyledMenu
                  id={`demo-customized-menu-${index}`}
                  MenuListProps={{
                    "aria-labelledby": `demo-customized-button-${index}`,
                  }}
                  anchorEl={anchorEl[index]}
                  open={Boolean(anchorEl[index])}
                  onClose={() => handleClose(index)}
                >
                  <MenuItem onClick={() => handleClose(index)} disableRipple>
                    <Edit />
                    Edit
                  </MenuItem>
                  <Divider sx={{ my: 0.25 }} />
                  <MenuItem onClick={() => handleClose(index)} disableRipple>
                    <Delete />
                    Delete
                  </MenuItem>
                  <Divider sx={{ my: 0.25 }} />
                  <MenuItem onClick={() => handleClose(index)} disableRipple>
                    <Flag />
                    Flag
                  </MenuItem>
                </StyledMenu>
              </ListItem>
            </List>
            <ExpandedView student={student} open={tileExpand[index]} onClose={() => handleExpandClick(index)} />
          </Item>
        </Grid2>
      ))}
      {visibleStudents < students.length && (
        <Grid2 size={12} sx={{ textAlign: 'right' }}>
          <ButtonPrimary variant="contained" onClick={handleLoadMore}>
            Load More
          </ButtonPrimary>
        </Grid2>
      )}
    </Grid2>
  );
}