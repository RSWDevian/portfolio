import { BlogPost } from "./blogApi";

export const developerTestBlog: BlogPost = {
  _id: "dev-test-000",
  title: "First Blog",
  slug: "developer-test-blog",
  excerpt:
    "A placeholder post to verify blog card layout, typography, and responsive design before connecting the real database.",
  author: "Abhirup Guharoy",
  publishedDate: "2026-01-01",
  content: `# Developer Test Blog

This is a **placeholder post** used to verify the layout, typography, and responsive
design of the blog before the API is connected. Everything below exercises the
markdown styles supported by the renderer.

## Text Formatting

You can write text with **bold**, *italic*, ***bold italic***, \`inline code\`,
and [links](https://react.dev). Regular paragraphs wrap naturally across the
container width and remain readable at every breakpoint.

## Lists

Unordered lists:

- Robotics and embedded systems
- Blockchain prototyping in Rust
- Full-stack web development

Ordered lists:

1. Design the schema
2. Build the Express API
3. Connect the frontend

## Code Blocks

\`\`\`rust
fn main() {
    let greeting = String::from("Hello, blog!");
    println!("{greeting}");
}
\`\`\`

## Blockquotes

> Simplicity is a great virtue but it requires hard work to achieve it.
> — Edsger W. Dijkstra

## Images

Standalone images render as centered blocks with captions:

![Robotics project banner — replace this Drive link with your own shared image](https://drive.google.com/file/d/1A2b3C4d5E6f7G8h9I0jKlMnOpQrStUvW/view?usp=sharing)

Images also work inline within a paragraph, like this ![inline image example](https://drive.google.com/open?id=1A2b3C4d5E6f7G8h9I0jKlMnOpQrStUvW) one. Direct URLs (GitHub, Cloudinary, etc.) render the same way.

## Conclusion

If every section above renders correctly on mobile and desktop, the blog
components are ready for real data.`,
};

/**
 * export const developerTestBlog: BlogPost = {
  _id: "dev-test-000",
  title: "First Blog",
  slug: "developer-test-blog",
  excerpt:
    "A placeholder post to verify blog card layout, typography, and responsive design before connecting the real database.",
  author: "Abhirup Guharoy",
  publishedDate: "2026-01-01",
  content: `# Developer Test Blog

This is a **placeholder post** used to verify the layout, typography, and responsive
design of the blog before the API is connected. Everything below exercises the
markdown styles supported by the renderer.

## Text Formatting

You can write text with **bold**, *italic*, ***bold italic***, \`inline code\`,
and [links](https://react.dev). Regular paragraphs wrap naturally across the
container width and remain readable at every breakpoint.

## Lists

Unordered lists:

- Robotics and embedded systems
- Blockchain prototyping in Rust
- Full-stack web development

Ordered lists:

1. Design the schema
2. Build the Express API
3. Connect the frontend

## Code Blocks

\`\`\`rust
fn main() {
    let greeting = String::from("Hello, blog!");
    println!("{greeting}");
}
\`\`\`

## Blockquotes

> Simplicity is a great virtue but it requires hard work to achieve it.
> — Edsger W. Dijkstra

## Images

Standalone images render as centered blocks with captions:

![Robotics project banner — replace this Drive link with your own shared image](https://drive.google.com/file/d/1A2b3C4d5E6f7G8h9I0jKlMnOpQrStUvW/view?usp=sharing)

Images also work inline within a paragraph, like this ![inline image example](https://drive.google.com/open?id=1A2b3C4d5E6f7G8h9I0jKlMnOpQrStUvW) one. Direct URLs (GitHub, Cloudinary, etc.) render the same way.

## Conclusion

If every section above renders correctly on mobile and desktop, the blog
components are ready for real data.`,
 };
*/