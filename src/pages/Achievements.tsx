import { Box, Container, Stack, Typography, Chip } from "@mui/material";
import { achievements } from "@/data/data";

export default function AchievementsPage() {
  return (
    <Box sx={{ py: 6 }}>
      <Container maxWidth="md">
        <Typography variant="h4" fontWeight={700}>
          Certifications &amp; Achievements
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mt: 1, mb: 4 }}>
          Recognitions, awards, and certifications earned along the way.
        </Typography>

        <Stack spacing={2}>
          {achievements.map((item) => (
            <Box
              key={item.id}
              sx={{
                px: 2.5,
                py: 2.25,
                borderRadius: 2,
                border: "1px solid",
                borderColor: "divider",
                bgcolor: "background.paper",
                transition:
                  "transform 0.2s ease, background-color 0.2s ease, border-color 0.2s ease",
                "&:hover": {
                  transform: "scale(1.02)",
                  bgcolor: "action.hover",
                  borderColor: "primary.light",
                },
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "flex-start",
                  gap: 2,
                  flexWrap: "wrap",
                }}
              >
                <Box sx={{ flex: 1, minWidth: 200 }}>
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
                          whiteSpace: "nowrap",
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
                        sx={{ whiteSpace: "nowrap" }}
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
            </Box>
          ))}
        </Stack>
      </Container>
    </Box>
  );
}
