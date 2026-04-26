'use client';
import * as React from 'react';
import { Box, Container, Typography, Stack, Button, Paper } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import PlaceIcon from '@mui/icons-material/Place';
import { useLanguage } from '../../lib/i18n/LanguageContext';
import { CONTACT } from '../../lib/contact';

export default function Contact() {
    const { t } = useLanguage();

    const channels = [
        {
            icon: <EmailIcon sx={{ fontSize: 28 }} />,
            label: t.contact.emailLabel,
            value: CONTACT.email,
            href: `mailto:${CONTACT.email}`,
            primary: true,
        },
        {
            icon: <LinkedInIcon sx={{ fontSize: 28 }} />,
            label: t.contact.linkedinLabel,
            value: 'diego-libreros',
            href: CONTACT.linkedin,
        },
        {
            icon: <GitHubIcon sx={{ fontSize: 28 }} />,
            label: t.contact.githubLabel,
            value: 'diegofly91',
            href: CONTACT.github,
        },
    ];

    return (
        <Box
            id="contact"
            sx={{
                py: { xs: 8, md: 12 },
                backgroundColor: 'background.default',
            }}
        >
            <Container maxWidth="md">
                <Typography
                    variant="h2"
                    sx={{
                        fontSize: { xs: '2rem', md: '3rem' },
                        fontWeight: 700,
                        mb: 2,
                        textAlign: 'center',
                    }}
                >
                    {t.contact.title}
                </Typography>
                <Typography
                    variant="body1"
                    sx={{
                        color: 'text.secondary',
                        textAlign: 'center',
                        maxWidth: '640px',
                        mx: 'auto',
                        mb: 6,
                        fontSize: '1.05rem',
                        lineHeight: 1.7,
                    }}
                >
                    {t.contact.subtitle}
                </Typography>

                <Stack spacing={2.5} sx={{ mb: 5 }}>
                    {channels.map((channel) => (
                        <Paper
                            key={channel.label}
                            component="a"
                            href={channel.href}
                            target={channel.href.startsWith('mailto:') ? undefined : '_blank'}
                            rel={channel.href.startsWith('mailto:') ? undefined : 'noopener noreferrer'}
                            elevation={0}
                            sx={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: 3,
                                p: { xs: 2.5, md: 3 },
                                borderRadius: 2,
                                border: '1px solid rgba(255,255,255,0.08)',
                                backgroundColor: channel.primary
                                    ? 'rgba(0,112,243,0.05)'
                                    : 'rgba(255,255,255,0.02)',
                                textDecoration: 'none',
                                color: 'inherit',
                                transition: 'all 0.2s ease',
                                '&:hover': {
                                    transform: 'translateY(-2px)',
                                    borderColor: 'secondary.main',
                                    backgroundColor: 'rgba(0,112,243,0.08)',
                                },
                            }}
                        >
                            <Box
                                sx={{
                                    color: channel.primary ? 'secondary.main' : 'text.secondary',
                                    display: 'flex',
                                }}
                            >
                                {channel.icon}
                            </Box>
                            <Box sx={{ flex: 1, minWidth: 0 }}>
                                <Typography
                                    variant="caption"
                                    sx={{
                                        color: 'text.secondary',
                                        textTransform: 'uppercase',
                                        letterSpacing: '0.08em',
                                        fontWeight: 600,
                                        fontSize: '0.7rem',
                                    }}
                                >
                                    {channel.label}
                                </Typography>
                                <Typography
                                    variant="body1"
                                    sx={{
                                        fontWeight: 500,
                                        wordBreak: 'break-all',
                                        fontSize: { xs: '0.95rem', md: '1.05rem' },
                                    }}
                                >
                                    {channel.value}
                                </Typography>
                            </Box>
                        </Paper>
                    ))}
                </Stack>

                <Stack
                    direction="row"
                    spacing={1.5}
                    alignItems="center"
                    justifyContent="center"
                    sx={{ color: 'text.secondary' }}
                >
                    <PlaceIcon sx={{ fontSize: 18 }} />
                    <Typography variant="body2">{t.contact.location}</Typography>
                </Stack>

                <Box sx={{ textAlign: 'center', mt: 4 }}>
                    <Button
                        variant="contained"
                        size="large"
                        component="a"
                        href={`mailto:${CONTACT.email}`}
                        startIcon={<EmailIcon />}
                        sx={{ px: 5, py: 1.5 }}
                    >
                        {t.contact.emailCta}
                    </Button>
                </Box>
            </Container>
        </Box>
    );
}
