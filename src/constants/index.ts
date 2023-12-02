import {
    docker,
    git, java,
    javascript,
    maven, mdevz,
    net,
    nodejs, oracle, plan111,
    postgresql,
    reactjs, sovos, spring, sqlserver,
    tailwind,
    typescript, utn
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
        id: 'experience',
        title: 'Experience',
    },
    {
        id: 'education',
        title: 'Education',
    },
    {
        id: 'contact',
        title: 'Contact',
    },
];

export const technologies = [
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
    },
    {
        name: 'oracle',
        icon: oracle,
    },
    {
        name: 'sqlserver',
        icon: sqlserver,
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
];

export const projects = [
    {
        id: 'project-1',
        name: 'GYMNASIUM',
        description: 'A portal to note down your daily workout routine.',
        tags: [
            {
                name: 'React.js',
                color: 'blue-500 hover:bg-blue-700',
            },
            {
                name: 'Redux',
                color: 'purple-500 hover:bg-purple-700',
            },
            {
                name: 'Postgresql',
                color: 'green-500 hover:bg-green-700',
            },
            {
                name: 'MUI',
                color: 'pink-500 hover:bg-pink-700',
            },
            {
                name: 'JAVA',
                color: 'red-500 hover:bg-red-700',
            },
            {
                name: 'Springboot',
                color: 'blue-500 hover:bg-blue-700',
            },
        ],
        image: 'https://i.imgur.com/Zc0AjCO.png',
        repo: ['https://github.com/Julian1503/gym-app', 'https://github.com/Julian1503/gym-app-backend'],
        demo: 'https://gymansiumapp.netlify.app',
    },
    {
        id: 'project-2',
        name: 'XCommerce',
        description: 'A Windows Form application to manage a store or a bar.',
        tags: [
            {
                name: 'Windows Form',
                color: 'blue-500 hover:bg-blue-700',
            },
            {
                name: 'C#',
                color: 'purple-500 hover:bg-purple-700',
            },
            {
                name: 'Microsoft SQL Server',
                color: 'green-500 hover:bg-green-700',
            },
            {
                name: '.NET Framework',
                color: 'red-500 hover:bg-red-700',
            },
            {
                name: 'Entity Framework',
                color: 'pink-500 hover:bg-pink-700',
            }
        ],
        image: 'https://i.imgur.com/2sr5iaj.png',
        repo: ['https://github.com/Julian1503/Proyect-XCommerce'],
    },
    {
        id: 'project-3',
        name: 'Construction Manager',
        description: 'An application to manage a construction company.',
        tags: [
            {
                name: 'WPF',
                color: 'blue-500 hover:bg-blue-700',
            },
            {
                name: 'C#',
                color: 'purple-500 hover:bg-purple-700',
            },
            {
                name: 'Microsoft SQL Server',
                color: 'green-500 hover:bg-green-700',
            },
            {
                name: '.NET Framework',
                color: 'red-500 hover:bg-red-700',
            },
            {
                name: 'Entity Framework',
                color: 'pink-500 hover:bg-pink-700',
            }
        ],
        image: 'https://i.imgur.com/7wGJoI8.jpg',
        repo: ['https://github.com/Julian1503/Project-ConstructionManagement-APIREST', 'https://github.com/Julian1503/Project-ConstructionManagement-WPF'],
    },
    {
        id: 'project-4',
        name: 'MeetUp',
        description: 'An APP to manage events.',
        tags: [
            {
                name: 'Xamarin.Forms',
                color: 'blue-500 hover:bg-blue-700',
            },
            {
                name: 'C#',
                color: 'purple-500 hover:bg-purple-700',
            },
            {
                name: 'Microsoft SQL Server',
                color: 'green-500 hover:bg-green-700',
            },
            {
                name: '.NET Framework',
                color: 'red-500 hover:bg-red-700',
            },
            {
                name: 'Entity Framework',
                color: 'pink-500 hover:bg-pink-700',
            },
        ],
        image: 'https://i.imgur.com/TDkMm7n.png',
        repo: ['https://github.com/Julian1503/Xamarin.Forms-Event-Project-with-local-API']
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

export const educations = [
    {
        title: 'University Programming',
        company_name: 'National Technology University',
        icon: utn,
        iconBg: '#333333',
        date: 'Apr 2018 - Oct 2023',
    },
    {
        title: 'Knowledge Analyst',
        company_name: 'Ministry of Production of Argentina',
        icon: plan111,
        iconBg: '#333333',
        date: 'Mar 2017 - Apr 2018',
    }
];