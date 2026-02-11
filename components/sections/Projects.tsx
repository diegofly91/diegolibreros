'use client';
import * as React from 'react';
import {
    Box,
    Container,
    Typography,
    Grid,
    Card,
    CardContent,
    CardMedia,
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
import { projects } from '../../data/mockData';
import Image from 'next/image';

const MIN_ZOOM = 0.5;
const MAX_ZOOM = 4;
const ZOOM_SENSITIVITY = 0.002;

export default function Projects() {
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
            }}
        >
            <Container maxWidth="lg">
                <Typography
                    variant="h2"
                    sx={{
                        fontSize: { xs: '2rem', md: '3rem' },
                        fontWeight: 700,
                        color: '#fff',
                        textShadow: '2px 2px 4px rgba(0, 0, 0, 0.7)',
                        mb: 2,
                        textAlign: 'center',
                    }}
                >
                    Proyectos Destacados
                </Typography>
                <Typography
                    variant="body1"
                    sx={{
                        color: '#fff',
                        textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
                        textAlign: 'center',
                        maxWidth: '600px',
                        mx: 'auto',
                        mb: 6,
                    }}
                >
                    Una selección de proyectos que demuestran mis habilidades y experiencia
                </Typography>

                <Grid container spacing={4}>
                    {projects.map((project) => (
                        <Grid item xs={12} md={project.featured ? 12 : 6} key={project.title}>
                            <Card
                                sx={{
                                    height: '100%',
                                    display: 'flex',
                                    flexDirection: project.featured ? { xs: 'column', md: 'row' } : 'column',
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
                                        backgroundColor: 'rgba(255,255,255,0.05)',
                                        overflow: 'hidden',
                                        cursor: 'zoom-in',
                                        '&:hover .zoom-overlay': {
                                            opacity: 1,
                                        },
                                    }}
                                >
                                    <Box
                                        className="zoom-overlay"
                                        sx={{
                                            position: 'absolute',
                                            top: 0,
                                            left: 0,
                                            width: '100%',
                                            height: '100%',
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
                                        sizes={project.featured ? "(max-width: 768px) 100vw, 50vw" : "(max-width: 768px) 100vw, 50vw"}
                                        style={{ objectFit: 'cover' }}
                                        priority={project.featured}
                                    />
                                </Box>
                                <CardContent
                                    sx={{
                                        flex: 1,
                                        display: 'flex',
                                        flexDirection: 'column',
                                    }}
                                >
                                    <Typography
                                        variant="h5"
                                        sx={{
                                            fontWeight: 600,
                                            mb: 2,
                                        }}
                                    >
                                        {project.title}
                                    </Typography>
                                    <Typography
                                        variant="body2"
                                        color="text.secondary"
                                        sx={{ mb: 3, lineHeight: 1.7 }}
                                    >
                                        {project.description}
                                    </Typography>

                                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 3 }}>
                                        {project.stack.map((tech) => (
                                            <Chip
                                                key={tech}
                                                label={tech}
                                                size="small"
                                                sx={{
                                                    backgroundColor: 'rgba(0,112,243,0.1)',
                                                    color: 'secondary.main',
                                                }}
                                            />
                                        ))}
                                    </Box>

                                    <Stack direction="row" spacing={2} sx={{ mt: 'auto' }}>
                                        {project.demo !== '#' && (
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
                                                    '&:hover': {
                                                        borderColor: 'rgba(255,255,255,0.4)',
                                                    },
                                                }}
                                            >
                                                Demo
                                            </Button>
                                        )}
                                        {project.github !== '#' && (
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
                                                    '&:hover': {
                                                        borderColor: 'rgba(255,255,255,0.4)',
                                                    },
                                                }}
                                            >
                                                Code
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
                        sx: { backgroundColor: 'rgba(0, 0, 0, 0.9)' }
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
                                '&:hover': {
                                    backgroundColor: 'rgba(255,255,255,0.2)',
                                },
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
