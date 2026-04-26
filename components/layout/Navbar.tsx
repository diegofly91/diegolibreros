'use client';
import * as React from 'react';
import {
    AppBar,
    Toolbar,
    Typography,
    Button,
    Box,
    Container,
    IconButton,
    Drawer,
    List,
    ListItem,
    ListItemButton,
    ListItemText,
    useScrollTrigger,
    Tooltip,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import LanguageIcon from '@mui/icons-material/Language';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useLanguage } from '../../lib/i18n/LanguageContext';

export default function Navbar() {
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));
    const trigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: 50,
    });
    const { t, locale, toggle } = useLanguage();

    const navItems = [
        { label: t.nav.home, href: '#home' },
        { label: t.nav.about, href: '#about' },
        { label: t.nav.skills, href: '#skills' },
        { label: t.nav.projects, href: '#projects' },
        { label: t.nav.experience, href: '#experience' },
        { label: t.nav.contact, href: '#contact' },
    ];

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const scrollToSection = (href: string) => {
        const element = document.querySelector(href);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            setMobileOpen(false);
        }
    };

    const drawer = (
        <Box sx={{ textAlign: 'center', py: 2 }}>
            <Typography variant="h6" sx={{ my: 2, fontWeight: 700 }}>
                DL
            </Typography>
            <List>
                {navItems.map((item) => (
                    <ListItem key={item.label} disablePadding>
                        <ListItemButton
                            sx={{ textAlign: 'center' }}
                            onClick={() => scrollToSection(item.href)}
                        >
                            <ListItemText primary={item.label} />
                        </ListItemButton>
                    </ListItem>
                ))}
                <ListItem disablePadding>
                    <ListItemButton sx={{ textAlign: 'center' }} onClick={toggle}>
                        <ListItemText primary={`🌐 ${t.language.switchTo}`} />
                    </ListItemButton>
                </ListItem>
            </List>
        </Box>
    );

    return (
        <>
            <AppBar
                position="sticky"
                elevation={0}
                sx={{
                    backdropFilter: trigger ? 'blur(20px)' : 'none',
                    backgroundColor: trigger ? 'rgba(10, 10, 10, 0.8)' : 'transparent',
                    borderBottom: trigger ? '1px solid rgba(255,255,255,0.1)' : 'none',
                    transition: 'all 0.3s ease-in-out',
                }}
            >
                <Container maxWidth="lg">
                    <Toolbar disableGutters>
                        <Typography
                            variant="h6"
                            component="div"
                            sx={{
                                flexGrow: 0,
                                fontWeight: 700,
                                mr: 4,
                                cursor: 'pointer',
                                background: 'linear-gradient(45deg, #fff 30%, #999 90%)',
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                            }}
                            onClick={() => scrollToSection('#home')}
                        >
                            Diego Libreros
                        </Typography>

                        {!isMobile && (
                            <Box sx={{ flexGrow: 1, display: 'flex', gap: 1 }}>
                                {navItems.map((item) => (
                                    <Button
                                        key={item.label}
                                        onClick={() => scrollToSection(item.href)}
                                        sx={{
                                            color: 'text.secondary',
                                            '&:hover': {
                                                color: 'text.primary',
                                                backgroundColor: 'rgba(255,255,255,0.05)',
                                            },
                                        }}
                                    >
                                        {item.label}
                                    </Button>
                                ))}
                            </Box>
                        )}

                        <Box sx={{ flexGrow: 1 }} />

                        {/* Language toggle */}
                        <Tooltip title={t.language.label}>
                            <IconButton
                                onClick={toggle}
                                aria-label={t.language.label}
                                sx={{
                                    color: 'text.secondary',
                                    border: '1px solid rgba(255,255,255,0.1)',
                                    borderRadius: 2,
                                    px: 1.5,
                                    py: 0.5,
                                    gap: 0.75,
                                    fontSize: '0.85rem',
                                    fontWeight: 600,
                                    '&:hover': {
                                        color: 'text.primary',
                                        backgroundColor: 'rgba(255,255,255,0.05)',
                                        borderColor: 'rgba(255,255,255,0.2)',
                                    },
                                }}
                            >
                                <LanguageIcon sx={{ fontSize: 18 }} />
                                <Typography
                                    component="span"
                                    sx={{ fontSize: '0.8rem', fontWeight: 700, letterSpacing: '0.05em' }}
                                >
                                    {locale.toUpperCase()}
                                </Typography>
                            </IconButton>
                        </Tooltip>

                        {isMobile && (
                            <IconButton
                                color="inherit"
                                aria-label="open drawer"
                                edge="end"
                                onClick={handleDrawerToggle}
                                sx={{ ml: 1 }}
                            >
                                <MenuIcon />
                            </IconButton>
                        )}
                    </Toolbar>
                </Container>
            </AppBar>

            <Drawer
                variant="temporary"
                open={mobileOpen}
                onClose={handleDrawerToggle}
                ModalProps={{ keepMounted: true }}
                sx={{
                    display: { xs: 'block', md: 'none' },
                    '& .MuiDrawer-paper': {
                        boxSizing: 'border-box',
                        width: 240,
                        backgroundColor: 'background.paper',
                    },
                }}
            >
                {drawer}
            </Drawer>
        </>
    );
}
