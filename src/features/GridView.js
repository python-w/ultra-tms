import React from "react";
import { Avatar, TableBody, TableCell, TableContainer, TableRow } from "@mui/material";
import CustomTable from "../ui/CustomTable";

export default function GridView({ students }) {
  const headers = ["", "Name", "Age", "Gender", "Email", "Phone #", "Courses", "GPA", "Address"];
  return (
    <TableContainer>
      <CustomTable headers={headers}>
        <TableBody>
          {students.map((student) => (
            <TableRow key={student.id}>
              <TableCell>
                <Avatar alt={student.name} src={student.image} />
              </TableCell>
              <TableCell>{student.name}</TableCell>
              <TableCell>{student.age}</TableCell>
              <TableCell>{student.gender}</TableCell>
              <TableCell>{student.email}</TableCell>
              <TableCell>{student.phone}</TableCell>
              <TableCell>
                {student.courses.map((course) => course).join(", ")}
              </TableCell>
              <TableCell>{student.gpa}</TableCell>
              <TableCell>{student.address.street}, {student.address.city}, {student.address.zip}, {student.address.country}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </CustomTable>
    </TableContainer>
  );
}
