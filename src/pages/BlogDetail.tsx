import { useEffect, useState } from "react";
import { Box, Container, Typography, CircularProgress, Button } from "@mui/material";
import { useParams, Link as RouterLink } from "react-router-dom";
import { fetchBlogBySlug, type BlogPost } from "@/lib/blogApi";
import Markdown from "@/components/Markdown";

export default function BlogDetail() {
  const { slug } = useParams<{ slug: string }>();
  const [post, setPost] = useState<BlogPost | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;
    if (!slug) {
      setPost(null);
      setLoading(false);
      return;
    }
    setLoading(true);
    fetchBlogBySlug(slug).then((data) => {
      if (!cancelled) {
        setPost(data);
        setLoading(false);
      }
    });
    return () => {
      cancelled = true;
    };
  }, [slug]);

  if (loading) {
    return (
      <Box sx={{ py: 6 }}>
        <Container maxWidth="md" sx={{ display: "flex", justifyContent: "center", py: 6 }}>
          <CircularProgress />
        </Container>
      </Box>
    );
  }

  if (!post) {
    return (
      <Box sx={{ py: 6 }}>
        <Container maxWidth="md">
          <Typography variant="h4" fontWeight={700}>
            Blog not found
          </Typography>
          <Button
            component={RouterLink}
            to="/blogs"
            sx={{ mt: 2, textTransform: "none" }}
          >
            Back to Blogs
          </Button>
        </Container>
      </Box>
    );
  }

  const date = new Date(post.publishedDate).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <Box sx={{ py: 6 }}>
      <Container maxWidth="md">
        <Button
          component={RouterLink}
          to="/blogs"
          sx={{ mb: 3, textTransform: "none", color: "text.secondary" }}
        >
          ← Back to Blogs
        </Button>

        <Typography variant="h4" fontWeight={700}>
          {post.title}
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mt: 1, mb: 4 }}>
          {date} • {post.author}
        </Typography>

        <Markdown content={post.content} />
      </Container>
    </Box>
  );
}
