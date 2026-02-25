'use client';
import * as React from 'react';
import { Box, Container, Typography, Grid } from '@mui/material';
import Image from 'next/image';


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
                            Ingeniería & Negocio
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
                            Soy un desarrollador orientado a producto que une código sólido con visión estratégica.
                            Me especializo en migrar sistemas legados, orquestar microservicios e integrar tecnologías
                            complejas (motores RAG, pasarelas asíncronas) bajo entornos CI/CD.
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
                            Acostumbrado a liderar iniciativas en marcos SCRUM y colaborar de cerca con
                            equipos multifuncionales, traduzco requerimientos de negocio en arquitecturas
                            Node.js/React de alta disponibilidad y bajo acoplamiento técnico.
                        </Typography>
                    </Grid>
                </Grid>

            </Container>
        </Box>
    );
}
