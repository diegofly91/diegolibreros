'use client';
import * as React from 'react';
import { Box, Container, Typography, Grid, Paper } from '@mui/material';
import Image from 'next/image';
import { useContent } from '../../lib/i18n/useContent';

export default function About() {
    const { about, labels } = useContent();

    return (
        <Box
            id="about"
            sx={{
                py: { xs: 8, md: 12 },
                backgroundColor: 'background.default',
            }}
        >
            <Container maxWidth="lg">
                <Grid container spacing={6} alignItems="center">
                    {/* Avatar */}
                    <Grid item xs={12} md={3}>
                        <Box
                            sx={{
                                position: 'relative',
                                width: { xs: 140, md: 180 },
                                height: { xs: 140, md: 180 },
                                mx: 'auto',
                                '&::before': {
                                    content: '""',
                                    position: 'absolute',
                                    top: 12,
                                    left: 12,
                                    right: -12,
                                    bottom: -12,
                                    border: '1px solid rgba(0, 112, 243, 0.35)',
                                    borderRadius: '20px',
                                    zIndex: 0,
                                },
                            }}
                        >
                            <Box
                                sx={{
                                    position: 'relative',
                                    width: '100%',
                                    height: '100%',
                                    borderRadius: '24px',
                                    overflow: 'hidden',
                                    zIndex: 1,
                                    boxShadow: '0 20px 40px rgba(0,0,0,0.4)',
                                }}
                            >
                                <Image
                                    src="DIEGOFLIBREROS.jpeg"
                                    alt="Diego Libreros"
                                    fill
                                    style={{ objectFit: 'cover' }}
                                />
                            </Box>
                        </Box>
                    </Grid>

                    {/* Copy */}
                    <Grid item xs={12} md={9}>
                        <Typography
                            variant="overline"
                            sx={{
                                color: 'secondary.main',
                                fontWeight: 700,
                                letterSpacing: '0.15em',
                                fontSize: '0.8rem',
                                display: 'block',
                                mb: 1,
                            }}
                        >
                            {labels.about.title}
                        </Typography>
                        <Typography
                            variant="h2"
                            sx={{
                                fontSize: { xs: '1.75rem', md: '2.5rem' },
                                fontWeight: 700,
                                mb: 3,
                                lineHeight: 1.25,
                                textAlign: { xs: 'center', md: 'left' },
                            }}
                        >
                            {about.title}
                        </Typography>
                        {about.paragraphs.map((p, i) => (
                            <Typography
                                key={i}
                                variant="body1"
                                sx={{
                                    color: 'text.secondary',
                                    fontSize: '1.05rem',
                                    lineHeight: 1.8,
                                    mb: 2,
                                    textAlign: { xs: 'center', md: 'left' },
                                }}
                            >
                                {p}
                            </Typography>
                        ))}
                    </Grid>
                </Grid>

                {/* Quick stats / badges */}
                <Grid container spacing={2} sx={{ mt: 6 }}>
                    {about.badges.map((badge) => (
                        <Grid item xs={6} md={3} key={badge.label}>
                            <Paper
                                elevation={0}
                                sx={{
                                    p: 2.5,
                                    borderRadius: 2,
                                    border: '1px solid rgba(255,255,255,0.08)',
                                    backgroundColor: 'rgba(255,255,255,0.02)',
                                    height: '100%',
                                    textAlign: { xs: 'center', md: 'left' },
                                    transition: 'all 0.2s ease',
                                    '&:hover': {
                                        borderColor: 'rgba(0,112,243,0.4)',
                                        backgroundColor: 'rgba(0,112,243,0.04)',
                                    },
                                }}
                            >
                                <Typography
                                    variant="caption"
                                    sx={{
                                        color: 'text.secondary',
                                        textTransform: 'uppercase',
                                        letterSpacing: '0.08em',
                                        fontWeight: 600,
                                        fontSize: '0.7rem',
                                        display: 'block',
                                        mb: 0.5,
                                    }}
                                >
                                    {badge.label}
                                </Typography>
                                <Typography
                                    variant="h6"
                                    sx={{
                                        fontWeight: 700,
                                        fontSize: { xs: '0.95rem', md: '1.05rem' },
                                        color: 'text.primary',
                                    }}
                                >
                                    {badge.value}
                                </Typography>
                            </Paper>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </Box>
    );
}
