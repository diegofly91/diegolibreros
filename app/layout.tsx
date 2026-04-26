import * as React from 'react';
import ThemeRegistry from './ThemeRegistry';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import { LanguageProvider } from '../lib/i18n/LanguageContext';

export const metadata = {
    title: 'Diego Libreros | Full Stack Engineer · NestJS · AI/RAG',
    description:
        'Full Stack Engineer with 7 years of experience. Backend-heavy, specialized in NestJS, PostgreSQL and AI/RAG. Building real-time systems and semantic search engines for B2B startups.',
    keywords: [
        'Full Stack Developer',
        'Backend Engineer',
        'NestJS',
        'Node.js',
        'PostgreSQL',
        'GraphQL',
        'RAG',
        'AI Engineer',
        'Diego Libreros',
    ],
    openGraph: {
        title: 'Diego Libreros | Full Stack Engineer',
        description:
            'I build platforms that scale with your startup. NestJS · PostgreSQL · AI/RAG.',
        type: 'website',
    },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="es">
            <body>
                <ThemeRegistry>
                    <LanguageProvider>
                        <Navbar />
                        <main>{children}</main>
                        <Footer />
                    </LanguageProvider>
                </ThemeRegistry>
            </body>
        </html>
    );
}
