'use client';
import * as React from 'react';
import {
    Box,
    Container,
    Typography,
    Grid,
    Card,
    CardContent,
    CardMedia,
    Chip,
    Button,
    Stack,
} from '@mui/material';
import LaunchIcon from '@mui/icons-material/Launch';
import GitHubIcon from '@mui/icons-material/GitHub';
import { projects } from '../../data/mockData';
import Image from 'next/image';

export default function Projects() {
    return (
        <Box
            id="projects"
            sx={{
                py: { xs: 8, md: 12 },
                backgroundColor: 'background.default',
            }}
        >
            <Container maxWidth="lg">
                <Typography
                    variant="h2"
                    sx={{
                        fontSize: { xs: '2rem', md: '3rem' },
                        fontWeight: 700,
                        mb: 2,
                        textAlign: 'center',
                    }}
                >
                    Proyectos Destacados
                </Typography>
                <Typography
                    variant="body1"
                    sx={{
                        color: 'text.secondary',
                        textAlign: 'center',
                        maxWidth: '600px',
                        mx: 'auto',
                        mb: 6,
                    }}
                >
                    Una selección de proyectos que demuestran mis habilidades y experiencia
                </Typography>

                <Grid container spacing={4}>
                    {projects.map((project) => (
                        <Grid item xs={12} md={project.featured ? 12 : 6} key={project.title}>
                            <Card
                                sx={{
                                    height: '100%',
                                    display: 'flex',
                                    flexDirection: project.featured ? { xs: 'column', md: 'row' } : 'column',
                                    transition: 'all 0.3s ease',
                                    '&:hover': {
                                        transform: 'translateY(-8px)',
                                    },
                                }}
                            >
                                <Box
                                    sx={{
                                        position: 'relative',
                                        width: project.featured ? { xs: '100%', md: '50%' } : '100%',
                                        height: project.featured ? { xs: 250, md: 'auto' } : 250,
                                        backgroundColor: 'rgba(255,255,255,0.05)',
                                        overflow: 'hidden',
                                    }}
                                >
                                    <Image
                                        src={project.image}
                                        alt={project.title}
                                        fill
                                        sizes={project.featured ? "(max-width: 768px) 100vw, 50vw" : "(max-width: 768px) 100vw, 50vw"}
                                        style={{ objectFit: 'cover' }}
                                        priority={project.featured}
                                    />
                                </Box>
                                <CardContent
                                    sx={{
                                        flex: 1,
                                        display: 'flex',
                                        flexDirection: 'column',
                                    }}
                                >
                                    <Typography
                                        variant="h5"
                                        sx={{
                                            fontWeight: 600,
                                            mb: 2,
                                        }}
                                    >
                                        {project.title}
                                    </Typography>
                                    <Typography
                                        variant="body2"
                                        color="text.secondary"
                                        sx={{ mb: 3, lineHeight: 1.7 }}
                                    >
                                        {project.description}
                                    </Typography>

                                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 3 }}>
                                        {project.stack.map((tech) => (
                                            <Chip
                                                key={tech}
                                                label={tech}
                                                size="small"
                                                sx={{
                                                    backgroundColor: 'rgba(0,112,243,0.1)',
                                                    color: 'secondary.main',
                                                }}
                                            />
                                        ))}
                                    </Box>

                                    <Stack direction="row" spacing={2} sx={{ mt: 'auto' }}>
                                        {project.demo !== '#' && (
                                            <Button
                                                variant="outlined"
                                                size="small"
                                                startIcon={<LaunchIcon />}
                                                href={project.demo}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                sx={{
                                                    borderColor: 'rgba(255,255,255,0.2)',
                                                    '&:hover': {
                                                        borderColor: 'rgba(255,255,255,0.4)',
                                                    },
                                                }}
                                            >
                                                Demo
                                            </Button>
                                        )}
                                        {project.github !== '#' && (
                                            <Button
                                                variant="outlined"
                                                size="small"
                                                startIcon={<GitHubIcon />}
                                                href={project.github}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                sx={{
                                                    borderColor: 'rgba(255,255,255,0.2)',
                                                    '&:hover': {
                                                        borderColor: 'rgba(255,255,255,0.4)',
                                                    },
                                                }}
                                            >
                                                Code
                                            </Button>
                                        )}
                                    </Stack>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </Box>
    );
}
