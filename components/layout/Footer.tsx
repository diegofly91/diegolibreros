'use client';
import * as React from 'react';
import { Box, Container, Typography, Stack, IconButton, Link } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import EmailIcon from '@mui/icons-material/Email';

const socialLinks = [
    { icon: <GitHubIcon />, href: 'https://github.com/diegofly91', label: 'GitHub' },
    { icon: <LinkedInIcon />, href: 'https://www.linkedin.com/in/diego-libreros-b69828159/', label: 'LinkedIn' },
    /*{ icon: <TwitterIcon />, href: 'https://twitter.com/diegolibreros', label: 'Twitter' },
     { icon: <EmailIcon />, href: 'mailto:diego@example.com', label: 'Email' },
      */
];

export default function Footer() {
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
                                target="_blank"
                                rel="noopener noreferrer"
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
                        © {new Date().getFullYear()} Diego Libreros. Todos los derechos reservados.
                    </Typography>
                </Stack>
            </Container>
        </Box>
    );
}
