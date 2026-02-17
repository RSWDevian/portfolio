"use client"

import { Box, Typography, Link, Chip } from "@mui/material";

export default function Contact() {
  return (
    <Box
      sx={{
        mb: 10,
        py: 10,
        textAlign: "center",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 3,
      }}
    >
      <Chip
        label="Contact"
        size="small"
        sx={{
          bgcolor: "rgba(125, 211, 252, 0.1)",
          color: "primary.main",
          border: "1px solid rgba(125, 211, 252, 0.3)",
          fontWeight: 500,
        }}
      />

      <Typography
        variant="h2"
        sx={{
          fontSize: { xs: "2.5rem", md: "3.5rem" },
          fontWeight: 700,
          color: "text.primary",
        }}
      >
        Let's Connect
      </Typography>

      <Typography
        sx={{
          fontSize: { xs: "1rem", md: "1.125rem" },
          color: "text.secondary",
          maxWidth: 600,
          lineHeight: 1.8,
        }}
      >
        Want to chat? Just shoot me a dm{" "}
        <Link
          href="https://twitter.com/yourusername"
          target="_blank"
          rel="noopener noreferrer"
          sx={{
            color: "primary.main",
            textDecoration: "none",
            "&:hover": {
              textDecoration: "underline",
            },
          }}
        >
          with a direct question on Twitter
        </Link>{" "}
        and I'll respond whenever I can. I will ignore all soliciting.
      </Typography>
    </Box>
  );
}