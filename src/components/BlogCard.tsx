import { Box, Typography } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import type { BlogPost } from "@/lib/blogApi";

export default function BlogCard({ post }: { post: BlogPost }) {
  const date = new Date(post.publishedDate).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });

  return (
    <Box
      component={RouterLink}
      to={`/blogs/${post.slug}`}
      sx={{
        display: "block",
        textDecoration: "none",
        px: 2.5,
        py: 2,
        borderRadius: 2,
        transition:
          "transform 0.2s ease, background-color 0.2s ease, border-color 0.2s ease",
        "&:hover": {
          transform: "scale(1.02)",
          bgcolor: "action.hover",
          borderColor: "background.paper",
        },
      }}
    >
      <Typography variant="caption" color="text.disabled" sx={{ fontSize: "0.75rem" }}>
        {date} • {post.author}
      </Typography>
      <Typography sx={{fontSize: "1.125rem"}} fontWeight={700} color="text.primary">
        {post.title}
      </Typography>
      <Typography
        variant="body2"
        color="text.secondary"
        sx={{ mt: 0.5, fontSize: "0.85rem", lineHeight: 1.6 }}
      >
        {post.excerpt}
      </Typography>
    </Box>
  );
}
