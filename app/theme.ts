import { createTheme, responsiveFontSizes } from '@mui/material/styles';
import { Roboto, Roboto_Slab } from 'next/font/google';

// Configurando fuentes con el sistema de NextJs 13/14
export const roboto = Roboto({
    weight: ['300', '400', '500', '700'],
    subsets: ['latin'],
    display: 'swap',
});

export const robotoSlab = Roboto_Slab({
    weight: ['400', '700'],
    subsets: ['latin'],
    display: 'swap',
});

// Paleta de colores Premium inspirada en Vercel/Linear
const theme = createTheme({
    palette: {
        mode: 'dark', // Empezamos con Dark Mode por defecto para ese look "developer premium"
        primary: {
            main: '#ffffff', // Blanco puro para acciones principales en dark mode
            contrastText: '#000000',
        },
        secondary: {
            main: '#0070f3', // Azul Vercel para acentos
        },
        background: {
            default: '#0a0a0a', // Casi negro, mejor que #000
            paper: '#111111',   // Ligeramente más claro para cards
        },
        text: {
            primary: '#ededed',
            secondary: '#a1a1a1',
        },
    },
    typography: {
        fontFamily: roboto.style.fontFamily,
        h1: {
            fontFamily: robotoSlab.style.fontFamily,
            fontWeight: 700,
            letterSpacing: '-0.02em',
        },
        h2: {
            fontFamily: robotoSlab.style.fontFamily,
            fontWeight: 700,
            letterSpacing: '-0.01em',
        },
        h3: {
            fontFamily: robotoSlab.style.fontFamily,
            fontWeight: 600,
        },
        button: {
            textTransform: 'none', // Botones más modernos sin mayúsculas forzadas
            fontWeight: 600,
        },
    },
    shape: {
        borderRadius: 12, // Bordes más redondeados y modernos
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    borderRadius: 8,
                    boxShadow: 'none',
                    '&:hover': {
                        boxShadow: '0 4px 12px rgba(0,0,0,0.5)', // Glow sutil
                    },
                },
                containedPrimary: {
                    background: 'linear-gradient(45deg, #ffffff 30%, #e0e0e0 90%)',
                    color: '#000',
                },
            },
        },
        MuiCard: {
            styleOverrides: {
                root: {
                    transition: 'transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out',
                    border: '1px solid rgba(255, 255, 255, 0.08)',
                    '&:hover': {
                        transform: 'translateY(-4px)',
                        boxShadow: '0 12px 24px rgba(0,0,0,0.4)',
                        // Efecto de borde brillante sutil
                        borderColor: 'rgba(255, 255, 255, 0.2)',
                    },
                },
            },
        },
        MuiChip: {
            styleOverrides: {
                root: {
                    border: '1px solid rgba(255,255,255,0.1)',
                    background: 'rgba(255,255,255,0.03)',
                },
            },
        },
    },
});

export default responsiveFontSizes(theme);
