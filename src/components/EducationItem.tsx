import {
  Box,
  Typography,
  Avatar,
} from "@mui/material";

export default function EducationItem({ data }: any) {
  return (
    <Box sx={{ mb: 2 }}>
      <Box sx={{ flex: 1 }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
            gap: 2,
          }}
        >
          <Box sx={{ display: "flex", gap: 2 }}>
            <Avatar
              src={data.logo}
              alt={data.institution}
              sx={{
                width: 44,
                height: 44,
                border: "1px solid",
                borderColor: "primary.light",
                bgcolor: "background.paper",
              }}
            />
            <Box>
              <Typography variant="h6" fontWeight={600}>
                {data.institution}
              </Typography>

              <Typography variant="body2" color="text.disabled">
                {data.degree} - {data.field}
              </Typography>

              <Typography variant="caption" color="text.secondary">
                {data.location} • {data.dateRange}
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
