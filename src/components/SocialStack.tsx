import { Stack, IconButton, Tooltip } from "@mui/material";
import { GitHub, LinkedIn, YouTube } from "@mui/icons-material";

const CodeforcesIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-label="Codeforces"
  >
    <circle cx="12" cy="12" r="11" fill="#1f8533" />
    <path
      d="M12 8.5v7M7.5 12h9"
      stroke="white"
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
);

const LeetCodeIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-label="LeetCode"
  >
    <rect
      width="24"
      height="24"
      rx="6"
      fill="#f89c1c"
    />
    <path
      d="M7 8l3 3 3-3M7 16l3-3 3 3"
      stroke="#1a1a1a"
      strokeWidth="2.5"
      strokeLinecap="round"
    />
  </svg>
);

interface SocialLink {
  Icon: React.ComponentType<any>;
  label: string;
  href: string;
}

const socialLinks: SocialLink[] = [
  {
    Icon: GitHub,
    label: "GitHub",
    href: "https://github.com/RSWDevian",
  },
  {
    Icon: LinkedIn,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/abhirupguharoy/",
  },
  {
    Icon: YouTube,
    label: "YouTube",
    href: "https://youtube.com/@RSWDevian",
  },
  {
    Icon: CodeforcesIcon,
    label: "Codeforces",
    href: "https://codeforces.com/profile/Abhirup_Guha_Roy_29",
  },
  {
    Icon: LeetCodeIcon,
    label: "LeetCode",
    href: "https://leetcode.com/u/BlazeWard",
  },
];

export default function SocialStack() {
  return (
    <Stack direction="row" spacing={1.5} sx={{ mt: 3, flexWrap: "wrap" }}>
      {socialLinks.map((link) => (
        <Tooltip key={link.label} title={link.label} placement="top">
          <IconButton
            component="a"
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            size="small"
            sx={{
              color: "text.secondary",
              border: "1px solid",
              borderColor: "divider",
              bgcolor: "background.paper",
              "&:hover": {
                color: "primary.main",
                borderColor: "primary.main",
                transform: "translateY(-3px)",
                transition: "all 0.2s ease-in-out",
              },
            }}
          >
            <link.Icon />
          </IconButton>
        </Tooltip>
      ))}
    </Stack>
  );
}
