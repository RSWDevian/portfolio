import { Box, Stack, Typography, Chip, Button } from "@mui/material";
import { ArrowOutward } from "@mui/icons-material";
import { Link as RouterLink } from "react-router-dom";
import { achievements } from "@/data/data";

export default function Achievements() {
  const topTwo = achievements.slice(0, 2);

  return (
    <Box>
      <Stack spacing={1} sx={{ marginBottom: 2 }}>
        <Typography
          variant="caption"
          fontSize={18}
          fontWeight={700}
          color="text.secondary"
          sx={{ textTransform: "uppercase", letterSpacing: 1 }}
        >
          Achivements &amp; Certifications
        </Typography>

        {topTwo.map((item) => (
          <Box
            key={item.id}
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              mb: 0.5,
              // borderBottom: "1px solid",
              borderColor: "divider",
              pb: 0.5,
            }}
          >
            <Box sx={{ flex: 1 }}>
              <Stack
                direction="row"
                spacing={0.5}
                alignItems="center"
                sx={{ flexWrap: "wrap" }}
              >
                <Typography
                  variant="body2"
                  fontWeight={600}
                  color="text.primary"
                  sx={{ whiteSpace: "nowrap", fontSize: "0.9rem" }}
                >
                  {item.title}
                </Typography>
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
                    height: 18,
                    fontSize: "0.7rem",
                    ml: 0.5,
                  }}
                />
              </Stack>
              <Typography
                variant="caption"
                color="text.secondary"
                sx={{ mt: 0.25, fontSize: "0.8rem" }}
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
                variant="caption"
                color="text.secondary"
                sx={{ whiteSpace: "nowrap", fontSize: "0.8rem" }}
              >
                {item.date}
              </Typography>
            </Box>
          </Box>
        ))}

        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            mt: 1,
          }}
        >
          <Button
            component={RouterLink}
            to="/achievements"
            startIcon={<ArrowOutward fontSize="small" />}
            sx={{
              color: "primary.main",
              border: "1px solid",
              borderColor: "primary.light",
              textTransform: "none",
              borderRadius: 2,
              px: 1,
              py: 0.25,
              fontSize: "0.85rem",
              "&:hover": {
                borderColor: "primary.main",
                color: "primary.main",
                backgroundColor: "primary.light",
              },
            }}
          >
            Show All
          </Button>
        </Box>
      </Stack>
    </Box>
  );
}
