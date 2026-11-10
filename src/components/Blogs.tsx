import { useEffect, useState } from "react";
import { Box, Stack, Typography, Button, CircularProgress } from "@mui/material";
import { ArrowOutward } from "@mui/icons-material";
import { Link as RouterLink } from "react-router-dom";
import { fetchBlogs, type BlogPost } from "@/lib/blogApi";
import BlogCard from "@/components/BlogCard";

const RECENT_COUNT = 3;

export default function Blogs() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;
    fetchBlogs().then((data) => {
      if (!cancelled) {
        setPosts(data.slice(0, RECENT_COUNT));
        setLoading(false);
      }
    });
    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <Box sx={{ py: 4 }} id="blogs">
      <Stack spacing={1} sx={{ mb: 3 }}>
        <Typography
          variant="caption"
          fontSize={18}
          fontWeight={700}
          color="text.secondary"
          sx={{ textTransform: "uppercase", letterSpacing: 1 }}
        >
          Blogs & Discussions
        </Typography>
      </Stack>

      {loading ? (
        <Box sx={{ display: "flex", justifyContent: "center", py: 3 }}>
          <CircularProgress size={28} />
        </Box>
      ) : (
        <Stack spacing={2}>
          {posts.map((post) => (
            <BlogCard key={post._id} post={post} />
          ))}
        </Stack>
      )}

      <Box sx={{ display: "flex", justifyContent: "center", mt: 2 }}>
        <Button
          component={RouterLink}
          to="/blogs"
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
          View All Blogs
        </Button>
      </Box>
    </Box>
  );
}
