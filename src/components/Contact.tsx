import { Box, Typography, Chip } from "@mui/material";
import { GitHub, X, LinkedIn, YouTube } from "@mui/icons-material";

const MediumIcon = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-label="Medium"
  >
    <path d="M12 2c5.523 0 8.424 2.835 8.424 6.337S17.523 14.674 12 14.674c-5.522 0-8.423-2.835-8.423-6.337S6.478 2 12 2zm0 2c-3.535 0-5.378 1.738-5.378 4.337S8.465 12.674 12 12.674s5.378-1.738 5.378-4.337S15.535 4 12 4zm0 5.173c-1.485 0-2.263.808-2.263 2.007 0 1.18.769 2.166 2.263 2.166s2.263-.986 2.263-2.166c0-1.199-.778-2.007-2.263-2.007zm0 2.146c-1.212 0-1.846.493-1.846 1.222 0 .71.625 1.301 1.846 1.301s1.846-.591 1.846-1.301c0-.729-.634-1.222-1.846-1.222z" />
  </svg>
);

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
        marginBottom: 8,
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
        If you've read this far, you might be interested in what I do.
      </Typography>

      <Box
        component="a"
        href="https://calendly.com/RSWDevian"
        target="_blank"
        rel="noopener noreferrer"
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 0.5,
          bgcolor: "background.paper",
          border: "1px solid",
          borderColor: "divider",
          borderRadius: "10px",
          padding: "6px 12px",
          cursor: "pointer",
          textDecoration: "none",
          transition: "all 0.2s ease",
          "&:hover": {
            borderColor: "primary.main",
            transform: "translateY(-1px)",
          },
        }}
      >
        <Box
          sx={{
            width: 28,
            height: 28,
            borderRadius: "50%",
            overflow: "hidden",
            border: "2px solid",
            borderColor: "divider",
          }}
        >
          <img
            src="/myImage.jpg"
            alt="AGR"
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </Box>
        <Typography
          sx={{
            fontWeight: 600,
            fontSize: "0.85rem",
            color: "text.primary",
            whiteSpace: "nowrap",
          }}
        >
          Book a Free Call
        </Typography>
      </Box>

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
        href="https://drive.google.com/file/d/1RSWDevian/view"
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
