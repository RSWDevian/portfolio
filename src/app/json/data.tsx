import {
    Home,
    Article,
    Description,
    Mail,
    GitHub,
    LinkedIn,
} from "@mui/icons-material";
import { SvgIconProps } from "@mui/material";
import { ReactNode } from "react";

interface NavItem {
    icon: React.ComponentType<SvgIconProps>;
    label: string;
    href: string;
}

export const navItems: NavItem[] = [
    { icon: Home, label: "Home", href: "/" },
    { icon: Article, label: "Blogs", href: "/blogs" },
    { icon: Description, label: "Research Papers", href: "/research" },
];

export const socialItems = [
    { icon: GitHub, label: "GitHub", href: "https://github.com/RSWDevian" },
    { icon: LinkedIn, label: "LinkedIn", href: "https://www.linkedin.com/in/abhirupguharoy/" },
    { icon: Mail, label: "Mail", href: "mailto:abhirup.g.r.work.@gmail.com" },
];

interface ExperienceItem {
    id: Number,
    company: String,
    logo: String,
    role: String,
    dateRange: String,
    location: String,
    description: String[],
}

export const experiences: ExperienceItem[] = [
    {
        id: 1,
        company: "Jadavpur University Mechatronics Club",
        logo: "/JUMTC.jpeg",
        role: "Technical Coordinator",
        dateRange: "Jan 2023 - Feb 2026",
        location: "Onsite",
        description: [
            "Led cross-functional technical teams across robotics and embedded system projects, coordinating mechanical design, electronics integration, and control system development.",
            "Oversaw project planning, technical reviews, and milestone tracking for multi-disciplinary student engineering initiatives \& manage a team of 100+ members.",
        ],
    },
    {
        id: 2,
        company: "Team OBSERACT",
        logo: "/obseract.jpeg",
        role: "Team Lead",
        dateRange: "Sep 2025 - Feb 2026",
        location: "Onsite",
        description: [
            "Assisted in the development of the club's website and internal tools.",
        ]
    },
    {
        id: 3,
        company: "Jadavpur University Mechatronics Club",
        logo: "/JUMTC.jpeg",
        role: "Hardware Team Member",
        dateRange: "Jul 2024 - Aug 2025",
        location: "Onsite",
        description: [
            "Assisted in the development of the club's website and internal tools.",
        ]
    },
    {
        id: 4,
        company: "Automax Robotics Pvt. Ltd",
        logo: "/automax.jpeg",
        role: "Project Intern",
        dateRange: "Jun 2025 - Aug 2025",
        location: "Onsite",
        description: [
            "Simulated & automated industrial manufacturing workflows with RoboDK.",
            "Generated offline programs for multi-axis robotic mechanisms to optimize workspace, accuracy and cycle time.",
            "Conducted process analysis for efficiency, motion synchronization, and collision avoidance in automated manufacturing workflows."
        ]
    },

]

// Education Data
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
    "Rust",
    "HardHat",
    "Solidity",
    "Python",
    "LLM",
    "C++",
    "JavaScript",
    "TypeScript",
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
    "ROS2",
    "SolidWorks",
    "AutoCAD",
    "Pixhawk",
    // Add your skills here
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
            { label: "Post", href: "https://www.linkedin.com/posts/abhirupguharoy_blockchain-rustlang-innovation-activity-7288105141449240576-X8Tv?utm_source=share&utm_medium=member_desktop&rcm=ACoAAESi5KwB6CX4-onO35YC9V8FZ1poV68iMSA" },
            { label: "Repo", href: "https://github.com/RSWDevian/Blockchain_mining" }
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
        links: [{ label: "Post", href: "https://www.linkedin.com/posts/abhirupguharoy_blockchain-rustlang-innovation-activity-7288105141449240576-X8Tv?utm_source=share&utm_medium=member_desktop&rcm=ACoAAESi5KwB6CX4-onO35YC9V8FZ1poV68iMSA" },
        {
            label: "Repo",
            href: "https://github.com/RSWDevian/Blockchain_mining"
        }
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
        links: [
            { label: "Visit", href: "https://automaxrobotics.com/" },
        ],
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