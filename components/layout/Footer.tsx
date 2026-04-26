'use client';
import * as React from 'react';
import { Box, Container, Typography, Stack, IconButton } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import { useLanguage } from '../../lib/i18n/LanguageContext';
import { CONTACT } from '../../lib/contact';

export default function Footer() {
    const { t } = useLanguage();

    const socialLinks = [
        { icon: <GitHubIcon />, href: CONTACT.github, label: 'GitHub' },
        { icon: <LinkedInIcon />, href: CONTACT.linkedin, label: 'LinkedIn' },
        { icon: <EmailIcon />, href: `mailto:${CONTACT.email}`, label: 'Email' },
    ];

    return (
        <Box
            component="footer"
            sx={{
                py: 6,
                borderTop: '1px solid rgba(255,255,255,0.1)',
                backgroundColor: 'background.paper',
            }}
        >
            <Container maxWidth="lg">
                <Stack
                    direction={{ xs: 'column', sm: 'row' }}
                    justifyContent="space-between"
                    alignItems="center"
                    spacing={3}
                >
                    <Typography variant="h6" sx={{ fontWeight: 700 }}>
                        Diego Libreros
                    </Typography>

                    <Stack direction="row" spacing={2}>
                        {socialLinks.map((social) => (
                            <IconButton
                                key={social.label}
                                href={social.href}
                                target={social.href.startsWith('mailto:') ? undefined : '_blank'}
                                rel={
                                    social.href.startsWith('mailto:')
                                        ? undefined
                                        : 'noopener noreferrer'
                                }
                                sx={{
                                    color: 'text.secondary',
                                    '&:hover': {
                                        color: 'primary.main',
                                        backgroundColor: 'rgba(255,255,255,0.05)',
                                    },
                                }}
                                aria-label={social.label}
                            >
                                {social.icon}
                            </IconButton>
                        ))}
                    </Stack>

                    <Typography variant="body2" color="text.secondary">
                        © {new Date().getFullYear()} Diego Libreros. {t.footer.rights}
                    </Typography>
                </Stack>
            </Container>
        </Box>
    );
}
