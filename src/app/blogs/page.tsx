import { Box, Stack, Typography } from "@mui/material";
import Link from "next/link";
import { blogs } from "../json/blogData";

export default function BlogsPage() {
  return (
    <Box
      sx={{
        minHeight: "70vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        py: 8,
      }}
    >
      <Box sx={{ width: "100%", maxWidth: 720 }}>
        <Typography variant="h4" fontWeight={700} sx={{ mb: 4 }}>
          Blogs
        </Typography>

        <Stack spacing={2}>
          {[...blogs].reverse().map((blog) => (
            <Link
              key={blog.slug}
              href={`/blog/${blog.slug}`}
              style={{ textDecoration: "none" }}
            >
              <Typography
                sx={{
                  color: "text.primary",
                  fontSize: { xs: "1.05rem", md: "1.15rem" },
                  "&:hover": { color: "primary.main" },
                }}
              >
                {blog.name}
              </Typography>
            </Link>
          ))}
        </Stack>
      </Box>
    </Box>
  );
}