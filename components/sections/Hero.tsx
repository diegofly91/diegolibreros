'use client';
import * as React from 'react';
import { Box, Container, Typography, Button, Stack } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import DownloadIcon from '@mui/icons-material/Download';
import Image from 'next/image';

export default function Hero() {
    return (
        <Box
            id="home"
            sx={{
                minHeight: '100vh',
                display: 'flex',
                alignItems: 'center',
                position: 'relative',
                overflow: 'hidden',
                backgroundImage: 'url(/landing-bg.jpg)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                backgroundAttachment: { xs: 'scroll', md: 'fixed' },
                '&::before': {
                    content: '""',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    backgroundColor: 'rgba(0, 0, 0, 0.7)',
                    zIndex: 1,
                },
            }}
        >


            <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 2 }}>
                <Box
                    sx={{
                        maxWidth: '800px',
                        mx: { xs: 0, md: 'auto' },
                        textAlign: { xs: 'left', md: 'center' },
                    }}
                >
                    {/* Main Heading */}
                    <Typography
                        variant="h1"
                        sx={{
                            fontSize: { xs: '2.5rem', sm: '3.5rem', md: '4.5rem' },
                            fontWeight: 700,
                            mb: 2,
                            background: 'linear-gradient(135deg, #ffffff 0%, #a0a0a0 100%)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            lineHeight: 1.2,
                        }}
                    >
                        Full Stack Developer
                    </Typography>

                    <Typography
                        variant="h2"
                        sx={{
                            fontSize: { xs: '1.25rem', sm: '1.5rem', md: '1.75rem' },
                            fontWeight: 400,
                            color: 'text.secondary',
                            mb: 4,
                            lineHeight: 1.6,
                        }}
                    >
                        Construyo soluciones escalables y modernas con{' '}
                        <Box
                            component="span"
                            sx={{
                                color: 'primary.main',
                                fontWeight: 600,
                            }}
                        >
                            NestJS, React, Next.js
                        </Box>{' '}
                        y arquitectura cloud
                    </Typography>

                    {/* CTA Buttons */}
                    <Stack
                        direction={{ xs: 'column', sm: 'row' }}
                        spacing={2}
                        sx={{
                            justifyContent: { xs: 'flex-start', md: 'center' },
                        }}
                    >
                        <Button
                            variant="contained"
                            size="large"
                            endIcon={<ArrowForwardIcon />}
                            onClick={() => {
                                document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
                            }}
                            sx={{
                                px: 4,
                                py: 1.5,
                                fontSize: '1rem',
                            }}
                        >
                            Ver Proyectos
                        </Button>
                        <Button
                            variant="outlined"
                            size="large"
                            startIcon={<DownloadIcon />}
                            sx={{
                                px: 4,
                                py: 1.5,
                                fontSize: '1rem',
                                borderColor: 'rgba(255,255,255,0.2)',
                                color: 'text.primary',
                                '&:hover': {
                                    borderColor: 'rgba(255,255,255,0.4)',
                                    backgroundColor: 'rgba(255,255,255,0.05)',
                                },
                            }}
                        >
                            Descargar CV
                        </Button>
                    </Stack>
                </Box>
            </Container>
        </Box>
    );
}
