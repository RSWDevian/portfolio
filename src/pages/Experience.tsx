import { Box, Stack, Typography, Chip } from "@mui/material";
import { experiences } from "@/data/data";

export default function ExperiencePage() {
  return (
    <Box sx={{ py: 6, px: { xs: 2, md: 4 } }}>
      <Stack spacing={4}>
        <Box>
          <Typography variant="h4" fontWeight={700} color="primary.main">
            Experience
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
            Professional journey across robotics, embedded systems, and
            product development.
          </Typography>
        </Box>

        {experiences.map((item) => (
          <Box
            key={item.id}
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-start",
              mb: 4,
              pb: 3,
              borderBottom: "1px solid",
              borderColor: "divider",
              "&:last-child": { borderBottom: "none", pb: 0 },
            }}
          >
            <Box sx={{ flex: 1 }}>
              <Stack
                direction="row"
                spacing={1}
                alignItems="center"
                sx={{ flexWrap: "wrap" }}
              >
                <Typography
                  variant="h6"
                  fontWeight={700}
                  color="text.primary"
                  sx={{ whiteSpace: "nowrap" }}
                >
                  {item.company}
                </Typography>
                <Chip
                  label="Working"
                  size="small"
                  sx={{
                    color: "white",
                    bgcolor: "primary.main",
                    border: "none",
                    height: 20,
                    fontSize: "0.75rem",
                    ml: 0.5,
                  }}
                />
              </Stack>
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{ mt: 0.5, fontWeight: 500 }}
              >
                {item.role}
              </Typography>
            </Box>

            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-end",
                textAlign: "right",
                minWidth: 200,
              }}
            >
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{ whiteSpace: "nowrap" }}
              >
                {item.dateRange}
              </Typography>
              <Typography
                variant="caption"
                color="text.disabled"
                sx={{ mt: 0.5 }}
              >
                {item.location}
              </Typography>
            </Box>
          </Box>
        ))}
      </Stack>
    </Box>
  );
}
