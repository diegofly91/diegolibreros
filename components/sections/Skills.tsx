'use client';
import * as React from 'react';
import { Box, Container, Typography, Grid, Tooltip } from '@mui/material';
import { useContent } from '../../lib/i18n/useContent';
import type { SkillLevel } from '../../lib/i18n/content';

const LEVEL_STYLES: Record<SkillLevel, { bg: string; border: string; color: string }> = {
    expert: {
        bg: 'rgba(0, 112, 243, 0.12)',
        border: 'rgba(0, 112, 243, 0.45)',
        color: '#6ab7ff',
    },
    proficient: {
        bg: 'rgba(255, 255, 255, 0.06)',
        border: 'rgba(255, 255, 255, 0.18)',
        color: '#ededed',
    },
    familiar: {
        bg: 'rgba(255, 255, 255, 0.02)',
        border: 'rgba(255, 255, 255, 0.08)',
        color: '#888',
    },
};

export default function Skills() {
    const { skillCategories, labels } = useContent();

    return (
        <Box
            id="skills"
            sx={{
                py: { xs: 8, md: 12 },
                backgroundColor: 'background.paper',
                position: 'relative',
                overflow: 'hidden',
            }}
        >
            <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
                <Typography
                    variant="h2"
                    sx={{
                        fontSize: { xs: '2rem', md: '3rem' },
                        fontWeight: 700,
                        mb: 2,
                        textAlign: 'center',
                    }}
                >
                    {labels.skills.title}
                </Typography>
                <Typography
                    variant="body1"
                    sx={{
                        color: 'text.secondary',
                        textAlign: 'center',
                        maxWidth: '640px',
                        mx: 'auto',
                        mb: 4,
                        fontSize: '1.05rem',
                        lineHeight: 1.7,
                    }}
                >
                    {labels.skills.subtitle}
                </Typography>

                {/* Legend */}
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        flexWrap: 'wrap',
                        gap: 2,
                        mb: 6,
                    }}
                >
                    {(Object.keys(LEVEL_STYLES) as SkillLevel[]).map((level) => (
                        <Box
                            key={level}
                            sx={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: 1,
                                fontSize: '0.8rem',
                                color: 'text.secondary',
                            }}
                        >
                            <Box
                                sx={{
                                    width: 10,
                                    height: 10,
                                    borderRadius: '50%',
                                    backgroundColor: LEVEL_STYLES[level].border,
                                }}
                            />
                            {labels.skills.levels[level]}
                        </Box>
                    ))}
                </Box>

                <Grid container spacing={3}>
                    {skillCategories.map((category) => (
                        <Grid item xs={12} sm={6} md={3} key={category.key}>
                            <Box
                                sx={{
                                    p: 3,
                                    height: '100%',
                                    borderRadius: 3,
                                    border: '1px solid rgba(255,255,255,0.05)',
                                    backgroundColor: 'rgba(255,255,255,0.02)',
                                    transition: 'all 0.3s ease',
                                    '&:hover': {
                                        backgroundColor: 'rgba(255,255,255,0.04)',
                                        borderColor: 'rgba(255,255,255,0.1)',
                                        transform: 'translateY(-4px)',
                                    },
                                }}
                            >
                                <Typography
                                    variant="h6"
                                    sx={{
                                        fontWeight: 700,
                                        mb: 3,
                                        color: 'text.primary',
                                        fontSize: '1rem',
                                        textTransform: 'uppercase',
                                        letterSpacing: '0.05em',
                                        opacity: 0.85,
                                    }}
                                >
                                    {labels.skills.categoryNames[category.key] ?? category.key}
                                </Typography>
                                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                                    {category.skills.map((skill) => {
                                        const style = LEVEL_STYLES[skill.level];
                                        const tooltipLabel = `${labels.skills.levels[skill.level]}${
                                            skill.years ? ` · ${skill.years}y` : ''
                                        }`;
                                        return (
                                            <Tooltip key={skill.name} title={tooltipLabel} arrow>
                                                <Box
                                                    sx={{
                                                        display: 'inline-flex',
                                                        alignItems: 'center',
                                                        gap: 0.75,
                                                        px: 1.25,
                                                        py: 0.6,
                                                        borderRadius: '6px',
                                                        fontSize: '0.8rem',
                                                        fontWeight: 600,
                                                        backgroundColor: style.bg,
                                                        border: `1px solid ${style.border}`,
                                                        color: style.color,
                                                        cursor: 'default',
                                                        transition: 'all 0.15s ease',
                                                        '&:hover': {
                                                            transform: 'translateY(-1px)',
                                                        },
                                                    }}
                                                >
                                                    <Box component="span" sx={{ fontSize: '0.85rem' }}>
                                                        {skill.icon}
                                                    </Box>
                                                    <Box component="span">{skill.name}</Box>
                                                </Box>
                                            </Tooltip>
                                        );
                                    })}
                                </Box>
                            </Box>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </Box>
    );
}
