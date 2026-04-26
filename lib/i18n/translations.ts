export type Locale = 'es' | 'en';

export interface TranslationDict {
    nav: {
        home: string;
        about: string;
        skills: string;
        projects: string;
        experience: string;
        contact: string;
    };
    hero: {
        headline: string;
        role: string;
        description: string;
        primaryCta: string;
        secondaryCta: string;
        downloadCv: string;
        github: string;
        linkedin: string;
        email: string;
    };
    contact: {
        title: string;
        subtitle: string;
        emailLabel: string;
        linkedinLabel: string;
        githubLabel: string;
        emailCta: string;
        location: string;
    };
    footer: {
        rights: string;
    };
    language: {
        switchTo: string;
        label: string;
    };
}

export const translations: Record<Locale, TranslationDict> = {
    es: {
        nav: {
            home: 'Inicio',
            about: 'Sobre mí',
            skills: 'Stack',
            projects: 'Proyectos',
            experience: 'Experiencia',
            contact: 'Contacto',
        },
        hero: {
            headline: 'Construyo plataformas que escalan con tu startup',
            role: 'Full Stack Engineer · 7 años · Backend-heavy',
            description:
                'Especializado en NestJS, PostgreSQL y AI/RAG. Diseño sistemas en tiempo real, máquinas de estados complejas y motores de búsqueda semántica para productos B2B que deben funcionar el primer día… y al millón de requests.',
            primaryCta: 'Ver Turnia.app',
            secondaryCta: 'Hablemos',
            downloadCv: 'Descargar CV',
            github: 'GitHub',
            linkedin: 'LinkedIn',
            email: 'Email',
        },
        contact: {
            title: 'Hablemos',
            subtitle:
                'Estoy abierto a oportunidades full-time remotas en startups serias. Si tu equipo necesita un Full Stack que entienda backend a fondo, escribime.',
            emailLabel: 'Email',
            linkedinLabel: 'LinkedIn',
            githubLabel: 'GitHub',
            emailCta: 'Enviar email',
            location: 'Disponible para remoto · LATAM, USA, Europa',
        },
        footer: {
            rights: 'Todos los derechos reservados.',
        },
        language: {
            switchTo: 'EN',
            label: 'Cambiar idioma',
        },
    },
    en: {
        nav: {
            home: 'Home',
            about: 'About',
            skills: 'Stack',
            projects: 'Projects',
            experience: 'Experience',
            contact: 'Contact',
        },
        hero: {
            headline: 'I build platforms that scale with your startup',
            role: 'Full Stack Engineer · 7 years · Backend-heavy',
            description:
                'Specialized in NestJS, PostgreSQL and AI/RAG. I design real-time systems, complex state machines, and semantic search engines for B2B products that need to work on day one… and at a million requests.',
            primaryCta: 'See Turnia.app',
            secondaryCta: 'Get in touch',
            downloadCv: 'Download CV',
            github: 'GitHub',
            linkedin: 'LinkedIn',
            email: 'Email',
        },
        contact: {
            title: 'Let\'s talk',
            subtitle:
                'Open to full-time remote roles at serious startups. If your team needs a Full Stack engineer with deep backend chops, drop me a line.',
            emailLabel: 'Email',
            linkedinLabel: 'LinkedIn',
            githubLabel: 'GitHub',
            emailCta: 'Send email',
            location: 'Available for remote · LATAM, USA, Europe',
        },
        footer: {
            rights: 'All rights reserved.',
        },
        language: {
            switchTo: 'ES',
            label: 'Switch language',
        },
    },
};

export type TranslationKey = TranslationDict;
