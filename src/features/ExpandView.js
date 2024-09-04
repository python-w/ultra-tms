import React from "react";
import { Modal, Box, Typography, Avatar, Divider, useTheme } from "@mui/material";
import TimesButton from "../ui/TimesButton";
import ButtonPrimary from "../ui/ButtonPrimary";
import { get4k, mediaQueries } from "../utils/Helpers";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "80%",
  maxWidth: 600,
  bgcolor: "background.paper",
  boxShadow: 24,
  borderRadius: 8,
  pt: 2,
  px: 4,
  pb: 3,
};
export default function ExpandedView({ student, open, onClose }) {
  const theme = useTheme();
  return (
    <Modal open={open} onClose={onClose} aria-labelledby="expanded-view-modal" aria-describedby="expanded-view-modal-description">
      <Box sx={style}>
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <Avatar sx={{ width: 150, height: 150 }} alt={student.name} src={student.image} />
          <h2>{student.name}</h2>
        </Box>
        <Divider sx={{ mt: 1, mb: 2, [theme.breakpoints.up("xxxl")]: { mt: get4k(8), mb: get4k(16) } }} />
        <Box>
          <Box sx={{display: 'flex', mb: 3}}>
            <Box sx={{flex: '0 0 50%'}}>
              <Typography component="h6" variant="h6" sx={{ textTransform: "uppercase", fontWeight: 700 }}>
                Age
              </Typography>{" "}
              <Typography component="p" variant="p">
                {student.age}
              </Typography>
            </Box>
            <Box sx={{flex: '0 0 50%'}}>
              <Typography component="h6" variant="h6" sx={{ textTransform: "uppercase", fontWeight: 700 }}>
                Gender
              </Typography>{" "}
              <Typography component="p" variant="p">
                {student.gender}
              </Typography>
            </Box>
          </Box>
          <Box sx={{display: 'flex', mb: 3}}>
            <Box sx={{flex: '0 0 50%'}}>
              <Typography component="h6" variant="h6" sx={{ textTransform: "uppercase", fontWeight: 700 }}>
                Email
              </Typography>{" "}
              <Typography component="p" variant="p">
                {student.email}
              </Typography>
            </Box>
            <Box sx={{flex: '0 0 50%'}}>
              <Typography component="h6" variant="h6" sx={{ textTransform: "uppercase", fontWeight: 700 }}>
                Phone
              </Typography>{" "}
              <Typography component="p" variant="p">
                {student.phone}
              </Typography>
            </Box>
          </Box>
          <Box sx={{display: 'flex', mb: 3}}>
            <Box sx={{flex: '0 0 50%'}}>
              <Typography component="h6" variant="h6" sx={{ textTransform: "uppercase", fontWeight: 700 }}>
                Courses
              </Typography>{" "}
              <Typography component="p" variant="p">
                {student.courses.map((course) => course).join(", ")}
              </Typography>
            </Box>
            <Box sx={{flex: '0 0 50%'}}>
              <Typography component="h6" variant="h6" sx={{ textTransform: "uppercase", fontWeight: 700 }}>
                GPA
              </Typography>{" "}
              <Typography component="p" variant="p">
                {student.gpa}
              </Typography>
            </Box>
          </Box>
          <Box sx={{display: 'flex', mb: 3}}>
            <Box sx={{flex: '0 0 100%'}}>
              <Typography component="h6" variant="h6" sx={{ textTransform: "uppercase", fontWeight: 700 }}>
                Address
              </Typography>{" "}
              <Typography component="p" variant="p">
                {student.address.street}, {student.address.city}, {student.address.zip}, {student.address.country}
              </Typography>
            </Box>
          </Box>
        </Box>
        <ButtonPrimary>Back to tile view</ButtonPrimary>
      </Box>
    </Modal>
  );
}
