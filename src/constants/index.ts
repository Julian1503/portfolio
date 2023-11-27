import {
    css,
    docker,
    git,
    html, java,
    javascript,
    maven, mdevz,
    net,
    nodejs,
    postgresql,
    reactjs, sovos, spring,
    tailwind,
    typescript
} from "../assets";

export const navLinks = [
    {
        id: 'about',
        title: 'About',
    },
    {
        id: 'projects',
        title: 'Projects',
    },
    {
        id: 'contact',
        title: 'Contact',
    },
];

export const technologies = [
    {
        name: 'HTML 5',
        icon: html,
    },
    {
        name: 'CSS 3',
        icon: css,
    },
    {
        name: 'JavaScript',
        icon: javascript,
    },
    {
        name: 'TypeScript',
        icon: typescript,
    },
    {
        name: 'React JS',
        icon: reactjs,
    },
    {
        name: 'Tailwind CSS',
        icon: tailwind,
    },
    {
        name: 'Node JS',
        icon: nodejs,
    },
    {
        name: 'postgresql',
        icon: postgresql,
    },
    {
        name: 'git',
        icon: git,
    },
    {
        name: 'docker',
        icon: docker,
    },
    {
        name: 'java',
        icon: java,
    },
    {
        name: 'net',
        icon: net,
    },
    {
        name: 'maven',
        icon: maven,
    },
    {
        name:'spring',
        icon: spring
    }

];

export const projects = [
    {
        id: 'project-1',
        name: 'KomiKult',
        description: 'A comic characters list app that displays Marvel characters.',
        tags: [
            {
                name: 'react',
                color: 'blue-text-gradient',
            },
            {
                name: 'mongodb',
                color: 'green-text-gradient',
            },
            {
                name: 'tailwind',
                color: 'pink-text-gradient',
            },
        ],
        image: 'https://i.imgur.com/5XZQq8O.png',
        repo: 'https://github.com/shaqdeff/KomiKult',
        demo: 'https://shaqdeff.github.io/KomiKult/',
    },
    {
        id: 'project-2',
        name: 'KomiKult',
        description: 'A comic characters list app that displays Marvel characters.',
        tags: [
            {
                name: 'react',
                color: 'blue-text-gradient',
            },
            {
                name: 'mongodb',
                color: 'green-text-gradient',
            },
            {
                name: 'tailwind',
                color: 'pink-text-gradient',
            },
        ],
        image: 'https://i.imgur.com/5XZQq8O.png',
        repo: 'https://github.com/shaqdeff/KomiKult',
        demo: 'https://shaqdeff.github.io/KomiKult/',
    },
    {
        id: 'project-3',
        name: 'KomiKult',
        description: 'A comic characters list app that displays Marvel characters.',
        tags: [
            {
                name: 'react',
                color: 'blue-text-gradient',
            },
            {
                name: 'mongodb',
                color: 'green-text-gradient',
            },
            {
                name: 'tailwind',
                color: 'pink-text-gradient',
            },
        ],
        image: 'https://i.imgur.com/5XZQq8O.png',
        repo: 'https://github.com/shaqdeff/KomiKult',
        demo: 'https://shaqdeff.github.io/KomiKult/',
    }
];

export const experiences = [
    {
        title: 'Software Engineer III',
        company_name: 'Sovos',
        icon: sovos,
        iconBg: '#333333',
        date: 'Apr 2023 - Present',
        link: 'https://www.sovos.com/',
    },
    {
        title: 'Software Engineer II',
        company_name: 'Sovos',
        icon: sovos,
        iconBg: '#333333',
        date: 'Mar 2022 - Apr 2023',
        link: 'https://www.sovos.com/',
    },
    {
        title: 'Software Engineer I',
        company_name: 'Sovos',
        icon: sovos,
        iconBg: '#333333',
        date: 'May 2021 - Mar 2022',
        link: 'https://www.sovos.com/',
    },
    {
        title: 'Software Developer',
        company_name: 'mDEVZ',
        icon: mdevz,
        iconBg: '#333333',
        date: 'Oct 2020 - May 2021',
        link: 'https://mdevz.com/',
    }
];