import { Box, Typography, Chip } from "@mui/material";
import { GitHub, X, LinkedIn } from "@mui/icons-material";
import BookingWidget from "./BookingWidget";

const platformChips = [
  { label: "GitHub", Icon: GitHub, href: "https://github.com/RSWDevian" },
  { label: "Twitter", Icon: X, href: "https://x.com/RSWDevian" },
  { label: "LinkedIn", Icon: LinkedIn, href: "https://www.linkedin.com/in/abhirupguharoy/" },
];

export default function Contact() {
  return (
    <Box
      sx={{
        py: 6,
        textAlign: "center",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 2,
        borderTop: "1px solid",
        paddingBottom: 14,
        borderColor: "divider",
      }}
    >
      <Typography
        sx={{
          fontSize: "0.85rem",
          color: "text.secondary",
          fontStyle: "italic",
          maxWidth: 600,
        }}
      >
        Made it this far and interested in what i do?
      </Typography>

      <BookingWidget namespace="15min" link="abhirup-guha-roy-c1jdu5/15min" />

      <Box sx={{ width: "100%", maxWidth: 500, mt: 0.5, mb: 0.5 }}>
        <hr
          style={{
            border: 0,
            borderTop: "1px solid",
            borderColor: "divider",
            marginTop: 2,
            marginBottom: 2,
          }}
        />
      </Box>

      <Typography
        variant="h5"
        fontWeight={700}
        sx={{
          color: "text.primary",
          letterSpacing: "-0.02em",
          fontSize: "1.25rem",
        }}
      >
        Let's connect
      </Typography>

      <Typography
        sx={{
          fontSize: "0.8rem",
          color: "text.secondary",
          mb: 1,
        }}
      >
        Find me on these platforms
      </Typography>

      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: 0.5,
          mb: 1,
        }}
      >
        {platformChips.map((platform) => (
          <Chip
            key={platform.label}
            component="a"
            href={platform.href}
            target="_blank"
            rel="noopener noreferrer"
            label={platform.label}
            icon={<platform.Icon fontSize="small" />}
            size="small"
            sx={{
              bgcolor: "background.paper",
              color: "text.primary",
              border: "1px solid",
              borderColor: "divider",
              borderRadius: "20px",
              fontWeight: 500,
              fontSize: "0.75rem",
              height: 30,
              cursor: "pointer",
              transition: "all 0.2s ease",
              "&:hover": {
                bgcolor: "primary.main",
                color: "white",
                borderColor: "primary.main",
                transform: "translateY(-1px)",
              },
            }}
          />
        ))}
      </Box>

      <Box
        component="a"
        href="https://drive.google.com/file/d/1m73f8b_m_gt4JV-3H-Bd-akOnJzsmia4/view?usp=sharing"
        target="_blank"
        rel="noopener noreferrer"
        sx={{
          display: "inline-flex",
          alignItems: "center",
          gap: 0.5,
          bgcolor: "background.paper",
          border: "1px solid",
          borderColor: "divider",
          borderRadius: "20px",
          padding: "6px 16px",
          cursor: "pointer",
          textDecoration: "none",
          transition: "all 0.2s ease",
          "&:hover": {
            borderColor: "primary.main",
            transform: "translateY(-1px)",
          },
        }}
      >
        <Box sx={{ fontSize: "1rem" }}>{"\u2702"}</Box>
        <Typography sx={{ fontWeight: 600, fontSize: "0.85rem", color: "text.primary" }}>
          Resume
        </Typography>
      </Box>

      <Box sx={{ width: "100%", maxWidth: 500, mt: 2, mb: 1 }}>
        <hr
          style={{
            border: 0,
            borderTop: "1px solid",
            borderColor: "divider",
            marginTop: 2,
            marginBottom: 2,
          }}
        />
      </Box>

      <Box sx={{ display: "flex", justifyContent: "space-between", width: "100%", maxWidth: 500, gap: 1 }}>
        <Typography sx={{ fontSize: "0.7rem", color: "text.disabled" }}>
          © 2026 Abhirup Guha Roy.
        </Typography>
        <Box sx={{ display: "flex", gap: 1 }}>
          {["Home", "Blog", "Projects", "Resume"].map((navItem) => (
            <Box
              key={navItem}
              component="a"
              href={navItem === "Home" ? "/" : navItem === "Blog" ? "/blogs" : navItem === "Projects" ? "/works" : "#"}
              sx={{
                fontSize: "0.7rem",
                color: "text.disabled",
                textDecoration: "none",
                "&:hover": {
                  color: "primary.main",
                },
              }}
            >
              {navItem}
              <Box sx={{ ml: 0.15, fontSize: "0.5rem", opacity: 0.6 }}>&rarr;</Box>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
}
