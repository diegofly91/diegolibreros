'use client';
import * as React from 'react';
import {
    Box,
    Container,
    Typography,
    TextField,
    Button,
    Grid,
    Alert,
} from '@mui/material';
import SendIcon from '@mui/icons-material/Send';

export default function Contact() {
    const [formData, setFormData] = React.useState({
        name: '',
        email: '',
        message: '',
    });
    const [submitted, setSubmitted] = React.useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Aquí iría la lógica de envío del formulario
        console.log('Form submitted:', formData);
        setSubmitted(true);
        setTimeout(() => setSubmitted(false), 5000);
    };

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
                    Hablemos
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
                    ¿Tienes un proyecto en mente? Estoy disponible para colaboraciones y nuevas oportunidades
                </Typography>

                {submitted && (
                    <Alert severity="success" sx={{ mb: 3 }}>
                        ¡Mensaje enviado! Te responderé pronto.
                    </Alert>
                )}

                <Box
                    component="form"
                    onSubmit={handleSubmit}
                    sx={{
                        p: { xs: 3, md: 4 },
                        borderRadius: 2,
                        border: '1px solid rgba(255,255,255,0.1)',
                        backgroundColor: 'rgba(255,255,255,0.02)',
                    }}
                >
                    <Grid container spacing={3}>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                fullWidth
                                label="Nombre"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                                sx={{
                                    '& .MuiOutlinedInput-root': {
                                        '& fieldset': {
                                            borderColor: 'rgba(255,255,255,0.2)',
                                        },
                                        '&:hover fieldset': {
                                            borderColor: 'rgba(255,255,255,0.3)',
                                        },
                                    },
                                }}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                fullWidth
                                label="Email"
                                name="email"
                                type="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                sx={{
                                    '& .MuiOutlinedInput-root': {
                                        '& fieldset': {
                                            borderColor: 'rgba(255,255,255,0.2)',
                                        },
                                        '&:hover fieldset': {
                                            borderColor: 'rgba(255,255,255,0.3)',
                                        },
                                    },
                                }}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                fullWidth
                                label="Mensaje"
                                name="message"
                                multiline
                                rows={6}
                                value={formData.message}
                                onChange={handleChange}
                                required
                                sx={{
                                    '& .MuiOutlinedInput-root': {
                                        '& fieldset': {
                                            borderColor: 'rgba(255,255,255,0.2)',
                                        },
                                        '&:hover fieldset': {
                                            borderColor: 'rgba(255,255,255,0.3)',
                                        },
                                    },
                                }}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <Button
                                type="submit"
                                variant="contained"
                                size="large"
                                endIcon={<SendIcon />}
                                fullWidth
                                sx={{
                                    py: 1.5,
                                    fontSize: '1rem',
                                }}
                            >
                                Enviar Mensaje
                            </Button>
                        </Grid>
                    </Grid>
                </Box>
            </Container>
        </Box>
    );
}
