import { Box, Stack, Typography } from "@mui/material";
import { education } from "@/data/data";

export default function Education() {
  return (
    <Box>
      <Stack spacing={1} sx={{marginBottom: 2}}>
        <Typography variant="caption" fontSize={18} fontWeight={700} color="text.secondary" sx={{ textTransform: "uppercase", letterSpacing: 1 }}>
          Education
        </Typography>

        {education.map((item) => (
          <Box
            key={item.id}
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              mb: 0.5,
              borderBottom: "1px solid",
              borderColor: "divider",
              pb: 0.5,
            }}
          >
            <Box sx={{ flex: 1 }}>
              <Typography
                variant="body2"
                fontWeight={600}
                color="text.primary"
                sx={{ whiteSpace: "nowrap", fontSize: "0.9rem" }}
              >
                {item.institution}
              </Typography>
              <Typography
                variant="caption"
                color="text.secondary"
                sx={{ mt: 0.25, fontSize: "0.8rem" }}
              >
                {item.degree} • {item.field}
              </Typography>
            </Box>

            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-end",
                textAlign: "right",
                minWidth: 180,
              }}
            >
              <Typography
                variant="caption"
                color="text.secondary"
                sx={{ whiteSpace: "nowrap", fontSize: "0.8rem" }}
              >
                {item.dateRange}
              </Typography>
              <Typography
                variant="caption"
                color="text.disabled"
                sx={{ mt: 0.25, fontSize: "0.75rem" }}
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
