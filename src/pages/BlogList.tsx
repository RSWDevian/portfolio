import { Box, Container, Typography, Chip, Link } from "@mui/material";
import { blogs } from "@/data/blogData";

export default function BlogList() {
  return (
    <Box sx={{ py: 6 }}>
      <Container maxWidth="md">
        <Typography variant="h4" fontWeight={700} sx={{ mb: 4 }}>
          Blogs
        </Typography>
        <Box sx={{ display: "flex", flexWrap: "wrap", gap: 2 }}>
          {blogs.map((blog) => (
            <Link
              key={blog.slug}
              href={`/blogs/${blog.slug}`}
              underline="none"
              sx={{ color: "text.secondary", textDecoration: "none" }}
            >
              <Chip
                label={blog.name}
                sx={{
                  bgcolor: "primary.light",
                  color: "primary.main",
                  border: "1px solid",
                  borderColor: "primary.light",
                  cursor: "pointer",
                  "&:hover": {
                    bgcolor: "primary.light",
                    borderColor: "primary.main",
                  },
                }}
              />
            </Link>
          ))}
        </Box>
      </Container>
    </Box>
  );
}
