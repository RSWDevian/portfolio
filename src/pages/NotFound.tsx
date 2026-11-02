import { Box, Typography } from "@mui/material";

export default function NotFound() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "80vh",
        textAlign: "center",
      }}
    >
      <Typography variant="h4">404 - Page Not Found</Typography>
      <Typography color="text.secondary" sx={{ mt: 2 }}>
        The page you are looking for does not exist.
      </Typography>
    </Box>
  );
}
