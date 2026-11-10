import { Box, Container, Stack, Typography, Avatar } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { useEffect } from "react";
import { getCalApi } from "@calcom/embed-react";

export default function Hero() {
  const theme = useTheme();

  useEffect(() => {
    (async function () {
      const cal = await getCalApi({ namespace: "15min" });
      cal("ui", { hideEventTypeDetails: false, layout: "month_view" });
    })();
  }, []);

  return (
    <Box id="hero" sx={{ height: "auto", paddingTop: 8, marginBottom: 4 }}>
      <Container maxWidth="md">
        <Stack
          direction={{ md: "row", sm: "column" }}
          spacing={4}
          alignItems="center"
        >
          <Box
            sx={{
              width: { xs: 100, md: 140 },
              height: { xs: 100, md: 140 },
              borderRadius: "50%",
              background: theme.palette.gradient.avatar,
              padding: 0.5,
              flexShrink: 0,
              boxShadow: "0 8px 32px rgba(0, 0, 0, 0.45)",
            }}
          >
            <Avatar
              src={`${import.meta.env.BASE_URL}myImage.jpg`}
              alt="AGR"
              sx={{
                width: "100%",
                height: "100%",
                borderRadius: "50%",
                bgcolor: "background.paper",
                border: "none",
                boxShadow: "inset 0 2px 8px rgba(0, 0, 0, 0.6)",
              }}
            />
          </Box>

          <Stack spacing={1}>
            <Typography
              variant="h1"
              sx={{
                fontSize: { xs: "1.2rem", md: "1.8rem" },
                fontWeight: "bold",
                color: "primary.main",
                marginBottom: 0.5,
                textAlign: "left",
              }}
            >
              Abhirup Guha Roy
            </Typography>

            <Typography
              sx={{
                fontSize: { xs: "1rem", md: "1.2rem" },
                color: "text.secondary",
                maxWidth: "600px",
                textAlign: "left",
                lineHeight: 1.5,
              }}
            >
              AI/ML Engineer &bull; Computer Architecture &bull; Product Management
            </Typography>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
}
