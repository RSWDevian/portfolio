import {
  Home,
  Work,
  Article,
  Mail,
} from "@mui/icons-material";
import { SvgIconProps } from "@mui/material";

interface NavItem {
  icon: React.ComponentType<SvgIconProps>;
  label: string;
  href: string;
}

export const navItems: NavItem[] = [
  { icon: Home, label: "Home", href: "/" },
  { icon: Work, label: "Work", href: "/experience" },
  { icon: Article, label: "Blogs", href: "/blogs" },
  { icon: Mail, label: "Mail", href: "mailto:abhirup.g.r.work.@gmail.com" },
];

export const socialItems: any[] = [];

interface ExperienceItem {
  id: number;
  company: string;
  logo: string;
  role: string;
  dateRange: string;
  location: string;
  current: boolean;
  description: string[];
}

export const experiences: ExperienceItem[] = [
  {
    id: 1,
    company: "AR VR Technology Pvt. Ltd.",
    logo: "/JUMTC.jpeg",
    role: "SDE Intern",
    dateRange: "Jul 2026 - Present(6 months internship)",
    location: "Remote",
    current: true,
    description: [
      "AI Pipeline Development: Architected and deployed an end-to-end streaming Retrieval-Augmented Generation (RAG) pipeline for the Opshiva project, enabling real-time, context-aware AI interactions.",
      "Speech Model Training: Trained and fine-tuned large-scale speech models, including Codec TTS, a 200M+ parameter F5 TTS model, and Speech-to-Text (STT) systems to optimize voice generation and recognition accuracy.",
      "Voice-to-Voice Architecture: Engineered a seamless speech-to-speech (s2s) RAG architecture, bridging TTS and STT capabilities to deliver low-latency, conversational AI voice communication.",
    ],
  },
  {
    id: 2,
    company: "Bhabhar Atomic Research Centre (BARC)",
    logo: "/obseract.jpeg",
    role: "Research & Development Intern",
    dateRange: "Ongoing",
    location: "Remote",
    current: true,
    description: [
      "Robotics & Motion Systems Research: Researched and designed a holonomic motion drive system for an autonomous wheelchair, presenting the simulated kinematics and motion planning using RoboDK.",
      "Navigation & SLAM Optimization: Conducted targeted research on Simultaneous Localization and Mapping (SLAM) algorithms specifically optimized for feature-deficient environments, enhancing autonomous navigation reliability.",    ],
  },
  {
    id: 3,
    company: "Jadavpur University Mechatronics Club (JUMTC)",
    logo: "/JUMTC.jpeg",
    role: "Technical Coordinator",
    dateRange: "Aug 2025 - Feb 2026",
    location: "Onsite, Jadavpur University, Kolkata",
    current: false,
    description: [
      "Cross-Functional Team Leadership: Coordinated multidisciplinary teams across hardware, electronics, software, and science divisions to align workflows, troubleshoot integration issues, and successfully deliver complex robotic projects.",
      "Project Mentorship & Strategic Guidance: Mentored and guided Team Obseract for IRC SPROS 2026 and Team Nidar for Nidar 2026, providing technical oversight and strategic direction to ensure project viability and competition readiness.",
    ],
  },
  {
    id: 4,
    company: "Jadavpur University Mechatronics Club (JUMTC)",
    logo: "/JUMTC.jpeg",
    role: "Hardware Team Member",
    dateRange: "Jul 2024 - Aug 2025",
    location: "Onsite, Jadavpur University, Kolkata",
    current: false,
    description: [
      "Mechanical & Structural Design: Engineered custom hardware components, including \"sandwich-type\" wheel designs and a parallel-connected robotic arm, conducting comprehensive structural analysis to ensure mechanical integrity.",
      "Motion Simulation & Prototyping: Performed advanced motion simulations to validate kinematics before manufacturing, reducing design iterations and material waste.",
      "Physical Testing & Coordination: Led physical hardware testing and validation phases, bridging the gap between theoretical simulations and real-world performance while coordinating technical efforts across the team.",
    ],
  },
  {
    id: 5,
    company: "Automax Robotics Pvt. Ltd",
    logo: "/automax.jpeg",
    role: "Project & Simulation Intern",
    dateRange: "Jun 2025 - Jul 2025",
    location: "Onsite, Pune",
    current: false,
    description: [
      "Simulation & Offline Programming: Conducted automated machine simulations using RoboDK, executing advanced path planning and collision detection through offline programming to optimize robotic workflows and prevent hardware damage.",
      "System Design & Client Integration: Designed and implemented an 11-DOF (Degrees of Freedom) robotic arm manufacturing system for Taknek Industries, managing the project from initial architecture to post-deployment technical support.",
      "Full-Stack Web Development: Engineered and launched the official Automax Robotics company website, establishing the digital infrastructure to showcase technical capabilities and improve client engagement.",
    ],
  },
];

interface EducationItem {
  id: number;
  institution: string;
  logo: string;
  degree: string;
  field: string;
  dateRange: string;
  location: string;
}

export const education: EducationItem[] = [
  {
    id: 1,
    institution: "Jadavpur University",
    logo: "/ju.jpeg",
    degree: "Bachelor of Engineering",
    field: "Mechanical Engineering",
    dateRange: "2023 - 2027",
    location: "Kolkata, West Bengal, India",
  },
  {
    id: 2,
    institution: "St. Stephen's School",
    logo: "/school.jpeg",
    degree: "Higher Secondary",
    field: "Computer Science",
    dateRange: "2022 - 2023",
    location: "North Dumdum, West Bengal, India",
  },
];

export const skills: string[] = [
  "Python",
  "RUST",
  "C++",
  "JavaScript",
  "TypeScript",
  "LLMs",
  "RAG Pipelines",
  "Speech Models(TTS/STT)",
  "React",
  "Next.js",
  "Node.js",
  "Express.js",
  "MongoDB",
  "PostgreSQL",
  "Material-UI",
  "Tailwind CSS",
  "Git",
  "Docker",
  "Arduino",
  "Raspberry Pi",
  "Jetson Orion Nano",
  "Pixhawk",
  "ROS2",
  "SolidWorks",
  "AutoCAD",
  "RoboDK",
];

export interface AchievementItem {
  id: number;
  title: string;
  issuer: string;
  date: string;
  type: "Certification" | "Achievement";
  link?: string;
}

export const achievements: AchievementItem[] = [
  {
    id: 1,
    title: "NIDAR Drone Challenge 2025 participated by Team Vihang of JUMTC",
    issuer: "Jadavpur University, SPROS IRC 2026",
    date: "Jun 2026",
    type: "Achievement",
    link: "https://jadavpuruniversity.in/storage/2026/06/NIDAR-Report.pdf",
  },
  {
    id: 2,
    title: "Team Obseract of JUMTC Achieves International Distinction at IRC 2026",
    issuer: "Jadavpur University, SPROS IRC 2026",
    date: "Jun 2026",
    type: "Achievement",
    link: "https://jadavpuruniversity.in/storage/2026/06/IRC-2026-Report.pdf",
  },
];

interface WorkLink {
  label: string;
  href: string;
}

interface WorkItem {
  id: number;
  title: string;
  image: string;
  summary: string;
  year: string;
  role: string;
  tags: string[];
  links: WorkLink[];
  featured?: boolean;
}

export const works: WorkItem[] = [
  {
    id: 1,
    title: "Elephant Robotic Bionic Arm",
    image: "/elephant.jpeg",
    summary:
      "Built a Rust-based blockchain prototype with mining, chain creation, UTXO storage in sled, ED25519-secured transactions, and a CLI for seamless interaction..",
    year: "2024",
    role: "(FPSI Project)",
    tags: ["Pneumatics", "Analysis", "CAD"],
    links: [
      {
        label: "Post",
        href: "https://www.linkedin.com/posts/abhirupguharoy_blockchain-rustlang-innovation-activity-7288105141449240576-X8Tv?utm_source=share&utm_medium=member_desktop&rcm=ACoAAESi5KwB6CX4-onO35YC9V8FZ1poV68iMSA",
      },
      { label: "Repo", href: "https://github.com/RSWDevian/Blockchain_mining" },
    ],
  },
  {
    id: 2,
    title: "Blockchain Prototype",
    image: "/blockchain.jpeg",
    summary:
      "Built a Rust-based blockchain prototype with mining, chain creation, UTXO storage in sled, ED25519-secured transactions, and a CLI for seamless interaction..",
    year: "2024",
    role: "(Personal Project)",
    tags: ["Web3", "RUST", "Blockchain"],
    links: [
      {
        label: "Post",
        href: "https://www.linkedin.com/posts/abhirupguharoy_blockchain-rustlang-innovation-activity-7288105141449240576-X8Tv?utm_source=share&utm_medium=member_desktop&rcm=ACoAAESi5KwB6CX4-onO35YC9V8FZ1poV68iMSA",
      },
      { label: "Repo", href: "https://github.com/RSWDevian/Blockchain_mining" },
    ],
  },
  {
    id: 3,
    title: "Automax Robotics",
    image: "/Automax.jpg",
    summary:
      "Kinematic optimization and calibration pipeline to improve repeatability for multi-axis assembly tasks.",
    year: "2025",
    role: "(Company Project)",
    tags: ["WebDev"],
    links: [{ label: "Visit", href: "https://automaxrobotics.com/" }],
  },
  {
    id: 4,
    title: "Blue Carbon Registry",
    image: "/blue-carbon.jpeg",
    summary:
      "End-to-end system for factory-floor inspection with multi-sensor fusion, edge inference, and mission planning.",
    year: "2025",
    role: "Robotics Lead",
    tags: ["Robotics", "ROS2", "Sensor Fusion", "Edge AI"],
    links: [
      { label: "Case Study", href: "#" },
      { label: "Repo", href: "#" },
    ],
    featured: false,
  },
  {
    id: 5,
    title: "Autonomous Inspection Rover",
    image: "/rover.jpg",
    summary:
      "End-to-end system for factory-floor inspection with multi-sensor fusion, edge inference, and mission planning.",
    year: "2025",
    role: "Robotics Lead",
    tags: ["Robotics", "ROS2", "Sensor Fusion", "Edge AI"],
    links: [
      { label: "Case Study", href: "#" },
      { label: "Repo", href: "#" },
    ],
    featured: true,
  },
];
