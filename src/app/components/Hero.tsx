"use client"

import { Box, Container, Stack, Typography, Avatar } from "@mui/material";

export default function Hero() {
    return (
        <Box
            id="hero"
            sx={{
                height: "auto",
                display: "flex",
                alignItems: "center",
                marginTop:8,
                marginBottom:4,
            }}
        >
            <Container>
                <Stack spacing={6} alignItems="center">
                    <Stack
                        direction={{ md: "row", sm: "column" }}
                        spacing={4}
                        alignItems={{ xs: "flex-start", md: "center" }}
                    >
                        <Stack>
                            <Typography
                                variant="h1"
                                sx={{
                                    fontSize: "3rem",
                                    fontWeight: "bold",
                                    color: "primary.main",
                                    marginBottom: 2,
                                }}
                            >
                                Hi! This is Abhirup
                            </Typography>

                            <Typography
                                sx={{
                                    fontSize: "1.25rem",
                                    color: "text.secondary",
                                    maxWidth: "600px",
                                }}
                            >
                                20 || Technical Coordinator @JU Mechatronics
                            </Typography>
                        </Stack>

                        <Avatar
                            src="/myImage.jpg"
                            alt="AGR"
                            sx={{
                                width: { xs: 120, md: 160 },
                                height: { xs: 120, md: 160 },
                                border: "2px solid rgba(125, 211, 252, 0.2)",
                            }}
                        />
                    </Stack>
                </Stack>
            </Container>
        </Box>
    )
}