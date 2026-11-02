import { Stack, Typography } from "@mui/material";
import SocialStack from "./SocialStack";

export default function About() {
  return (
    <Stack
      id="about"
      sx={{
        position: "relative",
        width: "100%",
        marginBottom: 4,
      }}
    >
      <Stack sx={{ width: "100%" }}>
        <Typography
          sx={{
            fontSize: { xs: 16, md: 18 },
            color: "text.secondary",
            lineHeight: 1.8,
            maxWidth: 700,
          }}
        >
          Building intelligent systems and scalable products from first
          principles.
        </Typography>
      </Stack>
      <SocialStack />
    </Stack>
  );
}
