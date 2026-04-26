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
} from '@mui/lab';
import WorkIcon from '@mui/icons-material/Work';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import { useContent } from '../../lib/i18n/useContent';

// Keywords highlighted in the timeline bullets to help recruiter scanning
const KEYWORD_REGEX = [
    /Node\.js/gi,
    /NestJS/gi,
    /React Native/gi,
    /React/gi,
    /Next\.js/gi,
    /TypeScript/gi,
    /CI\/CD/gi,
    /Azure DevOps/gi,
    /Azure/gi,
    /GraphQL Subscriptions/gi,
    /GraphQL/gi,
    /PostgreSQL/gi,
    /Redis/gi,
    /RabbitMQ/gi,
    /RAG/gi,
    /SSE/gi,
    /Docker/gi,
    /Vue 3/gi,
    /Pinia/gi,
    /Application Insights/gi,
    /Mailgun/gi,
    /Google Maps/gi,
    /Flash/gi,
    /Electron/gi,
];

function highlightKeywords(text: string): string {
    let formatted = text;
    KEYWORD_REGEX.forEach((regex) => {
        formatted = formatted.replace(regex, (match) => `<strong>${match}</strong>`);
    });
    return formatted;
}

export default function Experience() {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));
    const { experience, labels } = useContent();

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
                    {labels.experience.title}
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
                    }}
                >
                    {labels.experience.subtitle}
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
                    {experience.map((exp) => (
                        <TimelineItem key={exp.id}>
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
                                            fontSize: { xs: '1.05rem', md: '1.2rem' },
                                            lineHeight: 1.25,
                                            mb: 0.5,
                                        }}
                                    >
                                        {exp.position}
                                    </Typography>
                                    <Typography
                                        variant="subtitle2"
                                        sx={{
                                            mb: 1.5,
                                            display: 'inline-flex',
                                            alignItems: 'center',
                                            gap: 0.5,
                                            color: 'secondary.main',
                                            fontWeight: 600,
                                            fontSize: { xs: '0.85rem', md: '0.875rem' },
                                        }}
                                    >
                                        {exp.url ? (
                                            <Typography
                                                component="a"
                                                href={exp.url}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                sx={{
                                                    color: 'inherit',
                                                    textDecoration: 'none',
                                                    display: 'inline-flex',
                                                    alignItems: 'center',
                                                    gap: 0.5,
                                                    '&:hover': { textDecoration: 'underline' },
                                                }}
                                            >
                                                {exp.company}
                                                <OpenInNewIcon sx={{ fontSize: 14 }} />
                                            </Typography>
                                        ) : (
                                            exp.company
                                        )}
                                    </Typography>
                                    {exp.summary && (
                                        <Typography
                                            variant="body2"
                                            sx={{
                                                color: 'text.primary',
                                                fontStyle: 'italic',
                                                mb: 2,
                                                fontSize: { xs: '0.85rem', md: '0.9rem' },
                                                lineHeight: 1.55,
                                            }}
                                        >
                                            {exp.summary}
                                        </Typography>
                                    )}
                                    <Box component="ul" sx={{ pl: 2, m: 0 }}>
                                        {exp.highlights.map((h, i) => (
                                            <Typography
                                                component="li"
                                                variant="body2"
                                                color="text.secondary"
                                                key={i}
                                                sx={{
                                                    mb: 1,
                                                    lineHeight: 1.65,
                                                    fontSize: { xs: '0.825rem', md: '0.875rem' },
                                                    '& strong': {
                                                        color: 'text.primary',
                                                        fontWeight: 600,
                                                    },
                                                }}
                                                dangerouslySetInnerHTML={{
                                                    __html: highlightKeywords(h),
                                                }}
                                            />
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
