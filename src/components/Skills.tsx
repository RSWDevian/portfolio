import { Box, Stack, Typography, Chip } from "@mui/material";
import { skills } from "@/data/data";

export default function Skills() {
  return (
    <Box>
      <Stack spacing={1}>
        <Typography variant="caption" fontSize={18} fontWeight={700} color="text.secondary" sx={{ textTransform: "uppercase", letterSpacing: 1 }}>
          Skills
        </Typography>

        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            gap: 1,
          }}
        >
          {skills.map((skill, index) => (
            <Chip
              key={index}
              label={skill}
              size="small"
              sx={{
                bgcolor: "primary.light",
                color: "primary.main",
                border: "1px solid",
                borderColor: "primary.light",
                borderTopLeftRadius: 0,
                borderBottomRightRadius: 0,
                borderTopRightRadius: 10,
                borderBottomLeftRadius: 10,
                fontWeight: 500,
                cursor: "pointer",
                fontSize: "0.8rem",
                px: 1,
                py: 0.5,
                "&:hover": {
                  bgcolor: "primary.main",
                  color: "black",
                  borderColor: "primary.main",
                  transform: "scale(1.1)",
                  transition: "all 0.2s ease-in-out",
                },
              }}
            />
          ))}
        </Box>
      </Stack>
    </Box>
  );
}
