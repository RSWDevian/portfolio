import { Box, Container, Typography, Link } from "@mui/material";
import { blogs } from "@/data/blogData";

export default function BlogList() {
  return (
    <Box sx={{ py: 6 }}>
      <Container maxWidth="md">
        <Typography variant="h4" fontWeight={700} sx={{ mb: 4 }}>
          Blog Insights
        </Typography>
        <Box sx={{ display: "flex", flexWrap: "wrap", gap: 2 }}>
          {blogs.map((blog) => (
            <Link
              key={blog.slug}
              href={`/blogs/${blog.slug}`}
              underline="none"
              sx={{
                color: "text.secondary",
                textDecoration: "none",
                width: "100%",
              }}
            >
              <Box
                sx={{
                  width: "100%",
                  px: 2.5,
                  py: 1.75,
                  borderRadius: 0.5,
                  
                  color: "primary.main",
                  fontWeight: 500,
                  borderBottom: "1px solid",
                  borderColor: "primary.main",
                  cursor: "pointer",
                  transition:
                    "transform 0.2s ease, background-color 0.2s ease, border-color 0.2s ease",
                  "&:hover": {
                    borderColor: "primary.main",
                    transform: "scale(1.05)",
                  },
                }}
              >
                {blog.name}
              </Box>
            </Link>
          ))}
        </Box>
      </Container>
    </Box>
  );
}
