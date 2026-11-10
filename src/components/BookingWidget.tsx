import { Box, Typography, CircularProgress, Avatar, Button } from "@mui/material";
import { getCalApi } from "@calcom/embed-react";
import { useEffect, useState } from "react";

interface BookingWidgetProps {
  namespace?: string;
  link?: string;
}

export default function BookingWidget({ namespace = "15min", link }: BookingWidgetProps) {
  const [initialized, setInitialized] = useState(false);

  useEffect(() => {
    if (!link) return;
    (async function () {
      const cal = await getCalApi({ namespace });
      cal("ui", { hideEventTypeDetails: false, layout: "month_view" });
      setInitialized(true);
    })();
  }, [namespace, link]);

  if (!link || !initialized) {
    return (
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: 1,
          py: 2,
        }}
      >
        <CircularProgress size={32} />
        <Typography color="text.secondary" sx={{ fontSize: "0.8rem" }}>
          Configure your Cal.com link to enable booking
        </Typography>
      </Box>
    );
  }

  return (
    <Box sx={{ display: "flex", justifyContent: "center", py: 1 }}>
      <Button
        component="button"
        data-cal-namespace={namespace}
        data-cal-link={link}
        data-cal-config='{"layout":"month_view","useSlotsViewOnSmallScreen":"true"}'
        sx={{
          backgroundColor: "background.paper",
          color: "text.primary",
          border: "1px solid",
          borderColor: "divider",
          borderRadius: "32px",
          px: 3,
          py: 1,
          fontWeight: 600,
          fontSize: "0.95rem",
          textTransform: "none",
          display: "flex",
          alignItems: "center",
          gap: 1,
          transition: "all 0.2s ease",
          "&:hover": {
            backgroundColor: "rgba(99, 102, 241, 0.08)",
            borderColor: "primary.main",
            color: "primary.main",
            transform: "translateY(-1px)",
          },
        }}
      >
        <Avatar
          src={`${import.meta.env.BASE_URL}myImage.jpg`}
          alt="AGR"
          sx={{
            width: 32,
            height: 32,
            borderRadius: "50%",
            border: "2px solid",
            borderColor: "divider",
          }}
        />
        <Typography sx={{ fontSize: "0.95rem", fontWeight: 600, color: "inherit" }}>
          Book a Free Call
        </Typography>
      </Button>
    </Box>
  );
}
