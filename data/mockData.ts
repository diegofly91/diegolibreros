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
        role: 'Full Stack Developer (Proyecto Personal)',
        company: 'Turnia.app',
        period: 'Ene 2025 - Actualidad',
        description: 'Desarrollo integral de plataforma de gestión de colas y atención empresarial en tiempo real.',
        achievements: [
            'Diseño de un algoritmo de colas dinámicas que prioriza turnos en tiempo real, mitigando tiempos de espera prolongados mediante compensación matemática y gestionando múltiples prioridades de atención.',
            'Sincronización simultánea de eventos para distintos actores (kioskos, paneles de asesores, pantallas públicas y seguimiento web asíncrono), asegurando actualizaciones de estado sin latencia.',
            'Orquestación de la máquina de estados del ciclo de vida del turno, controlando de manera consistente transiciones complejas como reasignaciones multiservicio y ausencias (no-shows).',
            'Resolución de problemas de concurrencia y control de recursos físicos, implementando restricciones estrictas para prevenir superposiciones en las sesiones de trabajo de los asesores.',
            'Desarrollo de un sistema atómico para la generación de tickets, garantizando la emisión eficiente de códigos únicos diarios incluso en escenarios de alta concurrencia transaccional.',
            'Implementación de un motor de auditoría asíncrona e inmutable para trazar tiempos de ciclo y métricas de servicio, aportando analítica de negocio predictiva sin interrumpir el flujo transaccional.'
        ],
    },
    {
        role: 'Backend Developer (Node.js)',
        company: 'Axonier',
        period: 'Ago 2022 - Actualidad',
        description: 'Desarrollo de soluciones escalables, motores de búsqueda inteligente (RAG) e infraestructura cloud.',
        achievements: [
            'Arquitectura de soluciones escalables para backend, aplicando principios de diseño modular que facilitan el mantenimiento y crecimiento a largo plazo del código base.',
            'Diseño de un motor de búsqueda inteligente (RAG) capaz de procesar e indexar múltiples formatos de documentos, optimizando el consumo de tokens en un 40% y entregando respuestas en tiempo real mediante flujos de streaming continuo (SSE).',
            'Creación de una librería de renderizado dinámico de formularios web que abstrae la complejidad de validaciones cruzadas, flujos por pasos y lógicas condicionales, permitiendo construir interfaces complejas desde configuraciones declarativas.',
            'Implementación de estrategias de integración y entrega continua (CI/CD) para automatizar el ciclo de vida de los despliegues, reduciendo errores manuales y mejorando la confiabilidad.',
            'Orquestación e integración de servicios corporativos cloud para soportar la infraestructura tecnológica subyacente (gestión de archivos, autenticación de sistemas y recursos parametrizados).',
            'Optimización de rendimiento en capas de persistencia, estructurando ecosistemas relacionales capaces de organizar y disponibilizar grandes volúmenes de datos transaccionales rápidos.'
        ],
    },
    {
        role: 'Frontend Developer',
        company: 'Sofre Digital',
        period: 'Mar 2022 - Ago 2022',
        description: 'Implementación de ecosistemas visuales y soporte para soluciones multiplataforma.',
        achievements: [
            'Desarrollo de ecosistemas de componentes de interfaz modulares y altamente reutilizables, garantizando la consistencia visual y acelerando la creación de nuevas funcionalidades a gran escala.',
            'Construcción de aplicaciones multiplataforma de escritorio, resolviendo desafíos de integración entre los recursos locales del sistema operativo y ventanas web reactivas.'
        ],
    },
    {
        role: 'Full Stack Developer',
        company: 'Postaenlinea',
        period: 'Ago 2020 - Feb 2022',
        description: 'Construcción y orquestación de soluciones transaccionales con ecosistemas web y móviles acoplados.',
        achievements: [
            'Construcción de soluciones integrales web y móviles, garantizando la fluidez y consistencia de datos bi-direccionales entre aplicaciones del usuario final y servicios transaccionales.',
            'Orquestación de pasarelas y wrappers de comunicación hacia terceros, abstrayendo integraciones complejas (geolocalización, mensajería) en capas de red resilientes y desacopladas.',
            'Modelado de topologías en base de datos bajo normalización eficiente para mitigar redundancias y agilizar la recuperación y mutación del Core de la información del negocio.'
        ],
    },
    {
        role: 'Full Stack Developer',
        company: 'Baires Servicios',
        period: 'Jun 2019 - Jul 2020',
        description: 'Modernización ágil de motores legados de comercio electrónico orientados a alta demanda.',
        achievements: [
            'Modernización y adaptación de motores de comercio electrónico legados hacia nuevos requerimientos comerciales y flujos transaccionales altamente dinámicos.',
            'Resolución arquitectónica mediante la creación de plugins modulares, inyectando flujos de lógica de inventarios, envíos o cobros directamente a plataformas monolíticas.',
            'Mitigación proactiva y cíclica de incidentes bajo marcos iterativos ágiles, absorbiendo con velocidad de pivotaje las variables demandas exigidas por los clientes finales de eCommerce.'
        ],
    },
    {
        role: 'Full Stack Developer',
        company: 'Col Pegasus Software',
        period: 'Abr 2018 - Nov 2018',
        description: 'Descentralización de operaciones de soporte y migración crítica de repositorios y software corporativo.',
        achievements: [
            'Planificación y migración efectiva del flujo de valor medular de CRM empresariales desde ecosistemas obsoletos (Flash) a motores web modernos, asegurando alta resiliencia y cero-pérdida de datos.',
            'Investigación de herramientas transversales, diseñadas internamente para inyectarse de forma automatizada en el navegador y mitigar tiempos muertos de respuesta para soporte y gestión escolar masiva.',
            'Escalamiento y optimización de plataformas de administración académica con bases de interoperación híbridas para aguantar altas trazas de peticiones en calendarios escolares y reportes de base de datos asíncronos.',
            'Diversificación del volumen de incidencias con plataformas autónomas (portales de conocimiento y autoservicio), descentralizando exitosamente el soporte dependiente hacia guías escalables.'
        ],
    },
    {
        role: 'Frontend Developer',
        company: 'Ingelmec',
        period: 'Dic 2017',
        description: 'Traducción de marcos de referencia técnicos y gráficos a interfaces web interactivas.',
        achievements: [
            'Traducción de marcos de referencia y requerimientos estéticos visuales absolutos en componentes reactivos de UI interactivas, salvaguardando la responsividad y la usabilidad original del cliente en diferentes ecosistemas resolutivos.'
        ],
    },
];

export const projects = [
    {
        title: 'Turnia.app',
        description: 'Plataforma empresarial para la gestión integral de colas mediante un robusto algoritmo dinámico en tiempo real. Orquesta el ciclo de vida del turno bajo estricto control de concurrencia, sincronizando actores simultáneos (TVs, kioskos y paneles de asesor) sin latencia y trazando métricas predictivas asíncronamente.',
        image: 'turnia.png',
        stack: ['NestJS', 'GraphQL', 'PostgreSQL', 'Redis', 'TypeScript', 'RabbitMQ', 'Docker'],
        demo: 'https://turnia.app',
        github: '#',
        featured: true,
    },
    {
        title: 'Buscador con IA',
        description: 'Motor RAG (Retrieval-Augmented Generation) avanzado diseñado para indexar y procesar flujos masivos de documentos. Resuelve el elevado consumo de modelos generativos optimizando el gasto de tokens (~40%) y garantizando respuestas inteligentes y de baja latencia mediante flujos de streaming continuo.',
        image: 'search-ia.png',
        stack: ['NestJS', 'Azure AI', 'Agent IA', 'HuggingFace', 'Vector Search', 'RAG', 'TOON', 'TypeScript'],
        github: '#',
        featured: false,
    },
    {
        title: 'Metricas Organizacion',
        description: 'Panel analítico centralizado para el monitoreo y trazabilidad en tiempo real de despliegues y salud de ecosistemas de software. Empodera a la organización mitigando puntos ciegos mediante el rastreo de incidencias, telemetría de uso y análisis predictivo del impacto en los usuarios finales.',
        image: 'azure.png',
        stack: ['Vue 3', 'TypeScript', 'NestJS', 'Pinia', 'GraphQL', 'PostgreSQL', 'Azure DevOps', 'CI/CD', 'Docker', 'Azure Insights'],
        github: '#',
        featured: false,
    },
    {
        title: 'Libreria de formularios',
        description: 'Herramienta transversal que resuelve la fricción y repetitividad en la creación de interfaces de recolección de datos complejas. Abstrae la lógica de validaciones de negocio e interfaces dinámicas en un esquema declarativo que acelera drásticamente el desarrollo y estandariza la seguridad en múltiples productos simultáneos.',
        image: 'yforms-lite.png',
        stack: ['Vue 3', 'TypeScript', 'Vite', 'Dynamic Forms', 'UI Library'],
        github: '#',
        featured: false,
    },
    {
        title: 'Postaenlinea',
        description: 'Sistema integral transaccional que amalgama aplicaciones web y móviles para la gestión del flujo del usuario físico. Orquesta exitosamente dependencias de terceros críticas (mapas y mensajería) garantizando escalabilidad y concurrencia sin desincronización de registros de datos e interfaces.',
        image: 'postaenlinea.png',
        stack: ['NestJS', 'React', 'React Native', 'PostgreSQL', 'REST API', 'Mailgun', 'Google Maps'],
        demo: 'https://www.postadigital.com',
        github: '#',
        featured: false,
    },
];
