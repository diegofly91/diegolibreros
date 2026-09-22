'use client';

import { Box, Card, CardContent, Container, Grid, Typography } from '@mui/material';
import { useContent } from '../../lib/i18n/useContent';

export default function AiAssistedWork() {
    const { aiWorkflow } = useContent();

    return (
        <Box id="ai-workflow" sx={{ py: { xs: 8, md: 12 }, backgroundColor: 'background.default' }}>
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
                    {aiWorkflow.title}
                </Typography>
                <Typography
                    variant="body1"
                    color="text.secondary"
                    sx={{
                        textAlign: 'center',
                        maxWidth: '720px',
                        mx: 'auto',
                        mb: 2,
                        fontSize: '1.05rem',
                        lineHeight: 1.7,
                    }}
                >
                    {aiWorkflow.subtitle}
                </Typography>
                <Typography
                    variant="body2"
                    sx={{
                        color: 'secondary.main',
                        textAlign: 'center',
                        maxWidth: '720px',
                        mx: 'auto',
                        mb: 6,
                        fontWeight: 600,
                        lineHeight: 1.7,
                    }}
                >
                    {aiWorkflow.principle}
                </Typography>

                <Grid container spacing={2} sx={{ mb: 4 }}>
                    {aiWorkflow.steps.map((step, index) => (
                        <Grid item xs={12} sm={6} md={3} key={step.title}>
                            <Card sx={{ height: '100%', backgroundColor: 'background.paper' }}>
                                <CardContent sx={{ p: 3 }}>
                                    <Typography
                                        variant="overline"
                                        sx={{ color: 'secondary.main', fontWeight: 700, letterSpacing: '0.08em' }}
                                    >
                                        0{index + 1}
                                    </Typography>
                                    <Typography variant="h6" component="h3" sx={{ fontWeight: 700, mb: 1 }}>
                                        {step.title}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.65 }}>
                                        {step.description}
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </Grid>

                <Grid container spacing={2}>
                    {aiWorkflow.tools.map((tool) => (
                        <Grid item xs={12} sm={6} md={4} key={tool.name}>
                            <Box
                                sx={{
                                    height: '100%',
                                    p: 2.5,
                                    borderRadius: 2,
                                    border: '1px solid rgba(255,255,255,0.1)',
                                    backgroundColor: 'rgba(255,255,255,0.02)',
                                }}
                            >
                                <Typography variant="subtitle1" component="h3" sx={{ fontWeight: 700, mb: 0.5 }}>
                                    {tool.name}
                                </Typography>
                                <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.6 }}>
                                    {tool.description}
                                </Typography>
                            </Box>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </Box>
    );
}
