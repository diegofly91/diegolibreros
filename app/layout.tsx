import * as React from 'react';
import ThemeRegistry from './ThemeRegistry';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';

export const metadata = {
    title: 'Diego Libreros | Full Stack Developer',
    description: 'Portafolio profesional de Diego Libreros. Desarrollador Full Stack especializado en Node.js, React, NestJS y Arquitectura Cloud.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="es">
            <body>
                <ThemeRegistry>
                    <Navbar />
                    <main>{children}</main>
                    <Footer />
                </ThemeRegistry>
            </body>
        </html>
    );
}
