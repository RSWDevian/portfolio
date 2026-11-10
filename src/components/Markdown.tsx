import { Fragment, type ReactNode } from "react";
import { Box, Typography, Divider } from "@mui/material";

function resolveImageUrl(url: string): string {
  const fileIdMatch = url.match(
    /drive\.google\.com\/(?:file\/d\/|open\?id=|uc\?(?:.*&)?id=)([\w-]+)/
  );
  if (fileIdMatch) {
    return `https://drive.google.com/thumbnail?id=${fileIdMatch[1]}&sz=w1200`;
  }
  return url;
}

function MarkdownImage({
  src,
  alt,
  standalone,
}: {
  src: string;
  alt: string;
  standalone?: boolean;
}) {
  return (
    <Box
      sx={{
        my: standalone ? 2 : 0,
        textAlign: "center",
        ...(standalone ? {} : { display: "inline-block" }),
      }}
    >
      <Box
        component="img"
        src={resolveImageUrl(src)}
        alt={alt}
        loading="lazy"
        sx={{
          maxWidth: "100%",
          height: "auto",
          display: "block",
          mx: "auto",
        }}
      />
      {standalone && alt && (
        <Typography
          variant="caption"
          color="text.disabled"
          sx={{ mt: 1, display: "block" }}
        >
          {alt}
        </Typography>
      )}
    </Box>
  );
}

function renderInline(text: string, keyPrefix: string): ReactNode[] {
  const nodes: ReactNode[] = [];
  const pattern =
    /(!\[[^\]]*\]\([^)]+\)|\*\*\*[^*]+\*\*\*|\*\*[^*]+\*\*|\*[^*]+\*|`[^`]+`|\[[^\]]+\]\([^)]+\))/g;
  let lastIndex = 0;
  let match: RegExpExecArray | null;
  let i = 0;

  while ((match = pattern.exec(text)) !== null) {
    if (match.index > lastIndex) {
      nodes.push(text.slice(lastIndex, match.index));
    }
    const token = match[0];
    const key = `${keyPrefix}-${i++}`;

    if (token.startsWith("![")) {
      const inner = token.slice(2, -1);
      const alt = inner.slice(0, inner.indexOf("]("));
      const src = inner.slice(inner.indexOf("](") + 2);
      nodes.push(<MarkdownImage key={key} src={src} alt={alt} />);
    } else if (token.startsWith("***")) {
      nodes.push(
        <Box key={key} component="span" sx={{ fontWeight: 700, fontStyle: "italic" }}>
          {token.slice(3, -3)}
        </Box>
      );
    } else if (token.startsWith("**")) {
      nodes.push(
        <Box key={key} component="span" sx={{ fontWeight: 700 }}>
          {token.slice(2, -2)}
        </Box>
      );
    } else if (token.startsWith("*")) {
      nodes.push(
        <Box key={key} component="span" sx={{ fontStyle: "italic" }}>
          {token.slice(1, -1)}
        </Box>
      );
    } else if (token.startsWith("`")) {
      nodes.push(
        <Box
          key={key}
          component="code"
          sx={{
            px: 0.5,
            py: "1px",
            borderRadius: 0.5,
            bgcolor: "action.hover",
            fontFamily: "monospace",
            fontSize: "0.85em",
          }}
        >
          {token.slice(1, -1)}
        </Box>
      );
    } else {
      const label = token.slice(1, token.indexOf("]"));
      const href = token.slice(token.indexOf("(") + 1, -1);
      nodes.push(
        <Box
          key={key}
          component="a"
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          sx={{ color: "primary.main", textDecoration: "none", "&:hover": { textDecoration: "underline" } }}
        >
          {label}
        </Box>
      );
    }
    lastIndex = pattern.lastIndex;
  }

  if (lastIndex < text.length) {
    nodes.push(text.slice(lastIndex));
  }
  return nodes;
}

interface Block {
  type:
    | "heading"
    | "paragraph"
    | "code"
    | "ul"
    | "ol"
    | "quote"
    | "hr"
    | "image";
  level?: number;
  lines: string[];
  lang?: string;
  alt?: string;
  src?: string;
}

const STANDALONE_IMAGE = /^!\[([^\]]*)\]\(([^)\s]+)(?:\s+"[^"]*")?\)\s*$/;

function parseBlocks(markdown: string): Block[] {
  const lines = markdown.split("\n");
  const blocks: Block[] = [];
  let i = 0;

  while (i < lines.length) {
    const line = lines[i];

    if (line.trim().startsWith("```")) {
      const lang = line.trim().slice(3);
      const code: string[] = [];
      i++;
      while (i < lines.length && !lines[i].trim().startsWith("```")) {
        code.push(lines[i]);
        i++;
      }
      i++;
      blocks.push({ type: "code", lines: code, lang });
      continue;
    }

    if (/^\s*(-{3,}|\*{3,})\s*$/.test(line)) {
      blocks.push({ type: "hr", lines: [] });
      i++;
      continue;
    }

    const headingMatch = line.match(/^(#{1,4})\s+(.*)$/);
    if (headingMatch) {
      blocks.push({
        type: "heading",
        level: headingMatch[1].length,
        lines: [headingMatch[2]],
      });
      i++;
      continue;
    }

    if (/^\s*[-*]\s+/.test(line)) {
      const items: string[] = [];
      while (i < lines.length && /^\s*[-*]\s+/.test(lines[i])) {
        items.push(lines[i].replace(/^\s*[-*]\s+/, ""));
        i++;
      }
      blocks.push({ type: "ul", lines: items });
      continue;
    }

    if (/^\s*\d+\.\s+/.test(line)) {
      const items: string[] = [];
      while (i < lines.length && /^\s*\d+\.\s+/.test(lines[i])) {
        items.push(lines[i].replace(/^\s*\d+\.\s+/, ""));
        i++;
      }
      blocks.push({ type: "ol", lines: items });
      continue;
    }

    if (/^\s*>\s?/.test(line)) {
      const quote: string[] = [];
      while (i < lines.length && /^\s*>\s?/.test(lines[i])) {
        quote.push(lines[i].replace(/^\s*>\s?/, ""));
        i++;
      }
      blocks.push({ type: "quote", lines: quote });
      continue;
    }

    if (line.trim() === "") {
      i++;
      continue;
    }

    const standaloneImage = line.match(STANDALONE_IMAGE);
    if (standaloneImage) {
      blocks.push({
        type: "image",
        lines: [],
        alt: standaloneImage[1],
        src: standaloneImage[2],
      });
      i++;
      continue;
    }

    const paragraph: string[] = [];
    while (
      i < lines.length &&
      lines[i].trim() !== "" &&
      !/^(#{1,4})\s+/.test(lines[i]) &&
      !/^\s*[-*]\s+/.test(lines[i]) &&
      !/^\s*\d+\.\s+/.test(lines[i]) &&
      !/^\s*>\s?/.test(lines[i]) &&
      !STANDALONE_IMAGE.test(lines[i]) &&
      !lines[i].trim().startsWith("```")
    ) {
      paragraph.push(lines[i].trim());
      i++;
    }
    blocks.push({ type: "paragraph", lines: paragraph });
  }

  return blocks;
}

export default function Markdown({ content }: { content: string }) {
  const blocks = parseBlocks(content);

  return (
    <Box>
      {blocks.map((block, idx) => {
        const key = `block-${idx}`;

        switch (block.type) {
          case "heading": {
            const variants = ["h4", "h5", "h6", "subtitle1"] as const;
            return (
              <Typography
                key={key}
                variant={variants[(block.level ?? 1) - 1]}
                fontWeight={700}
                sx={{ mt: idx === 0 ? 0 : 3, mb: 1 }}
              >
                {renderInline(block.lines[0], key)}
              </Typography>
            );
          }
          case "paragraph":
            return (
              <Typography
                key={key}
                variant="body1"
                color="text.secondary"
                sx={{ mb: 2, lineHeight: 1.7 }}
              >
                {renderInline(block.lines.join(" "), key)}
              </Typography>
            );
          case "code":
            return (
              <Box
                key={key}
                sx={{
                  mb: 2,
                  p: 2,
                  borderRadius: 2,
                  bgcolor: "action.hover",
                  border: "1px solid",
                  borderColor: "divider",
                  overflowX: "auto",
                }}
              >
                <Box
                  component="pre"
                  sx={{ m: 0, fontFamily: "monospace", fontSize: "0.85rem" }}
                >
                  {block.lines.join("\n")}
                </Box>
              </Box>
            );
          case "ul":
            return (
              <Box key={key} component="ul" sx={{ pl: 3, mb: 2 }}>
                {block.lines.map((item, j) => (
                  <Typography
                    key={`${key}-${j}`}
                    component="li"
                    variant="body1"
                    color="text.secondary"
                    sx={{ mb: 0.5, lineHeight: 1.6 }}
                  >
                    {renderInline(item, `${key}-${j}`)}
                  </Typography>
                ))}
              </Box>
            );
          case "ol":
            return (
              <Box key={key} component="ol" sx={{ pl: 3, mb: 2 }}>
                {block.lines.map((item, j) => (
                  <Typography
                    key={`${key}-${j}`}
                    component="li"
                    variant="body1"
                    color="text.secondary"
                    sx={{ mb: 0.5, lineHeight: 1.6 }}
                  >
                    {renderInline(item, `${key}-${j}`)}
                  </Typography>
                ))}
              </Box>
            );
          case "quote":
            return (
              <Box
                key={key}
                sx={{
                  mb: 2,
                  pl: 2,
                  borderLeft: 3,
                  borderColor: "primary.main",
                }}
              >
                <Typography variant="body1" color="text.secondary" sx={{ fontStyle: "italic" }}>
                  {renderInline(block.lines.join(" "), key)}
                </Typography>
              </Box>
            );
          case "hr":
            return <Divider key={key} sx={{ my: 3 }} />;
          case "image":
            return (
              <MarkdownImage
                key={key}
                src={block.src ?? ""}
                alt={block.alt ?? ""}
                standalone
              />
            );
          default:
            return <Fragment key={key} />;
        }
      })}
    </Box>
  );
}
