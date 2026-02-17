"use client"

import {
  Box,
  Typography,
  IconButton,
  Collapse,
  Divider,
  Avatar
} from "@mui/material";
import { ExpandMore, ExpandLess } from "@mui/icons-material";
import { useState } from "react";

export default function EducationItem({ data }: any) {
  const [open, setOpen] = useState(false);

  return (
    <Box sx={{ mb: 2 }}>
      {/* Content */}
      <Box sx={{ flex: 1 }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
            gap: 2,
          }}
        >
          <Box sx={{ display: "flex", gap: 2 }}>
            <Avatar
              src={data.logo}
              alt={data.institution}
              sx={{
                width: 44,
                height: 44,
                border: "1px solid rgba(125, 211, 252, 0.2)",
                bgcolor: "grey.900",
              }}
            />
            <Box>
              <Typography variant="h6" fontWeight={600}>
                {data.institution}
              </Typography>

              <Typography variant="body2" color="grey.400">
                {data.degree} - {data.field}
              </Typography>

              <Typography variant="caption" color="grey.600">
                {data.location} • {data.dateRange}
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}