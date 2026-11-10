import { useEffect, useState } from "react";
import { Box, Container, Stack, Typography, CircularProgress } from "@mui/material";
import { fetchBlogs, type BlogPost } from "@/lib/blogApi";
import BlogCard from "@/components/BlogCard";

export default function BlogList() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;
    fetchBlogs().then((data) => {
      if (!cancelled) {
        setPosts(data);
        setLoading(false);
      }
    });
    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <Box sx={{ py: 6 }}>
      <Container maxWidth="md">
        <Typography variant="h4" fontWeight={700}>
          Blogs
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mt: 1, mb: 4 }}>
          Thoughts and write-ups on robotics, blockchain, and web development.
        </Typography>

        {loading ? (
          <Box sx={{ display: "flex", justifyContent: "center", py: 6 }}>
            <CircularProgress />
          </Box>
        ) : (
          <Stack spacing={2}>
            {posts.map((post) => (
              <BlogCard key={post._id} post={post} />
            ))}
          </Stack>
        )}
      </Container>
    </Box>
  );
}
