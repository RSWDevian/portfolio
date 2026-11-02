import {
  Box,
  Typography,
  IconButton,
  Collapse,
  Avatar,
} from "@mui/material";
import { ExpandMore, ExpandLess } from "@mui/icons-material";
import { useState } from "react";

export default function ExperienceItem({ data }: any) {
  const [open, setOpen] = useState(false);

  return (
    <Box sx={{ display: "flex", position: "relative", mb: 2 }}>
      <Box
        sx={{
          position: "absolute",
          left: 9,
          top: 0,
          bottom: 0,
          width: "2px",
          bgcolor: "neutral.main",
        }}
      />

      <Box
        sx={{
          width: 18,
          height: 18,
          borderRadius: "50%",
          bgcolor: "text.disabled",
          mt: 1,
          mr: 3,
          zIndex: 1,
        }}
      />

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
                border: "1px solid",
                borderColor: "primary.light",
                bgcolor: "background.paper",
              }}
            />
            <Box>
              <Typography variant="h6" fontWeight={600}>
                {data.company}
              </Typography>

              <Typography variant="body2" color="text.disabled">
                {data.role}
              </Typography>

              <Typography variant="caption" color="text.secondary">
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
                color="text.disabled"
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
