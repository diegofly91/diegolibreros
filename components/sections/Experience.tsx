'use client';
import * as React from 'react';
import { useMediaQuery, useTheme, Box, Container, Typography } from '@mui/material';
import {
    Timeline,
    TimelineItem,
    TimelineSeparator,
    TimelineConnector,
    TimelineContent,
    TimelineDot,
    TimelineOppositeContent,
    timelineOppositeContentClasses,
} from '@mui/lab';
import WorkIcon from '@mui/icons-material/Work';
import experienceData from '../../constants/experience';

export default function Experience() {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));

    return (
        <Box
            id="experience"
            sx={{
                py: { xs: 8, md: 12 },
                backgroundColor: 'background.paper',
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
                    Experiencia
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
                    Mi trayectoria profesional en el desarrollo de software
                </Typography>

                <Timeline
                    position={isMobile ? 'right' : 'alternate'}
                    sx={
                        isMobile
                            ? {
                                px: 0,
                                '& .MuiTimelineItem-root:before': {
                                    flex: 0,
                                    padding: 0,
                                },
                                '& .MuiTimelineContent-root': {
                                    paddingRight: 0,
                                    paddingLeft: 1.5,
                                },
                            }
                            : {}
                    }
                >
                    {experienceData.map((exp, index) => (
                        <TimelineItem key={index}>
                            {!isMobile && (
                                <TimelineOppositeContent
                                    sx={{ m: 'auto 0' }}
                                    variant="body2"
                                    color="text.secondary"
                                >
                                    {exp.date}
                                </TimelineOppositeContent>
                            )}
                            <TimelineSeparator>
                                <TimelineConnector sx={{ bgcolor: 'rgba(255,255,255,0.1)' }} />
                                <TimelineDot
                                    sx={{
                                        backgroundColor: 'secondary.main',
                                        boxShadow: '0 0 20px rgba(0,112,243,0.5)',
                                        p: { xs: '6px', md: '12px' },
                                    }}
                                >
                                    <WorkIcon sx={{ fontSize: { xs: 18, md: 24 } }} />
                                </TimelineDot>
                                <TimelineConnector sx={{ bgcolor: 'rgba(255,255,255,0.1)' }} />
                            </TimelineSeparator>
                            <TimelineContent sx={{ py: '16px', px: { xs: 0, md: 2 } }}>
                                <Box
                                    sx={{
                                        p: { xs: 2, md: 3 },
                                        borderRadius: 2,
                                        border: '1px solid rgba(255,255,255,0.1)',
                                        backgroundColor: 'rgba(255,255,255,0.02)',
                                        transition: 'all 0.3s ease',
                                        '&:hover': {
                                            backgroundColor: 'rgba(255,255,255,0.05)',
                                            borderColor: 'rgba(255,255,255,0.2)',
                                        },
                                    }}
                                >
                                    {isMobile && (
                                        <Typography
                                            variant="caption"
                                            sx={{
                                                color: 'secondary.main',
                                                display: 'block',
                                                mb: 0.5,
                                                fontWeight: 600,
                                                letterSpacing: '0.05em',
                                                fontSize: '0.75rem',
                                            }}
                                        >
                                            {exp.date}
                                        </Typography>
                                    )}
                                    <Typography
                                        variant="h6"
                                        component="h3"
                                        sx={{
                                            fontWeight: 700,
                                            fontSize: { xs: '1.1rem', md: '1.25rem' },
                                            lineHeight: 1.2,
                                            mb: 0.5,
                                        }}
                                    >
                                        {exp.position}
                                    </Typography>
                                    <Typography
                                        variant="subtitle2"
                                        color="secondary"
                                        sx={{
                                            mb: 2,
                                            display: 'flex',
                                            alignItems: 'center',
                                            flexWrap: 'wrap',
                                            gap: 0.5,
                                            fontWeight: 500,
                                            fontSize: { xs: '0.85rem', md: '0.875rem' },
                                        }}
                                    >
                                        {exp.title}
                                        {exp.url && (
                                            <Typography
                                                component="a"
                                                href={exp.url}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                sx={{
                                                    color: 'secondary.main',
                                                    textDecoration: 'none',
                                                    fontSize: '0.75rem',
                                                    '&:hover': {
                                                        textDecoration: 'underline',
                                                    },
                                                }}
                                            >
                                                🔗
                                            </Typography>
                                        )}
                                    </Typography>
                                    <Box component="ul" sx={{ pl: 2, m: 0 }}>
                                        {exp.functions.map((func, i) => (
                                            <Typography
                                                component="li"
                                                variant="body2"
                                                color="text.secondary"
                                                key={i}
                                                sx={{
                                                    mb: 1,
                                                    lineHeight: 1.6,
                                                    fontSize: { xs: '0.8125rem', md: '0.875rem' },
                                                }}
                                            >
                                                {func}
                                            </Typography>
                                        ))}
                                    </Box>
                                </Box>
                            </TimelineContent>
                        </TimelineItem>
                    ))}
                </Timeline>
            </Container>
        </Box>
    );
}

