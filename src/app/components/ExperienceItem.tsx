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

export default function ExperienceItem({ data }: any) {
  const [open, setOpen] = useState(false);

  return (
    <Box sx={{ display: "flex", position: "relative", mb: 2 }}>
      {/* Timeline Line */}
      <Box
        sx={{
          position: "absolute",
          left: 9,
          top: 0,
          bottom: 0,
          width: "2px",
          bgcolor: "grey.800",
        }}
      />

      {/* Timeline Dot */}
      <Box
        sx={{
          width: 18,
          height: 18,
          borderRadius: "50%",
          bgcolor: "grey.500",
          mt: 1,
          mr: 3,
          zIndex: 1,
        }}
      />

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
              alt={data.company}
              sx={{
                width: 44,
                height: 44,
                border: "1px solid rgba(125, 211, 252, 0.2)",
                bgcolor: "grey.900",
              }}
            />
            <Box>
              <Typography variant="h6" fontWeight={600}>
                {data.company}
              </Typography>

              <Typography variant="body2" color="grey.400">
                {data.role}
              </Typography>

              <Typography variant="caption" color="grey.600">
                {data.location} • {data.dateRange}
              </Typography>
            </Box>
          </Box>

          <IconButton size="small" onClick={() => setOpen(!open)}>
            {open ? <ExpandLess /> : <ExpandMore />}
          </IconButton>
        </Box>

        <Collapse in={open}>
          <Box sx={{ mt: 2 }}>
            {data.description.map((point: string, index: number) => (
              <Typography
                key={index}
                variant="body2"
                color="grey.400"
                sx={{ mb: 1 }}
              >
                • {point}
              </Typography>
            ))}
          </Box>
        </Collapse>
      </Box>
    </Box>
  );
}