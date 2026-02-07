'use client';
import * as React from 'react';
import { Box, Container, Typography, Grid, Chip } from '@mui/material';
import { skills } from '../../data/mockData';

const categories = ['Frontend', 'Backend', 'AI & Arch', 'Cloud & Tools'];

export default function Skills() {
    return (
        <Box
            id="skills"
            sx={{
                py: { xs: 8, md: 12 },
                backgroundColor: 'background.paper',
                position: 'relative',
                overflow: 'hidden',
            }}
        >
            <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
                <Typography
                    variant="h2"
                    sx={{
                        fontSize: { xs: '2rem', md: '3rem' },
                        fontWeight: 700,
                        mb: 2,
                        textAlign: 'center',
                    }}
                >
                    Tech Stack
                </Typography>
                <Typography
                    variant="body1"
                    sx={{
                        color: 'text.secondary',
                        textAlign: 'center',
                        maxWidth: '600px',
                        mx: 'auto',
                        mb: 8,
                    }}
                >
                    Mi ecosistema de herramientas para el desarrollo de soluciones de alto impacto
                </Typography>

                <Grid container spacing={3}>
                    {categories.map((category) => (
                        <Grid item xs={12} sm={6} md={3} key={category}>
                            <Box
                                sx={{
                                    p: 3,
                                    height: '100%',
                                    borderRadius: 3,
                                    border: '1px solid rgba(255,255,255,0.05)',
                                    backgroundColor: 'rgba(255,255,255,0.02)',
                                    transition: 'all 0.3s ease',
                                    '&:hover': {
                                        backgroundColor: 'rgba(255,255,255,0.04)',
                                        borderColor: 'rgba(255,255,255,0.1)',
                                        transform: 'translateY(-4px)',
                                    },
                                }}
                            >
                                <Typography
                                    variant="h6"
                                    sx={{
                                        fontWeight: 700,
                                        mb: 3,
                                        color: 'text.primary',
                                        fontSize: '1rem',
                                        textTransform: 'uppercase',
                                        letterSpacing: '0.05em',
                                        opacity: 0.8,
                                    }}
                                >
                                    {category}
                                </Typography>
                                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1.5 }}>
                                    {skills
                                        .filter((skill) => skill.category === category)
                                        .map((skill) => (
                                            <Chip
                                                key={skill.name}
                                                label={`${skill.icon} ${skill.name}`}
                                                sx={{
                                                    fontSize: '0.8125rem',
                                                    fontWeight: 600,
                                                    backgroundColor: 'rgba(255,255,255,0.03)',
                                                    border: '1px solid rgba(255,255,255,0.05)',
                                                    transition: 'all 0.2s ease',
                                                    '&:hover': {
                                                        backgroundColor: 'rgba(255,255,255,0.1)',
                                                        borderColor: 'rgba(0,112,243,0.3)',
                                                        color: 'secondary.main',
                                                    },
                                                }}
                                            />
                                        ))}
                                </Box>
                            </Box>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </Box>
    );
}
