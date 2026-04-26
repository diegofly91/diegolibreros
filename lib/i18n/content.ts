import type { Locale } from './translations';

// ============================================================================
// SHARED TYPES
// ============================================================================

export type SkillLevel = 'expert' | 'proficient' | 'familiar';

export interface Skill {
    name: string;
    icon: string;
    level: SkillLevel;
    years?: number;
}

export interface SkillCategory {
    key: string;
    skills: Skill[];
}

export interface Project {
    id: string;
    image: string;
    stack: string[];
    demo?: string;
    github?: string;
    featured?: boolean;
    title: string;
    description: string;
    highlights: string[];
}

export interface ExperienceEntry {
    id: string;
    company: string;
    url?: string;
    image?: string;
    position: string;
    date: string;
    summary: string;
    highlights: string[];
}

export interface AboutContent {
    title: string;
    paragraphs: string[];
    badges: { label: string; value: string }[];
}

export interface SectionLabels {
    about: { title: string };
    skills: {
        title: string;
        subtitle: string;
        levels: Record<SkillLevel, string>;
        categoryNames: Record<string, string>;
    };
    projects: { title: string; subtitle: string; demo: string; code: string };
    experience: { title: string; subtitle: string };
}

interface ContentShape {
    labels: SectionLabels;
    about: AboutContent;
    skillCategories: SkillCategory[];
    projects: Project[];
    experience: ExperienceEntry[];
}

// ============================================================================
// SKILLS — shared structure (level is language-agnostic)
// ============================================================================

const skillCategories: SkillCategory[] = [
    {
        key: 'backend',
        skills: [
            { name: 'Node.js', icon: '🟢', level: 'expert', years: 7 },
            { name: 'NestJS', icon: '🐈', level: 'expert', years: 4 },
            { name: 'TypeScript', icon: 'TS', level: 'expert', years: 5 },
            { name: 'PostgreSQL', icon: '🐘', level: 'expert', years: 5 },
            { name: 'REST APIs', icon: '🔌', level: 'expert', years: 7 },
            { name: 'GraphQL', icon: '🕸️', level: 'proficient', years: 3 },
            { name: 'Redis', icon: '🔴', level: 'proficient', years: 3 },
            { name: 'RabbitMQ', icon: '🐰', level: 'proficient', years: 2 },
            { name: 'SQL Server', icon: '🛢️', level: 'proficient', years: 2 },
            { name: 'Go', icon: '🐹', level: 'familiar', years: 1 },
        ],
    },
    {
        key: 'frontend',
        skills: [
            { name: 'React', icon: '⚛️', level: 'expert', years: 6 },
            { name: 'JavaScript', icon: 'JS', level: 'expert', years: 7 },
            { name: 'Next.js', icon: '▲', level: 'proficient', years: 3 },
            { name: 'Vue 3', icon: '🟢', level: 'proficient', years: 2 },
            { name: 'Material UI', icon: '🎨', level: 'proficient', years: 3 },
            { name: 'React Native', icon: '📱', level: 'proficient', years: 2 },
            { name: 'Electron.js', icon: '⚛️', level: 'familiar', years: 1 },
        ],
    },
    {
        key: 'aiArch',
        skills: [
            { name: 'Microservices', icon: '🏗️', level: 'proficient', years: 3 },
            { name: 'System Design', icon: '✏️', level: 'proficient', years: 3 },
            { name: 'RAG Architecture', icon: '🧠', level: 'proficient', years: 2 },
            { name: 'Vector Search', icon: '🔍', level: 'familiar', years: 2 },
            { name: 'Azure AI', icon: '🤖', level: 'familiar', years: 2 },
        ],
    },
    {
        key: 'cloudTools',
        skills: [
            { name: 'Git', icon: '🐙', level: 'expert', years: 7 },
            { name: 'Docker', icon: '🐳', level: 'proficient', years: 4 },
            { name: 'CI/CD', icon: '🔄', level: 'proficient', years: 3 },
            { name: 'Linux Servers', icon: '🐧', level: 'proficient', years: 5 },
            { name: 'Azure', icon: '☁️', level: 'proficient', years: 3 },
            { name: 'Azure DevOps', icon: '🚀', level: 'proficient', years: 3 },
            { name: 'AWS', icon: '☁️', level: 'familiar', years: 2 },
        ],
    },
];

// ============================================================================
// SPANISH CONTENT
// ============================================================================

const es: ContentShape = {
    labels: {
        about: { title: 'Sobre mí' },
        skills: {
            title: 'Stack técnico',
            subtitle:
                'Niveles basados en uso real en producción. Sin inflar, sin esconder: lo que sé, lo que hago bien y lo que estoy aprendiendo.',
            levels: {
                expert: 'Experto',
                proficient: 'Sólido',
                familiar: 'En camino',
            },
            categoryNames: {
                backend: 'Backend',
                frontend: 'Frontend',
                aiArch: 'AI & Arquitectura',
                cloudTools: 'Cloud & Tooling',
            },
        },
        projects: {
            title: 'Proyectos destacados',
            subtitle:
                'Selección de sistemas donde el problema técnico mandaba: concurrencia, eventos en tiempo real, search semántico y arquitectura de eventos.',
            demo: 'Demo',
            code: 'Código',
        },
        experience: {
            title: 'Experiencia',
            subtitle: '7 años construyendo software. De frontend a backend especializado.',
        },
    },
    about: {
        title: 'Construyo backend serio para productos que escalan',
        paragraphs: [
            'Soy Diego, ingeniero Full Stack con 7 años en la industria y los últimos 4 enfocado en backend. Hoy combino dos frentes: lidero el diseño de un motor RAG en producción en Axonier y, en paralelo, construyo Turnia.app desde cero — un sistema de gestión de turnos en tiempo real con máquina de estados, eventos sincronizados entre múltiples actores y control estricto de concurrencia.',
            'Me sale natural bajar a fondo en problemas que asustan: idempotencia, locks optimistas, búsqueda semántica, máquinas de estados con 8+ transiciones. Y después traducir esa complejidad en algo que el negocio entiende. No le tengo miedo al legacy ni a los sistemas distribuidos.',
            'Disponible para roles full-time remotos en startups donde el código importe.',
        ],
        badges: [
            { label: 'Años de experiencia', value: '7+' },
            { label: 'Stack principal', value: 'NestJS · PG · TS' },
            { label: 'Foco actual', value: 'AI/RAG · Real-time' },
            { label: 'Disponibilidad', value: 'Remoto · LATAM/USA/EU' },
        ],
    },
    skillCategories,
    projects: [
        {
            id: 'turnia',
            title: 'Turnia.app',
            description:
                'Sistema de gestión de turnos en tiempo real para empresas con atención presencial. Backend NestJS + GraphQL Subscriptions sincronizando 4 actores simultáneos (kiosko, panel del asesor, TV pública, seguimiento web) sin latencia perceptual.',
            highlights: [
                'Máquina de estados del turno con 8+ transiciones validadas (reasignaciones, no-shows, multiservicio).',
                'Generación atómica de tickets diarios bajo alta concurrencia.',
                'Algoritmo de priorización dinámica con compensación matemática para tiempos de espera.',
                'Auditoría asíncrona inmutable para métricas de servicio sin bloquear el flujo transaccional.',
            ],
            image: 'turnia.png',
            stack: ['NestJS', 'GraphQL', 'PostgreSQL', 'Redis', 'TypeScript', 'RabbitMQ', 'Docker'],
            demo: 'https://turnia.app',
            featured: true,
        },
        {
            id: 'rag',
            title: 'Buscador con IA (RAG)',
            description:
                'Motor RAG en producción en Axonier para búsqueda semántica sobre documentos corporativos multi-formato. Chunking adaptativo + re-ranking semántico + streaming SSE.',
            highlights: [
                '~40% menos consumo de tokens vs. retrieval naïve gracias a chunking adaptativo.',
                'Respuestas en streaming continuo (SSE) para latencia perceptual baja.',
                'Integración con Azure AI + HuggingFace + vector search.',
            ],
            image: 'search-ia.png',
            stack: ['NestJS', 'Azure AI', 'HuggingFace', 'Vector Search', 'RAG', 'TypeScript'],
        },
        {
            id: 'metrics',
            title: 'Dashboard de métricas organizacionales',
            description:
                'Panel interno para monitorear despliegues y telemetría de uso en una organización con múltiples productos. Vue 3 + Pinia consumiendo GraphQL, integrado con Azure DevOps + Application Insights.',
            highlights: [
                'Trazabilidad de incidentes y debugging proactivo en producción.',
                'Visualización unificada de métricas operativas y de uso.',
            ],
            image: 'azure.png',
            stack: ['Vue 3', 'TypeScript', 'NestJS', 'Pinia', 'GraphQL', 'PostgreSQL', 'Azure DevOps', 'Docker'],
        },
        {
            id: 'forms',
            title: 'Librería de formularios dinámicos',
            description:
                'Librería interna que renderiza formularios complejos desde un esquema declarativo. Validaciones cruzadas, flujos por pasos y lógica condicional sin reimplementar en cada producto.',
            highlights: [
                'Reduce el tiempo de desarrollo de formularios complejos de días a horas.',
                'Estandariza validaciones y UX entre múltiples productos.',
            ],
            image: 'yforms-lite.png',
            stack: ['Vue 3', 'TypeScript', 'Vite', 'Dynamic Forms'],
        },
        {
            id: 'postaenlinea',
            title: 'Postaenlinea',
            description:
                'Plataforma transaccional web + móvil para servicios postales. React + React Native + NestJS, integrada con Google Maps y Mailgun.',
            highlights: [
                'API REST con modelo PostgreSQL normalizado para operaciones transaccionales.',
                'Sincronización consistente entre cliente web, app móvil y backoffice.',
            ],
            image: 'postaenlinea.png',
            stack: ['NestJS', 'React', 'React Native', 'PostgreSQL', 'REST API', 'Mailgun', 'Google Maps'],
            demo: 'https://www.postadigital.com',
        },
    ],
    experience: [
        {
            id: 'turnia-exp',
            company: 'Turnia.app',
            url: 'https://turnia.app',
            image: 'turnia.png',
            position: 'Full Stack Engineer · Proyecto personal',
            date: 'Ene 2025 — Actualidad',
            summary: 'Sistema de gestión de turnos en tiempo real diseñado y construido end-to-end.',
            highlights: [
                'Diseñé el algoritmo de priorización dinámica de turnos con compensación matemática para evitar inanición.',
                'Implementé sincronización en tiempo real entre 4 actores (kiosko, asesor, TV, web) vía GraphQL Subscriptions.',
                'Modelé la máquina de estados del ciclo de vida del turno con 8+ transiciones, incluyendo reasignaciones multiservicio y no-shows.',
                'Resolví control de concurrencia y locking optimista para evitar superposición de sesiones de asesores.',
                'Construí generación atómica de tickets diarios bajo alta concurrencia transaccional.',
                'Implementé motor de auditoría asíncrono e inmutable para métricas de ciclo sin bloquear el flujo principal.',
            ],
        },
        {
            id: 'axonier-exp',
            company: 'Axonier',
            url: 'https://www.axonier.com',
            image: 'axonier.png',
            position: 'Backend Developer (Node.js)',
            date: 'Ago 2022 — Actualidad',
            summary: 'Backend en producción + motor de búsqueda con IA + infraestructura cloud.',
            highlights: [
                'Diseñé un motor RAG que indexa documentos multi-formato y reduce ~40% el consumo de tokens vs. retrieval naïve, con respuestas en streaming SSE.',
                'Construí una librería de formularios dinámicos que abstrae validaciones cruzadas y flujos por pasos en un esquema declarativo.',
                'Establecí pipelines CI/CD en Azure DevOps reduciendo errores manuales en deploys.',
                'Integré servicios cloud (gestión de archivos, autenticación, parametrización) bajo arquitectura modular.',
                'Optimicé queries y modelado relacional en PostgreSQL para volúmenes transaccionales altos.',
            ],
        },
        {
            id: 'sofre-exp',
            company: 'Sofre Digital',
            url: 'https://www.sofredigital.com.ar',
            image: 'sofre-digital.jpeg',
            position: 'Frontend Developer',
            date: 'Mar 2022 — Ago 2022',
            summary: 'Componentes UI reutilizables y apps de escritorio con Electron.',
            highlights: [
                'Desarrollé un sistema de componentes UI modulares para acelerar la entrega de features.',
                'Construí apps de escritorio multiplataforma integrando recursos del SO con web reactiva.',
            ],
        },
        {
            id: 'posta-exp',
            company: 'Postaenlinea',
            url: 'https://www.postaenlinea.com',
            image: 'posta.png',
            position: 'Full Stack Developer',
            date: 'Ago 2020 — Feb 2022',
            summary: 'Plataforma transaccional web + móvil con integraciones de terceros.',
            highlights: [
                'Construí soluciones web + móvil con consistencia bidireccional de datos entre cliente y backend.',
                'Integré APIs de terceros (Google Maps, Mailgun) en capas de comunicación desacopladas y resilientes.',
                'Modelé el esquema relacional de PostgreSQL del core de negocio aplicando normalización.',
            ],
        },
        {
            id: 'baires-exp',
            company: 'Baires Servicios',
            url: 'https://www.bairesservicios.net',
            image: 'bairesservicios.png',
            position: 'Full Stack Developer',
            date: 'Jun 2019 — Jul 2020',
            summary: 'Modernización de motores legacy de eCommerce y desarrollo de plugins.',
            highlights: [
                'Modernicé motores de eCommerce legacy adaptándolos a flujos transaccionales nuevos.',
                'Desarrollé plugins modulares para inyectar lógica de inventario, envíos y cobros en plataformas monolíticas.',
                'Resolví incidentes en ciclos ágiles cortos respondiendo a demandas variables del cliente.',
            ],
        },
        {
            id: 'pegasus-exp',
            company: 'Col Pegasus Software',
            url: 'https://web.colpegasus.com',
            image: 'colpegasussofw2.png',
            position: 'Full Stack Developer',
            date: 'Abr 2018 — Nov 2018',
            summary: 'Migración de CRMs Flash → web moderno + plataformas de soporte académico.',
            highlights: [
                'Lideré la migración de un CRM empresarial desde Flash a stack web moderno con cero pérdida de datos.',
                'Construí herramientas inyectables en navegador para reducir tiempos de respuesta de soporte.',
                'Optimicé plataformas de administración académica para alta carga durante calendarios escolares.',
                'Diseñé portales de autoservicio que descentralizaron incidencias del soporte humano.',
            ],
        },
        {
            id: 'ingelmec-exp',
            company: 'Ingelmec',
            url: 'https://ingelmec.com.co',
            image: 'ingelmeclogo.png',
            position: 'Frontend Developer',
            date: 'Dic 2017',
            summary: 'Primer rol en la industria. Implementación de componentes UI desde diseño.',
            highlights: [
                'Traduje diseños a componentes UI reactivos y responsive para múltiples resoluciones.',
            ],
        },
    ],
};

// ============================================================================
// ENGLISH CONTENT
// ============================================================================

const en: ContentShape = {
    labels: {
        about: { title: 'About me' },
        skills: {
            title: 'Tech stack',
            subtitle:
                'Levels based on real production usage. No inflation, no hiding: what I know, what I do well, and what I\'m still learning.',
            levels: {
                expert: 'Expert',
                proficient: 'Proficient',
                familiar: 'Learning',
            },
            categoryNames: {
                backend: 'Backend',
                frontend: 'Frontend',
                aiArch: 'AI & Architecture',
                cloudTools: 'Cloud & Tooling',
            },
        },
        projects: {
            title: 'Featured projects',
            subtitle:
                'Selected systems where the technical problem was the boss: concurrency, real-time events, semantic search, event-driven architecture.',
            demo: 'Demo',
            code: 'Code',
        },
        experience: {
            title: 'Experience',
            subtitle: '7 years building software. From frontend to specialized backend.',
        },
    },
    about: {
        title: 'I build serious backends for products that scale',
        paragraphs: [
            'I\'m Diego, a Full Stack engineer with 7 years in the industry and the last 4 focused on backend. Today I work on two fronts: I lead the design of a production RAG engine at Axonier, and in parallel I\'m building Turnia.app from scratch — a real-time queue management system with state machines, multi-actor event sync, and strict concurrency control.',
            'I naturally go deep on the scary stuff: idempotency, optimistic locking, semantic search, state machines with 8+ transitions. Then I translate that complexity into something the business can understand. I\'m not afraid of legacy code or distributed systems.',
            'Available for full-time remote roles at startups where code actually matters.',
        ],
        badges: [
            { label: 'Years of experience', value: '7+' },
            { label: 'Main stack', value: 'NestJS · PG · TS' },
            { label: 'Current focus', value: 'AI/RAG · Real-time' },
            { label: 'Availability', value: 'Remote · LATAM/USA/EU' },
        ],
    },
    skillCategories,
    projects: [
        {
            id: 'turnia',
            title: 'Turnia.app',
            description:
                'Real-time queue management system for businesses with in-person service. NestJS backend + GraphQL Subscriptions syncing 4 actors simultaneously (kiosk, advisor panel, public TV, web tracking) with no perceptual latency.',
            highlights: [
                'Turn lifecycle state machine with 8+ validated transitions (reassignments, no-shows, multi-service).',
                'Atomic daily ticket generation under high transactional concurrency.',
                'Dynamic priority algorithm with mathematical compensation to avoid waiting-time starvation.',
                'Async immutable audit engine for service metrics without blocking the main flow.',
            ],
            image: 'turnia.png',
            stack: ['NestJS', 'GraphQL', 'PostgreSQL', 'Redis', 'TypeScript', 'RabbitMQ', 'Docker'],
            demo: 'https://turnia.app',
            featured: true,
        },
        {
            id: 'rag',
            title: 'AI Search Engine (RAG)',
            description:
                'Production RAG engine at Axonier for semantic search over multi-format corporate documents. Adaptive chunking + semantic re-ranking + SSE streaming.',
            highlights: [
                '~40% lower token consumption vs. naïve retrieval thanks to adaptive chunking.',
                'Continuous streaming responses (SSE) for low perceptual latency.',
                'Integration with Azure AI + HuggingFace + vector search.',
            ],
            image: 'search-ia.png',
            stack: ['NestJS', 'Azure AI', 'HuggingFace', 'Vector Search', 'RAG', 'TypeScript'],
        },
        {
            id: 'metrics',
            title: 'Organizational metrics dashboard',
            description:
                'Internal panel for monitoring deployments and usage telemetry across multiple products. Vue 3 + Pinia consuming GraphQL, integrated with Azure DevOps + Application Insights.',
            highlights: [
                'Incident traceability and proactive debugging in production.',
                'Unified visualization of operational and usage metrics.',
            ],
            image: 'azure.png',
            stack: ['Vue 3', 'TypeScript', 'NestJS', 'Pinia', 'GraphQL', 'PostgreSQL', 'Azure DevOps', 'Docker'],
        },
        {
            id: 'forms',
            title: 'Dynamic forms library',
            description:
                'Internal library that renders complex forms from a declarative schema. Cross-field validations, multi-step flows, and conditional logic without re-implementing per product.',
            highlights: [
                'Cuts complex form development time from days to hours.',
                'Standardizes validations and UX across multiple products.',
            ],
            image: 'yforms-lite.png',
            stack: ['Vue 3', 'TypeScript', 'Vite', 'Dynamic Forms'],
        },
        {
            id: 'postaenlinea',
            title: 'Postaenlinea',
            description:
                'Transactional web + mobile platform for postal services. React + React Native + NestJS, integrated with Google Maps and Mailgun.',
            highlights: [
                'REST API with normalized PostgreSQL model for transactional operations.',
                'Consistent sync between web client, mobile app, and back-office.',
            ],
            image: 'postaenlinea.png',
            stack: ['NestJS', 'React', 'React Native', 'PostgreSQL', 'REST API', 'Mailgun', 'Google Maps'],
            demo: 'https://www.postadigital.com',
        },
    ],
    experience: [
        {
            id: 'turnia-exp',
            company: 'Turnia.app',
            url: 'https://turnia.app',
            image: 'turnia.png',
            position: 'Full Stack Engineer · Personal project',
            date: 'Jan 2025 — Present',
            summary: 'Real-time queue management system designed and built end-to-end.',
            highlights: [
                'Designed the dynamic turn priority algorithm with mathematical compensation to avoid starvation.',
                'Implemented real-time sync between 4 actors (kiosk, advisor, TV, web) via GraphQL Subscriptions.',
                'Modeled the turn lifecycle state machine with 8+ transitions, including multi-service reassignments and no-shows.',
                'Solved concurrency control and optimistic locking to prevent overlapping advisor sessions.',
                'Built atomic daily ticket generation under high transactional concurrency.',
                'Implemented async immutable audit engine for cycle metrics without blocking the main flow.',
            ],
        },
        {
            id: 'axonier-exp',
            company: 'Axonier',
            url: 'https://www.axonier.com',
            image: 'axonier.png',
            position: 'Backend Developer (Node.js)',
            date: 'Aug 2022 — Present',
            summary: 'Production backend + AI search engine + cloud infrastructure.',
            highlights: [
                'Designed a RAG engine that indexes multi-format documents and cuts token consumption by ~40% vs. naïve retrieval, with SSE streaming responses.',
                'Built a dynamic forms library that abstracts cross-field validations and step flows into a declarative schema.',
                'Established CI/CD pipelines on Azure DevOps reducing manual deploy errors.',
                'Integrated cloud services (file management, authentication, parameterization) under modular architecture.',
                'Optimized queries and relational modeling on PostgreSQL for high transactional volumes.',
            ],
        },
        {
            id: 'sofre-exp',
            company: 'Sofre Digital',
            url: 'https://www.sofredigital.com.ar',
            image: 'sofre-digital.jpeg',
            position: 'Frontend Developer',
            date: 'Mar 2022 — Aug 2022',
            summary: 'Reusable UI components and Electron desktop apps.',
            highlights: [
                'Developed a modular UI component system to accelerate feature delivery.',
                'Built cross-platform desktop apps integrating OS resources with reactive web.',
            ],
        },
        {
            id: 'posta-exp',
            company: 'Postaenlinea',
            url: 'https://www.postaenlinea.com',
            image: 'posta.png',
            position: 'Full Stack Developer',
            date: 'Aug 2020 — Feb 2022',
            summary: 'Transactional web + mobile platform with third-party integrations.',
            highlights: [
                'Built web + mobile solutions with bidirectional data consistency between client and backend.',
                'Integrated third-party APIs (Google Maps, Mailgun) in decoupled, resilient communication layers.',
                'Modeled the core PostgreSQL relational schema applying normalization.',
            ],
        },
        {
            id: 'baires-exp',
            company: 'Baires Servicios',
            url: 'https://www.bairesservicios.net',
            image: 'bairesservicios.png',
            position: 'Full Stack Developer',
            date: 'Jun 2019 — Jul 2020',
            summary: 'Legacy eCommerce engine modernization and plugin development.',
            highlights: [
                'Modernized legacy eCommerce engines adapting them to new transactional flows.',
                'Developed modular plugins to inject inventory, shipping, and payment logic into monolithic platforms.',
                'Resolved incidents in short agile cycles responding to variable client demands.',
            ],
        },
        {
            id: 'pegasus-exp',
            company: 'Col Pegasus Software',
            url: 'https://web.colpegasus.com',
            image: 'colpegasussofw2.png',
            position: 'Full Stack Developer',
            date: 'Apr 2018 — Nov 2018',
            summary: 'Flash → modern web CRM migration + academic support platforms.',
            highlights: [
                'Led the migration of an enterprise CRM from Flash to a modern web stack with zero data loss.',
                'Built browser-injectable tools to reduce support response times.',
                'Optimized academic admin platforms for high load during school calendars.',
                'Designed self-service portals that decentralized human support tickets.',
            ],
        },
        {
            id: 'ingelmec-exp',
            company: 'Ingelmec',
            url: 'https://ingelmec.com.co',
            image: 'ingelmeclogo.png',
            position: 'Frontend Developer',
            date: 'Dec 2017',
            summary: 'First role in the industry. UI component implementation from designs.',
            highlights: [
                'Translated designs into reactive, responsive UI components across multiple resolutions.',
            ],
        },
    ],
};

// ============================================================================
// PUBLIC API
// ============================================================================

export const content: Record<Locale, ContentShape> = { es, en };

export function getContent(locale: Locale): ContentShape {
    return content[locale];
}
