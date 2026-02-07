export const skills = [
    // Frontend
    { name: 'React', category: 'Frontend', icon: '⚛️' },
    { name: 'Next.js', category: 'Frontend', icon: '▲' },
    { name: 'Vue 3', category: 'Frontend', icon: '🟢' },
    { name: 'TypeScript', category: 'Frontend', icon: 'TS' },
    { name: 'Material UI', category: 'Frontend', icon: '🎨' },
    { name: 'React Native', category: 'Frontend', icon: '📱' },
    { name: 'Electron.js', category: 'Frontend', icon: '⚛️' },

    // Backend
    { name: 'Node.js', category: 'Backend', icon: '🟢' },
    { name: 'NestJS', category: 'Backend', icon: '🐈' },
    { name: 'PostgreSQL', category: 'Backend', icon: '🐘' },
    { name: 'GraphQL', category: 'Backend', icon: '🕸️' },
    { name: 'Redis', category: 'Backend', icon: '🔴' },
    { name: 'RabbitMQ', category: 'Backend', icon: '🐰' },
    { name: 'SQL Server', category: 'Backend', icon: '🛢️' },
    { name: 'Go (Golang)', category: 'Backend', icon: '🐹' },

    // Architecture & AI
    { name: 'Microservices', category: 'AI & Arch', icon: '🏗️' },
    { name: 'RAG Architecture', category: 'AI & Arch', icon: '🧠' },
    { name: 'Vector Search', category: 'AI & Arch', icon: '🔍' },
    { name: 'Azure AI', category: 'AI & Arch', icon: '🤖' },
    { name: 'System Design', category: 'AI & Arch', icon: '✏️' },

    // Cloud & Tools
    { name: 'Azure', category: 'Cloud & Tools', icon: '☁️' },
    { name: 'AWS', category: 'Cloud & Tools', icon: '☁️' },
    { name: 'Linux Servers', category: 'Cloud & Tools', icon: '🐧' },
    { name: 'Docker', category: 'Cloud & Tools', icon: '🐳' },
    { name: 'Git', category: 'Cloud & Tools', icon: '🐙' },
    { name: 'Azure DevOps', category: 'Cloud & Tools', icon: '🚀' },
    { name: 'CI/CD', category: 'Cloud & Tools', icon: '🔄' },
];

export const experience = [
    {
        role: 'Senior Full Stack Developer',
        company: 'Tech Solutions Inc.',
        period: '2023 - Presente',
        description: 'Liderando el desarrollo de arquitecturas escalables y microservicios con NestJS y Next.js.',
        achievements: [
            'Reduje el tiempo de carga del dashboard principal en un 40%.',
            'Implementé CI/CD pipelines automatizados.',
        ],
    },
    {
        role: 'Frontend Developer',
        company: 'Innovative Startups',
        period: '2020 - 2023',
        description: 'Desarrollo de interfaces reactivas y modernas utilizando React y Redux.',
        achievements: [
            'Migración de legacy code a React Hooks.',
            'Diseño de sistema de componentes reutilizables.',
        ],
    },
];

export const projects = [
    {
        title: 'Turnia.app',
        description: 'Sistema empresarial de gestión de turnos en tiempo real con arquitectura de microservicios. Implementa GraphQL Subscriptions para actualizaciones en vivo, gestión de sesiones con JWT + Redis, RBAC granular, y PostgreSQL database-per-service. Arquitectura híbrida con TCP sincrónico y RabbitMQ para mensajería asíncrona.',
        image: 'turnia.png',
        stack: ['NestJS', 'GraphQL', 'PostgreSQL', 'Redis', 'TypeScript', 'RabbitMQ', 'Docker'],
        demo: 'https://turnia.app',
        github: '#',
        featured: true,
    },
    {
        title: 'Postaenlinea',
        description: 'Plataforma completa de gestión de turnos y atención al cliente para empresas. Desarrollo Full Stack con API REST en NestJS, integración con APIs de terceros (Mailgun, Google Maps), diseño de base de datos relacional optimizada, y aplicaciones web/móvil en React y React Native con experiencia de usuario fluida.',
        image: 'postaenlinea.png',
        stack: ['NestJS', 'React', 'React Native', 'PostgreSQL', 'REST API', 'Mailgun', 'Google Maps'],
        demo: 'https://www.postadigital.com',
        github: '#',
        featured: false,
    },
    {
        title: 'Y-Lite Search IA',
        description: 'Módulo de búsqueda inteligente con arquitectura RAG (Retrieval-Augmented Generation). Implementa búsqueda híbrida combinando full-text y embeddings vectoriales (384 dimensiones), formato TOON para optimización de tokens (~40% reducción), y análisis de archivos con IA. Integración con Azure Cognitive Search y múltiples proveedores de LLM.',
        image: 'search-ia.png',
        stack: ['NestJS', 'Azure AI', 'HuggingFace', 'Vector Search', 'RAG', 'TOON', 'TypeScript'],
        github: '#',
        featured: false,
    },
    {
        title: 'Y-Forms Lite',
        description: 'Librería en Vue 3 + TypeScript que genera formularios dinámicos a partir de etiquetas HTML personalizadas (ej: <y-text>, <y-select>, <y-file>). Permite configurar validaciones, máscaras, campos condicionales, pasos (wizard), recaptcha y listas dinámicas, replicando automáticamente la configuración en la UI.',
        image: 'yforms-lite.png',
        stack: ['Vue 3', 'TypeScript', 'Vite', 'Dynamic Forms', 'UI Library'],
        github: '#',
        featured: false,
    },
];
