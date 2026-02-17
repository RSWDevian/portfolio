import { Box, Typography } from "@mui/material";
import ExperienceItem from "./ExperienceItem";
import { experiences } from "../json/data";

export default function Experience() {
  return (
    <Box>
      <Typography variant="h5" fontWeight={700} mb={6}>
        Experience
      </Typography>

      {experiences.map((item, index) => (
        <ExperienceItem key={index} data={item} />
      ))}
    </Box>
  )
}