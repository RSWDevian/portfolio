"use client"

import { Box, Stack, Typography, Chip, Button } from "@mui/material";
import { ArrowOutward } from "@mui/icons-material";
import { works } from "../json/data";

export default function Works() {
  return (
    <Box sx={{ py: 6 }} id="works">
      <Stack spacing={1} sx={{ mb: 4 }}>
        <Typography variant="h5" fontWeight={700}>
          My Works
        </Typography>
        <Typography sx={{ color: "text.secondary", maxWidth: 700 }}>
          Selected projects with a focus on robust systems, clean execution, and
          real-world constraints.
        </Typography>
      </Stack>

      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", md: "repeat(2, 1fr)" },
          gap: 3,
        }}
      >
        {[...works].reverse().map((work) => (
          <Box
            key={work.id}
            sx={{
              position: "relative",
              borderRadius: 3,
              background:
                "linear-gradient(145deg, rgba(17,23,34,0.9), rgba(10,14,22,0.9))",
              border: "1px solid rgba(125, 211, 252, 0.12)",
              boxShadow: "0 20px 60px rgba(0, 0, 0, 0.35)",
              overflow: "hidden",
            }}
          >
            {/* Image slot */}
            <Box
              sx={{
                height: 180,
                width: "100%",
                backgroundImage: `url(${work.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                borderBottom: "1px solid rgba(125, 211, 252, 0.08)",
              }}
            />

            <Box sx={{ padding: 3 }}>
              {work.featured && (
                <Chip
                  label="Featured"
                  size="small"
                  sx={{
                    position: "absolute",
                    top: 16,
                    right: 16,
                    bgcolor: "rgba(251,191,36,0.12)",
                    color: "secondary.main",
                    border: "1px solid rgba(251,191,36,0.3)",
                    fontWeight: 600,
                  }}
                />
              )}

              <Stack spacing={1.5}>
                <Typography sx={{ color: "text.secondary" }}>
                  {work.year} • {work.role}
                </Typography>

                <Typography variant="h6" fontWeight={700}>
                  {work.title}
                </Typography>

                <Typography sx={{ color: "text.secondary", lineHeight: 1.7 }}>
                  {work.summary}
                </Typography>

                <Stack direction="row" spacing={1} flexWrap="wrap">
                  {work.tags.map((tag, idx) => (
                    <Chip
                      key={idx}
                      size="small"
                      label={tag}
                      sx={{
                        bgcolor: "rgba(125, 211, 252, 0.08)",
                        color: "primary.main",
                        border: "1px solid rgba(125, 211, 252, 0.2)",
                        fontWeight: 500,
                      }}
                    />
                  ))}
                </Stack>

                <Stack direction="row" spacing={1.5} sx={{ pt: 1 }}>
                  {work.links.map((link, idx) => (
                    <Button
                      key={idx}
                      href={link.href}
                      endIcon={<ArrowOutward fontSize="small" />}
                      sx={{
                        color: "text.primary",
                        border: "1px solid rgba(255,255,255,0.12)",
                        textTransform: "none",
                        borderRadius: 2,
                        px: 1.5,
                        py: 0.5,
                        "&:hover": {
                          borderColor: "primary.main",
                          color: "primary.main",
                          backgroundColor: "rgba(125, 211, 252, 0.06)",
                        },
                      }}
                    >
                      {link.label}
                    </Button>
                  ))}
                </Stack>
              </Stack>
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
}