'use client';
import * as React from 'react';
import {
    Box,
    Container,
    Typography,
    Grid,
    Card,
    CardContent,
    Chip,
    Button,
    Stack,
    Modal,
    Backdrop,
    Fade,
    IconButton,
} from '@mui/material';
import LaunchIcon from '@mui/icons-material/Launch';
import GitHubIcon from '@mui/icons-material/GitHub';
import CloseIcon from '@mui/icons-material/Close';
import ZoomInIcon from '@mui/icons-material/ZoomIn';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import { useContent } from '../../lib/i18n/useContent';
import Image from 'next/image';

const MIN_ZOOM = 0.5;
const MAX_ZOOM = 4;
const ZOOM_SENSITIVITY = 0.002;

export default function Projects() {
    const { projects, labels } = useContent();
    const [selectedImage, setSelectedImage] = React.useState<string | null>(null);
    const [zoom, setZoom] = React.useState(1);
    const [pan, setPan] = React.useState({ x: 0, y: 0 });
    const [isDragging, setIsDragging] = React.useState(false);
    const dragStart = React.useRef({ x: 0, y: 0, panX: 0, panY: 0 });
    const previewContainerRef = React.useRef<HTMLDivElement>(null);

    const handleOpen = (image: string) => {
        setSelectedImage(image);
        setZoom(1);
        setPan({ x: 0, y: 0 });
    };

    const handleClose = () => {
        setSelectedImage(null);
        setZoom(1);
        setPan({ x: 0, y: 0 });
    };

    const handleWheel = (e: React.WheelEvent) => {
        e.preventDefault();
        e.stopPropagation();
        const container = previewContainerRef.current;
        if (!container) return;
        const rect = container.getBoundingClientRect();
        const cursorX = e.clientX - rect.left;
        const cursorY = e.clientY - rect.top;
        setZoom((z) => {
            const newZoom = Math.min(MAX_ZOOM, Math.max(MIN_ZOOM, z - e.deltaY * ZOOM_SENSITIVITY));
            setPan((p) => ({
                x: p.x * (newZoom / z) + cursorX * (1 - newZoom / z),
                y: p.y * (newZoom / z) + cursorY * (1 - newZoom / z),
            }));
            return newZoom;
        });
    };

    const handleMouseDown = (e: React.MouseEvent) => {
        if (e.button !== 0) return;
        setIsDragging(true);
        dragStart.current = { x: e.clientX, y: e.clientY, panX: pan.x, panY: pan.y };
    };

    const handleMouseMove = (e: React.MouseEvent) => {
        if (!isDragging) return;
        setPan({
            x: dragStart.current.panX + (e.clientX - dragStart.current.x),
            y: dragStart.current.panY + (e.clientY - dragStart.current.y),
        });
    };

    const handleMouseUp = () => setIsDragging(false);
    const handleMouseLeave = () => setIsDragging(false);

    React.useEffect(() => {
        const el = previewContainerRef.current;
        if (!el || !selectedImage) return;
        const preventScroll = (e: WheelEvent) => e.preventDefault();
        el.addEventListener('wheel', preventScroll, { passive: false });
        return () => el.removeEventListener('wheel', preventScroll);
    }, [selectedImage]);

    return (
        <Box
            id="projects"
            sx={{
                py: { xs: 8, md: 12 },
                backgroundColor: 'background.default',
                backgroundImage: 'url(sign.jpg)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                backgroundAttachment: { xs: 'scroll', md: 'fixed' },
                position: 'relative',
                '&::before': {
                    content: '""',
                    position: 'absolute',
                    inset: 0,
                    backgroundColor: 'rgba(0,0,0,0.55)',
                    zIndex: 0,
                },
            }}
        >
            <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
                <Typography
                    variant="h2"
                    sx={{
                        fontSize: { xs: '2rem', md: '3rem' },
                        fontWeight: 700,
                        color: '#fff',
                        mb: 2,
                        textAlign: 'center',
                    }}
                >
                    {labels.projects.title}
                </Typography>
                <Typography
                    variant="body1"
                    sx={{
                        color: 'rgba(255,255,255,0.85)',
                        textAlign: 'center',
                        maxWidth: '720px',
                        mx: 'auto',
                        mb: 6,
                        fontSize: '1.05rem',
                        lineHeight: 1.7,
                    }}
                >
                    {labels.projects.subtitle}
                </Typography>

                <Grid container spacing={4}>
                    {projects.map((project) => (
                        <Grid item xs={12} md={project.featured ? 12 : 6} key={project.id}>
                            <Card
                                sx={{
                                    height: '100%',
                                    display: 'flex',
                                    flexDirection: project.featured ? { xs: 'column', md: 'row' } : 'column',
                                    backgroundColor: 'rgba(17,17,17,0.92)',
                                    backdropFilter: 'blur(8px)',
                                    transition: 'all 0.3s ease',
                                    '&:hover': {
                                        transform: 'translateY(-8px)',
                                    },
                                }}
                            >
                                <Box
                                    onClick={() => handleOpen(project.image)}
                                    sx={{
                                        position: 'relative',
                                        width: project.featured ? { xs: '100%', md: '50%' } : '100%',
                                        height: project.featured ? { xs: 250, md: 'auto' } : 250,
                                        minHeight: project.featured ? { md: 380 } : undefined,
                                        backgroundColor: 'rgba(255,255,255,0.05)',
                                        overflow: 'hidden',
                                        cursor: 'zoom-in',
                                        '&:hover .zoom-overlay': { opacity: 1 },
                                    }}
                                >
                                    <Box
                                        className="zoom-overlay"
                                        sx={{
                                            position: 'absolute',
                                            inset: 0,
                                            backgroundColor: 'rgba(0,0,0,0.3)',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            opacity: 0,
                                            transition: 'opacity 0.3s ease',
                                            zIndex: 2,
                                        }}
                                    >
                                        <ZoomInIcon sx={{ color: 'white', fontSize: '2.5rem' }} />
                                    </Box>
                                    <Image
                                        src={project.image}
                                        alt={project.title}
                                        fill
                                        sizes="(max-width: 768px) 100vw, 50vw"
                                        style={{ objectFit: 'cover' }}
                                        priority={project.featured}
                                    />
                                </Box>

                                <CardContent
                                    sx={{
                                        flex: 1,
                                        display: 'flex',
                                        flexDirection: 'column',
                                        p: { xs: 3, md: 4 },
                                    }}
                                >
                                    <Typography
                                        variant="h5"
                                        sx={{
                                            fontWeight: 700,
                                            mb: 2,
                                            fontSize: { xs: '1.25rem', md: '1.5rem' },
                                        }}
                                    >
                                        {project.title}
                                    </Typography>
                                    <Typography
                                        variant="body2"
                                        color="text.secondary"
                                        sx={{
                                            mb: 3,
                                            lineHeight: 1.75,
                                            fontSize: { xs: '0.9rem', md: '0.95rem' },
                                        }}
                                    >
                                        {project.description}
                                    </Typography>

                                    {project.highlights.length > 0 && (
                                        <Box component="ul" sx={{ listStyle: 'none', p: 0, m: 0, mb: 3 }}>
                                            {project.highlights.map((h, i) => (
                                                <Box
                                                    component="li"
                                                    key={i}
                                                    sx={{
                                                        display: 'flex',
                                                        alignItems: 'flex-start',
                                                        gap: 1,
                                                        mb: 1,
                                                        fontSize: { xs: '0.825rem', md: '0.875rem' },
                                                        color: 'text.secondary',
                                                        lineHeight: 1.6,
                                                    }}
                                                >
                                                    <CheckCircleOutlineIcon
                                                        sx={{
                                                            fontSize: 16,
                                                            color: 'secondary.main',
                                                            mt: '2px',
                                                            flexShrink: 0,
                                                        }}
                                                    />
                                                    <span>{h}</span>
                                                </Box>
                                            ))}
                                        </Box>
                                    )}

                                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.75, mb: 3 }}>
                                        {project.stack.map((tech) => (
                                            <Chip
                                                key={tech}
                                                label={tech}
                                                size="small"
                                                sx={{
                                                    backgroundColor: 'rgba(0,112,243,0.08)',
                                                    color: 'secondary.main',
                                                    border: '1px solid rgba(0,112,243,0.25)',
                                                    fontWeight: 600,
                                                    fontSize: '0.72rem',
                                                }}
                                            />
                                        ))}
                                    </Box>

                                    <Stack direction="row" spacing={2} sx={{ mt: 'auto' }}>
                                        {project.demo && (
                                            <Button
                                                component="a"
                                                variant="outlined"
                                                size="small"
                                                startIcon={<LaunchIcon />}
                                                href={project.demo}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                sx={{
                                                    borderColor: 'rgba(255,255,255,0.2)',
                                                    '&:hover': { borderColor: 'rgba(255,255,255,0.4)' },
                                                }}
                                            >
                                                {labels.projects.demo}
                                            </Button>
                                        )}
                                        {project.github && (
                                            <Button
                                                component="a"
                                                variant="outlined"
                                                size="small"
                                                startIcon={<GitHubIcon />}
                                                href={project.github}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                sx={{
                                                    borderColor: 'rgba(255,255,255,0.2)',
                                                    '&:hover': { borderColor: 'rgba(255,255,255,0.4)' },
                                                }}
                                            >
                                                {labels.projects.code}
                                            </Button>
                                        )}
                                    </Stack>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Container>

            {/* Image Preview Modal */}
            <Modal
                open={Boolean(selectedImage)}
                onClose={(_e, reason) => {
                    if (reason === 'escapeKeyDown') handleClose();
                }}
                closeAfterTransition
                slots={{ backdrop: Backdrop }}
                slotProps={{
                    backdrop: {
                        timeout: 500,
                        sx: { backgroundColor: 'rgba(0, 0, 0, 0.9)' },
                    },
                }}
            >
                <Fade in={Boolean(selectedImage)}>
                    <Box
                        sx={{
                            position: 'absolute',
                            top: '50%',
                            left: '50%',
                            transform: 'translate(-50%, -50%)',
                            width: '90vw',
                            height: '90vh',
                            outline: 'none',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                        }}
                    >
                        <IconButton
                            onClick={handleClose}
                            sx={{
                                position: 'fixed',
                                top: 20,
                                right: 20,
                                color: 'white',
                                backgroundColor: 'rgba(255,255,255,0.1)',
                                '&:hover': { backgroundColor: 'rgba(255,255,255,0.2)' },
                                zIndex: 10,
                            }}
                        >
                            <CloseIcon />
                        </IconButton>

                        {selectedImage && (
                            <Box
                                ref={previewContainerRef}
                                onWheel={handleWheel}
                                onMouseDown={handleMouseDown}
                                onMouseMove={handleMouseMove}
                                onMouseUp={handleMouseUp}
                                onMouseLeave={handleMouseLeave}
                                onDoubleClick={handleClose}
                                sx={{
                                    position: 'relative',
                                    width: '100%',
                                    height: '100%',
                                    borderRadius: 2,
                                    overflow: 'hidden',
                                    boxShadow: '0 0 50px rgba(0,0,0,0.5)',
                                    cursor: isDragging ? 'grabbing' : zoom > 1 ? 'grab' : 'zoom-in',
                                }}
                            >
                                <Box
                                    sx={{
                                        position: 'absolute',
                                        left: 0,
                                        top: 0,
                                        width: '100%',
                                        height: '100%',
                                        transform: `translate(${pan.x}px, ${pan.y}px) scale(${zoom})`,
                                        transformOrigin: '0 0',
                                    }}
                                >
                                    <Image
                                        src={selectedImage}
                                        alt="Preview"
                                        fill
                                        style={{ objectFit: 'contain' }}
                                        draggable={false}
                                    />
                                </Box>
                            </Box>
                        )}
                    </Box>
                </Fade>
            </Modal>
        </Box>
    );
}
