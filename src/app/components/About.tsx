"use client"

import { Box, Container, Stack, Typography } from "@mui/material";

export default function About() {
    return (
        <Box
            id="about"
            sx={{
                position: "relative",
                height: "auto",
                display: "flex",
                alignItems: "center",
                marginBottom: 4,
            }}
        >
            <Stack sx={{
                width: "100%",
            }}>
                <Typography
                    variant="h5"
                    sx={{
                        fontWeight: 700,
                        letterSpacing: "-0.01em",
                    }}
                >
                    About
                </Typography>

                <Typography
                    sx={{
                        fontSize: { xs: 16, md: 18 },
                        color: "text.secondary",
                        lineHeight: 1.8,
                        maxWidth: 700,
                    }}
                >
                    I am a pre-final year undergrad at Jadavpur University. I
                    love to build systems over real-world problems from scratch.
                </Typography>
            </Stack>
        </Box>
    )
}