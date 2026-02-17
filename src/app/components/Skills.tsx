"use client"

import { Box, Typography, Chip } from "@mui/material";
import { skills } from "../json/data";

export default function Skills() {
  return (
    <Box sx={{ py: 4 }}>
      <Typography variant="h5" fontWeight={700} mb={4}>
        Skills
      </Typography>

      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          gap: 1.5,
        }}
      >
        {skills.map((skill, index) => (
          <Chip
            size="small"
            key={index}
            label={skill}
            sx={{
              bgcolor: "rgba(125, 211, 252, 0.1)",
              color: "primary.main",
              border: "1px solid rgba(125, 211, 252, 0.3)",
              fontWeight: 500,
              cursor: "default",
              fontSize: "0.875rem",
              "&:hover": {
                bgcolor: "rgba(14, 16, 16, 0.2)",
                borderColor: "primary.main",
              },
            }}
          />
        ))}
      </Box>
    </Box>
  );
}