import { Box, Container, Typography } from "@mui/material";
import { useParams } from "react-router-dom";
import { blogs } from "@/data/blogData";

export default function BlogDetail() {
  const { slug } = useParams<{ slug: string }>();
  const blog = blogs.find((b) => b.slug === slug);

  if (!blog) {
    return (
      <Container maxWidth="md">
        <Typography variant="h4">Blog not found</Typography>
      </Container>
    );
  }

  return (
    <Box sx={{ py: 6 }}>
      <Container maxWidth="md">
        <Typography variant="h4" fontWeight={700} sx={{ mb: 2 }}>
          {blog.name}
        </Typography>
        <Typography color="text.secondary" sx={{ mb: 4 }}>
          {blog.slug}
        </Typography>
        <Typography>
          Content for "{blog.name}" coming soon.
        </Typography>
      </Container>
    </Box>
  );
}
