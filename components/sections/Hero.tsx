'use client';
import * as React from 'react';
import { Box, Container, Typography, Button, Stack } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import DownloadIcon from '@mui/icons-material/Download';
import { useLanguage } from '../../lib/i18n/LanguageContext';
import { CONTACT } from '../../lib/contact';

// Set to true once /public/cv.pdf exists
const CV_AVAILABLE = false;

export default function Hero() {
    const { t } = useLanguage();

    const scrollTo = (selector: string) => {
        document.querySelector(selector)?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <Box
            id="home"
            sx={{
                minHeight: '100vh',
                display: 'flex',
                alignItems: 'center',
                position: 'relative',
                overflow: 'hidden',
                backgroundImage: 'url(landing-bg.jpg)',
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
                    backgroundColor: 'rgba(0, 0, 0, 0.72)',
                    zIndex: 1,
                },
            }}
        >
            <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 2 }}>
                <Box
                    sx={{
                        maxWidth: '860px',
                        mx: { xs: 0, md: 'auto' },
                        textAlign: { xs: 'left', md: 'center' },
                    }}
                >
                    <Typography
                        variant="overline"
                        sx={{
                            color: 'secondary.main',
                            fontWeight: 700,
                            letterSpacing: '0.15em',
                            fontSize: { xs: '0.75rem', md: '0.875rem' },
                            mb: 2,
                            display: 'block',
                        }}
                    >
                        {t.hero.role}
                    </Typography>

                    <Typography
                        variant="h1"
                        sx={{
                            fontSize: { xs: '2.25rem', sm: '3.25rem', md: '4.25rem' },
                            fontWeight: 700,
                            mb: 3,
                            background: 'linear-gradient(135deg, #ffffff 0%, #a0a0a0 100%)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            lineHeight: 1.15,
                        }}
                    >
                        {t.hero.headline}
                    </Typography>

                    <Typography
                        variant="h2"
                        sx={{
                            fontSize: { xs: '1.05rem', sm: '1.2rem', md: '1.35rem' },
                            fontWeight: 400,
                            color: 'text.secondary',
                            mb: 5,
                            lineHeight: 1.7,
                            maxWidth: '720px',
                            mx: { xs: 0, md: 'auto' },
                        }}
                    >
                        {t.hero.description}
                    </Typography>

                    {/* Primary CTAs */}
                    <Stack
                        direction={{ xs: 'column', sm: 'row' }}
                        spacing={2}
                        sx={{
                            justifyContent: { xs: 'flex-start', md: 'center' },
                            mb: 3,
                        }}
                    >
                        <Button
                            variant="contained"
                            size="large"
                            endIcon={<ArrowForwardIcon />}
                            onClick={() => scrollTo('#projects')}
                            sx={{ px: 4, py: 1.5, fontSize: '1rem' }}
                        >
                            {t.hero.primaryCta}
                        </Button>

                        <Button
                            variant="outlined"
                            size="large"
                            startIcon={<EmailIcon />}
                            onClick={() => scrollTo('#contact')}
                            sx={{
                                px: 4,
                                py: 1.5,
                                fontSize: '1rem',
                                borderColor: 'rgba(255,255,255,0.25)',
                                color: 'text.primary',
                                '&:hover': {
                                    borderColor: 'rgba(255,255,255,0.5)',
                                    backgroundColor: 'rgba(255,255,255,0.05)',
                                },
                            }}
                        >
                            {t.hero.secondaryCta}
                        </Button>

                        {CV_AVAILABLE && (
                            <Button
                                variant="text"
                                size="large"
                                startIcon={<DownloadIcon />}
                                component="a"
                                href="/cv.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                                sx={{
                                    px: 3,
                                    py: 1.5,
                                    fontSize: '1rem',
                                    color: 'text.secondary',
                                    '&:hover': {
                                        color: 'text.primary',
                                        backgroundColor: 'rgba(255,255,255,0.04)',
                                    },
                                }}
                            >
                                {t.hero.downloadCv}
                            </Button>
                        )}
                    </Stack>

                    {/* Quick contact links */}
                    <Stack
                        direction="row"
                        spacing={3}
                        sx={{
                            justifyContent: { xs: 'flex-start', md: 'center' },
                            color: 'text.secondary',
                        }}
                    >
                        <Button
                            component="a"
                            href={CONTACT.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            startIcon={<GitHubIcon />}
                            size="small"
                            sx={{ color: 'inherit', '&:hover': { color: 'text.primary' } }}
                        >
                            {t.hero.github}
                        </Button>
                        <Button
                            component="a"
                            href={CONTACT.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            startIcon={<LinkedInIcon />}
                            size="small"
                            sx={{ color: 'inherit', '&:hover': { color: 'text.primary' } }}
                        >
                            {t.hero.linkedin}
                        </Button>
                        <Button
                            component="a"
                            href={`mailto:${CONTACT.email}`}
                            startIcon={<EmailIcon />}
                            size="small"
                            sx={{ color: 'inherit', '&:hover': { color: 'text.primary' } }}
                        >
                            {t.hero.email}
                        </Button>
                    </Stack>
                </Box>
            </Container>
        </Box>
    );
}
