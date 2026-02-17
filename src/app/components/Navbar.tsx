"use client";

import { Box, Stack, IconButton, Tooltip } from "@mui/material";
import { Brightness4, Brightness7 } from "@mui/icons-material";
import { navItems, socialItems } from "@/app/json/data";
import { useTheme } from "@mui/material/styles";
import { useContext } from "react";
// import { ColorModeContext } from "../providers";

export default function FloatingNav() {
  const theme = useTheme();
  // const colorMode = useContext(ColorModeContext);

  return (
    <Box
      sx={{
        position: "fixed",
        bottom: 32,
        left: "50%",
        transform: "translateX(-50%)",
        zIndex: 1000,
      }}
    >
      <Box
        sx={{
          backgroundColor: "rgba(17, 23, 34, 0.8)",
          backdropFilter: "blur(12px)",
          borderRadius: "50px",
          border: "1px solid rgba(125, 211, 252, 0.1)",
          padding: "8px 16px",
          boxShadow: "0 8px 32px rgba(0, 0, 0, 0.3)",
        }}
      >
        <Stack direction="row" spacing={1} alignItems="center">
          {/* Section 1: Navigation Links */}
          {navItems.map((item) => (
            <Tooltip key={item.label} title={item.label} placement="top">
              <IconButton
                component="a"
                href={item.href}
                size="small"
                sx={{
                  color: "text.secondary",
                  transition: "all 0.3s ease",
                  "&:hover": {
                    color: "primary.main",
                    transform: "translateY(-2px)",
                  },
                }}
              >
                <item.icon fontSize="small" />
              </IconButton>
            </Tooltip>
          ))}

          {/* Divider */}
          <Box
            sx={{
              width: "1px",
              height: 24,
              backgroundColor: "rgba(125, 211, 252, 0.1)",
              mx: 0.5,
            }}
          />

          {/* Section 2: Social Links */}
          {socialItems.map((item) => (
            <Tooltip key={item.label} title={item.label} placement="top">
              <IconButton
                component="a"
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                size="small"
                sx={{
                  color: "text.secondary",
                  transition: "all 0.3s ease",
                  "&:hover": {
                    color: "secondary.main",
                    transform: "translateY(-2px)",
                  },
                }}
              >
                <item.icon fontSize="small" />
              </IconButton>
            </Tooltip>
          ))}

          {/* Divider */}
          <Box
            sx={{
              width: "1px",
              height: 24,
              backgroundColor: "rgba(125, 211, 252, 0.1)",
              mx: 0.5,
            }}
          />

          {/* Section 3: Theme Toggle */}
          <Tooltip title="Toggle Theme" placement="top">
            <IconButton
              // onClick={colorMode.toggleColorMode}
              size="small"
              sx={{
                color: "text.secondary",
                transition: "all 0.3s ease",
                "&:hover": {
                  color: "primary.main",
                  transform: "translateY(-2px)",
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
        </Stack>
      </Box>
    </Box>
  );
}