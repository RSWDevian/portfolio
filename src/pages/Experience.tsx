import { Box, Container, Stack, Typography, Chip } from "@mui/material";
import { experiences } from "@/data/data";

export default function ExperiencePage() {
  return (
    <Box sx={{ py: 14 }}>
      <Container maxWidth="md">
        <Typography variant="h4" fontWeight={700}>
          Experience
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mt: 1, mb: 4 }}>
          Professional journey across robotics, embedded systems, and product
          development.
        </Typography>

        <Stack spacing={2}>
          {experiences.map((item) => (
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
                    <Typography
                      variant="h6"
                      fontWeight={700}
                      color="text.primary"
                      sx={{ whiteSpace: "nowrap" }}
                  >
                    {item.company}
                  </Typography>
                  {item.current && (
                    <Chip
                      label="Working"
                      size="small"
                      sx={{
                        color: "white",
                        bgcolor: "primary.secondary",
                        border: "none",
                        height: 20,
                        fontSize: "0.75rem",
                        ml: 0.5,
                      }}
                    />
                  )}
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

              <Stack spacing={0.75} sx={{ mt: 1.5 }}>
                {item.description.map((point, index) => {
                  const colonIndex = point.indexOf(":");
                  const heading =
                    colonIndex > -1 ? point.slice(0, colonIndex + 1) : null;
                  const body =
                    colonIndex > -1 ? point.slice(colonIndex + 1).trim() : point;

                  return (
                    <Stack
                      key={index}
                      direction="row"
                      spacing={1}
                      alignItems="baseline"
                    >
                      <Typography
                        variant="body2"
                        component="span"
                        color="primary.main"
                        sx={{ lineHeight: "inherit", flexShrink: 0 }}
                      >
                        •
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {heading ? (
                          <>
                            <Box
                              component="span"
                              sx={{
                                fontWeight: 700,
                                color: "text.primary",
                              }}
                            >
                              {heading}
                            </Box>{" "}
                            {body}
                          </>
                        ) : (
                          body
                        )}
                      </Typography>
                    </Stack>
                  );
                })}
              </Stack>
            </Box>
          ))}
        </Stack>
      </Container>
    </Box>
  );
}
