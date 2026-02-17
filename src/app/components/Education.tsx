"use client"

import { Box, Typography } from "@mui/material";
import EducationItem from "./EducationItem";
import { education } from "../json/data";

export default function Education() {
  return (
    <Box>
      <Typography variant="h5" fontWeight={700} mb={6}>
        Education
      </Typography>

      {education.map((item, index) => (
        <EducationItem key={index} data={item} />
      ))}
    </Box>
  );
}