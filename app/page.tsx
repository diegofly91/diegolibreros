import * as React from 'react';
import Hero from '../components/sections/Hero';
import About from '../components/sections/About';
import Skills from '../components/sections/Skills';
import Projects from '../components/sections/Projects';
import Experience from '../components/sections/Experience';
import Contact from '../components/sections/Contact';
import { Box } from '@mui/material';

export default function HomePage() {
    return (
        <Box>
            <Hero />
            <About />
            <Skills />
            <Projects />
            <Experience />
            {/* <Contact /> */}
        </Box>
    );
}
