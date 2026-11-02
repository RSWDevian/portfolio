import { Box, Stack, Typography, Chip } from "@mui/material";
import { achievements } from "@/data/data";

export default function AchievementsPage() {
  return (
    <Box sx={{ py: 6, px: { xs: 2, md: 4 } }}>
      <Stack spacing={4}>
        <Box>
          <Typography variant="h4" fontWeight={700} color="primary.main">
            Certifications &amp; Achievements
          </Typography>
        </Box>

        <Stack spacing={2}>
          {achievements.map((item) => (
            <Box
              key={item.id}
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "flex-start",
                pb: 2,
                borderBottom: "1px solid",
                borderColor: "divider",
              }}
            >
              <Box sx={{ flex: 1 }}>
                <Stack
                  direction="row"
                  spacing={1}
                  alignItems="center"
                  sx={{ flexWrap: "wrap" }}
                >
                  {item.link ? (
                    <Typography
                      component="a"
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      variant="h6"
                      fontWeight={700}
                      color="text.primary"
                      sx={{
                        textDecoration: "none",
                        "&:hover": { color: "primary.main" },
                      }}
                    >
                      {item.title}
                    </Typography>
                  ) : (
                    <Typography
                      variant="h6"
                      fontWeight={700}
                      color="text.primary"
                    >
                      {item.title}
                    </Typography>
                  )}
                  <Chip
                    label={item.type}
                    size="small"
                    sx={{
                      color: "white",
                      bgcolor:
                        item.type === "Certification"
                          ? "primary.main"
                          : "secondary.main",
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
                  {item.issuer}
                </Typography>
              </Box>

              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-end",
                  textAlign: "right",
                  minWidth: 120,
                }}
              >
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ whiteSpace: "nowrap" }}
                >
                  {item.date}
                </Typography>
              </Box>
            </Box>
          ))}
        </Stack>
      </Stack>
    </Box>
  );
}
