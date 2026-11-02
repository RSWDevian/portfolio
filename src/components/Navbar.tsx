import { Box, IconButton, Tooltip } from "@mui/material";
import { Brightness4, Brightness7 } from "@mui/icons-material";
import { navItems } from "@/data/data";
import { useTheme } from "@mui/material/styles";
import { Link } from "react-router-dom";

export default function FloatingNav() {
  const theme = useTheme();

  return (
    <Box
      sx={{
        position: "fixed",
        bottom: 20,
        left: "50%",
        transform: "translateX(-50%)",
        zIndex: 1000,
        display: "flex",
        justifyContent: "center",
        transition: "all 0.2s ease",
      }}
    >
      <Box
        sx={{
          background: "rgba(17, 23, 34, 0.85)",
          backdropFilter: "blur(10px)",
          borderRadius: "20px",
          border: "1px solid",
          borderColor: "rgba(255, 255, 255, 0.08)",
          padding: "4px 4px",
          boxShadow: "0 6px 16px rgba(0, 0, 0, 0.3)",
          display: "flex",
          alignItems: "center",
          gap: 0.25,
          transition: "all 0.2s ease",
          "&:hover": {
            transform: "translateY(-10%) scale(1.08)",
            boxShadow: "0 10px 24px rgba(0, 0, 0, 0.4)",
          },
        }}
      >
        {navItems.map((item) => (
          <Tooltip key={item.label} title={item.label} placement="top">
            <IconButton
              component={item.href.startsWith("mailto") ? "a" : Link}
              to={item.href.startsWith("mailto") ? undefined : item.href}
              href={item.href.startsWith("mailto") ? item.href : undefined}
              target={item.href.startsWith("mailto") ? "_blank" : undefined}
              rel={item.href.startsWith("mailto") ? "noopener noreferrer" : undefined}
              size="small"
              sx={{
                color: "text.secondary",
                transition: "all 0.2s ease",
                borderRadius: 6,
                padding: 2,
                "&:hover": {
                  color: "primary.main",
                  backgroundColor: "rgba(99, 102, 241, 0.08)",
                },
              }}
            >
              <item.icon fontSize="small" />
            </IconButton>
          </Tooltip>
        ))}

        <Tooltip title="Toggle Theme" placement="top">
          <IconButton
            size="small"
            sx={{
              color: "text.secondary",
              transition: "all 0.2s ease",
              borderRadius: 6,
              padding: 3,
              "&:hover": {
                color: "primary.main",
                backgroundColor: "rgba(99, 102, 241, 0.08)",
              },
            }}
          >
            {theme.palette.mode === "dark" ? (
              <Brightness7 fontSize="small" />
            ) : (
              <Brightness4 fontSize="small" />
            )}
          </IconButton>
        </Tooltip>
      </Box>
    </Box>
  );
}
