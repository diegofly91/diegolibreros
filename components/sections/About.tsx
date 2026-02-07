'use client';
import * as React from 'react';
import { Box, Container, Typography, Grid, Card, CardContent } from '@mui/material';
import CodeIcon from '@mui/icons-material/Code';
import SpeedIcon from '@mui/icons-material/Speed';
import CloudIcon from '@mui/icons-material/Cloud';
import Image from 'next/image';

const stats = [
    { icon: <CodeIcon />, value: '5+', label: 'Años de Experiencia' },
    { icon: <SpeedIcon />, value: '50+', label: 'Proyectos Completados' },
    { icon: <CloudIcon />, value: '10+', label: 'Tecnologías Dominadas' },
];

export default function About() {
    return (
        <Box
            id="about"
            sx={{
                py: { xs: 8, md: 12 },
                backgroundColor: 'background.default',
            }}
        >
            <Container maxWidth="lg">
                <Grid container spacing={6} alignItems="center" sx={{ mb: 8 }}>
                    {/* Avatar Column */}
                    <Grid item xs={12} md={3}>
                        <Box
                            sx={{
                                position: 'relative',
                                width: { xs: 120, md: 160 },
                                height: { xs: 120, md: 160 },
                                mx: 'auto',
                                '&::before': {
                                    content: '""',
                                    position: 'absolute',
                                    top: 10,
                                    left: 10,
                                    right: -10,
                                    bottom: -10,
                                    border: '1px solid rgba(0, 112, 243, 0.3)',
                                    borderRadius: '16px',
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

                    {/* Content Column */}
                    <Grid item xs={12} md={9}>
                        <Typography
                            variant="h2"
                            sx={{
                                fontSize: { xs: '2rem', md: '3rem' },
                                fontWeight: 700,
                                mb: 3,
                                textAlign: { xs: 'center', md: 'left' },
                            }}
                        >
                            Sobre Mí
                        </Typography>
                        <Typography
                            variant="body1"
                            sx={{
                                color: 'text.secondary',
                                fontSize: '1.125rem',
                                lineHeight: 1.8,
                                textAlign: { xs: 'center', md: 'left' },
                            }}
                        >
                            Soy un desarrollador Full Stack apasionado por crear soluciones tecnológicas
                            escalables y eficientes. Me especializo en arquitecturas modernas, desarrollo
                            de APIs robustas y experiencias de usuario excepcionales.
                        </Typography>
                        <Typography
                            variant="body1"
                            sx={{
                                mt: 2,
                                color: 'text.secondary',
                                fontSize: '1.125rem',
                                lineHeight: 1.8,
                                textAlign: { xs: 'center', md: 'left' },
                            }}
                        >
                            Con una sólida base en Node.js, NestJS y React, disfruto enfrentando desafíos técnicos complejos
                            y transformando ideas en productos digitales tangibles de alta calidad.
                        </Typography>
                    </Grid>
                </Grid>

                {/* Stats Cards */}
                <Grid container spacing={3}>
                    {stats.map((stat, index) => (
                        <Grid item xs={12} sm={4} key={index}>
                            <Card
                                sx={{
                                    textAlign: 'center',
                                    py: 4,
                                    height: '100%',
                                    transition: 'all 0.3s ease',
                                    '&:hover': {
                                        transform: 'translateY(-8px)',
                                    },
                                }}
                            >
                                <CardContent>
                                    <Box
                                        sx={{
                                            display: 'inline-flex',
                                            p: 2,
                                            borderRadius: '12px',
                                            backgroundColor: 'rgba(0,112,243,0.1)',
                                            color: 'secondary.main',
                                            mb: 2,
                                        }}
                                    >
                                        {stat.icon}
                                    </Box>
                                    <Typography
                                        variant="h3"
                                        sx={{
                                            fontSize: '2.5rem',
                                            fontWeight: 700,
                                            mb: 1,
                                        }}
                                    >
                                        {stat.value}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        {stat.label}
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </Box>
    );
}
