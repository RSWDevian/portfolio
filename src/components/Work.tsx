import { Box, Stack, Typography, Chip, Button } from "@mui/material";
import { ArrowOutward } from "@mui/icons-material";
import { works } from "@/data/data";
import { Link } from "react-router-dom";

const TOP_N = 4;

const linkLabelMap: Record<string, string> = {
  Visit: "Website",
  Website: "Website",
  Post: "Website",
  CaseStudy: "Website",
  Repo: "Source",
  RepoLink: "Source",
};

export default function Works() {
  const topWorks = [...works].reverse().slice(0, TOP_N);

  return (
    <Box sx={{ py: 4 }} id="works">
      <Stack spacing={1} sx={{ mb: 3 }}>
        <Typography variant="h5" fontSize={18} fontWeight={700} color="text.secondary" sx={{ textTransform: "uppercase" }}>
          Projects
        </Typography>
      </Stack>

      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", md: "repeat(2, 1fr)" },
          gap: 2,
        }}
      >
        {topWorks.map((work) => {
          const websiteLink = work.links.find(
            (l) =>
              linkLabelMap[l.label] === "Website" ||
              l.label.toLowerCase().includes("visit") ||
              l.label.toLowerCase().includes("case")
          );
          const sourceLink = work.links.find(
            (l) =>
              linkLabelMap[l.label] === "Source" ||
              l.label.toLowerCase().includes("repo")
          );

          return (
            <Box
              key={work.id}
              sx={{
                position: "relative",
                borderRadius: 1,
                background: "background.paper",
                border: "1px solid",
                borderColor: "divider",
                overflow: "hidden",
                transition: "all 0.2s ease",
                "&:hover": {
                  borderColor: "primary.light",
                  boxShadow: "0 8px 24px rgba(0, 0, 0, 0.25)",
                },
              }}
            >
              <Box
                sx={{
                  height: 120,
                  width: "100%",
                  backgroundImage: `url(${work.image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  borderBottom: "1px solid",
                  borderColor: "divider",
                }}
              />

              <Box sx={{ padding: 1.5, pt: 1 }}>
                {work.featured && (
                  <Chip
                    label="Featured"
                    size="small"
                    sx={{
                      position: "absolute",
                      top: 8,
                      right: 8,
                      bgcolor: "secondary.light",
                      color: "secondary.main",
                      border: "1px solid",
                      borderColor: "secondary.light",
                      fontWeight: 600,
                      fontSize: "0.7rem",
                    }}
                  />
                )}

                <Stack spacing={0.5}>
                  <Typography
                    variant="caption"
                    color="text.disabled"
                    sx={{ fontSize: "0.75rem" }}
                  >
                    {work.year} • {work.role}
                  </Typography>

                  <Typography
                    variant="subtitle1"
                    fontWeight={600}
                    sx={{ fontSize: "0.95rem", mb: 0.5 }}
                  >
                    {work.title}
                  </Typography>

                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ fontSize: "0.8rem", lineHeight: 1.5, mb: 1 }}
                  >
                    {work.summary}
                  </Typography>

                  <Stack direction="row" spacing={0.5} flexWrap="wrap">
                    {work.tags.map((tag, idx) => (
                      <Chip
                        key={idx}
                        size="small"
                        label={tag}
                        sx={{
                          bgcolor: "primary.light",
                          color: "primary.main",
                          border: "1px solid",
                          borderColor: "primary.light",
                          borderTopLeftRadius: 0,
                          borderBottomRightRadius: 0,
                          borderTopRightRadius: 2,
                          borderBottomLeftRadius: 2,
                          fontWeight: 500,
                          fontSize: "0.7rem",
                          px: 0.75,
                          py: 0.3,
                        }}
                      />
                    ))}
                  </Stack>

                  <Stack direction="row" spacing={0.5} sx={{ pt: 0.5 }}>
                    {websiteLink && (
                      <Button
                        component="a"
                        href={websiteLink.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        size="small"
                        sx={{
                          flex: 1,
                          color: "text.primary",
                          border: "1px solid",
                          borderColor: "divider",
                          textTransform: "none",
                          borderRadius: 2,
                          px: 1,
                          py: 0.35,
                          fontSize: "0.8rem",
                          fontWeight: 500,
                          "&:hover": {
                            borderColor: "primary.main",
                            color: "primary.main",
                            backgroundColor: "primary.light",
                          },
                        }}
                      >
                        {linkLabelMap[websiteLink.label] || websiteLink.label}
                        <ArrowOutward fontSize="small" />
                      </Button>
                    )}
                    {sourceLink && (
                      <Button
                        component="a"
                        href={sourceLink.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        size="small"
                        sx={{
                          flex: 1,
                          color: "text.primary",
                          border: "1px solid",
                          borderColor: "divider",
                          textTransform: "none",
                          borderRadius: 2,
                          px: 1,
                          py: 0.35,
                          fontSize: "0.8rem",
                          fontWeight: 500,
                          "&:hover": {
                            borderColor: "primary.main",
                            color: "primary.main",
                            backgroundColor: "primary.light",
                          },
                        }}
                      >
                        {linkLabelMap[sourceLink.label] || sourceLink.label}
                        <ArrowOutward fontSize="small" />
                      </Button>
                    )}
                  </Stack>
                </Stack>
              </Box>
            </Box>
          );
        })}
      </Box>

      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          mt: 2,
        }}
      >
        <Button
          component={Link}
          to="/works"
          startIcon={<ArrowOutward fontSize="small" />}
          sx={{
            color: "primary.main",
            border: "1px solid",
            borderColor: "primary.light",
            textTransform: "none",
            borderRadius: 2,
            px: 1.5,
            py: 0.5,
            fontSize: "0.9rem",
            fontWeight: 500,
            "&:hover": {
              borderColor: "primary.main",
              color: "primary.main",
              backgroundColor: "primary.light",
            },
          }}
        >
          View All
        </Button>
      </Box>
    </Box>
  );
}
