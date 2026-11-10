import { Box, Container, Stack, Typography, Chip, Button } from "@mui/material";
import { ArrowOutward } from "@mui/icons-material";
import { works } from "@/data/data";

const linkLabelMap: Record<string, string> = {
  Visit: "Website",
  Website: "Website",
  Post: "Website",
  CaseStudy: "Website",
  Repo: "Source",
  RepoLink: "Source",
};

export default function WorksPage() {
  return (
    <Box sx={{ py: 6 }}>
      <Container maxWidth="md">
        <Stack spacing={3}>
          <Box>
            <Typography variant="h4" fontWeight={700}>
              Projects
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
              A collection of projects spanning robotics, embedded systems,
              blockchain, and AI/ML.
            </Typography>
          </Box>

          <Stack spacing={2}>
          {[...works].reverse().map((work) => {
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
                  borderRadius: 2,
                  background: "background.paper",
                  border: "1px solid",
                  borderColor: "divider",
                  overflow: "hidden",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <Box
                  sx={{
                    height: 200,
                    width: "100%",
                    backgroundImage: `url(${work.image})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    borderBottom: "1px solid",
                    borderColor: "divider",
                  }}
                />

                <Box sx={{ padding: 2, flex: 1, display: "flex", flexDirection: "column" }}>
                  {work.featured && (
                    <Chip
                      label="Featured"
                      size="small"
                      sx={{
                        position: "absolute",
                        top: 12,
                        right: 12,
                        bgcolor: "secondary.light",
                        color: "secondary.main",
                        border: "1px solid",
                        borderColor: "secondary.light",
                        fontWeight: 600,
                        fontSize: "0.75rem",
                      }}
                    />
                  )}

                  <Stack spacing={0.5} flex={1}>
                    <Stack direction="row" spacing={0.5} alignItems="center" sx={{ mb: 0.5 }}>
                      <Typography
                        variant="caption"
                        color="text.disabled"
                        sx={{ fontSize: "0.75rem" }}
                      >
                        {work.year} • {work.role}
                      </Typography>
                      {work.featured && (
                        <Chip
                          label="Featured"
                          size="small"
                          sx={{
                            bgcolor: "secondary.light",
                            color: "secondary.main",
                            border: "1px solid",
                            borderColor: "secondary.light",
                            fontWeight: 600,
                            fontSize: "0.7rem",
                          }}
                        />
                      )}
                    </Stack>

                    <Typography
                      variant="h6"
                      fontWeight={700}
                      sx={{ fontSize: "1.1rem", mb: 0.5 }}
                    >
                      {work.title}
                    </Typography>

                    <Typography
                      variant="body2"
                      color="text.secondary"
                      sx={{ fontSize: "0.85rem", lineHeight: 1.6, mb: 1, flex: 1 }}
                    >
                      {work.summary}
                    </Typography>

                    <Stack direction="row" spacing={0.5} flexWrap="wrap" sx={{ mb: 1 }}>
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
                            fontSize: "0.75rem",
                            px: 0.75,
                            py: 0.3,
                          }}
                        />
                      ))}
                    </Stack>

                    <Stack direction="row" spacing={0.5}>
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
                            py: 0.4,
                            fontSize: "0.85rem",
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
                            py: 0.4,
                            fontSize: "0.85rem",
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
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
}
