import { ProjectsSchema } from './schemas';

const projectData : ProjectsSchema[] = [
    {
        title: 'Kinetic',
        desc: 'Full stack application for marathon.',
        link: 'https://github.com/BrendonianSL/NuTauloric',
        type: 'full-stack',
        img: 'nutauloric.svg',
    },
    {
        title: 'Trace',
        desc: 'Full stack application built to save your favorite places.',
        link: 'https://github.com/BrendonianSL/Threadway',
        type: 'full-stack',
        img: 'threadway.svg',
    },
    {
        title: 'Breaddit',
        desc: 'Front end app interfacing with Reddit API.',
        link: 'https://breadditmini.netlify.app',
        type: 'front-end',
        img: 'breaddit.svg',
    },
    {
        title: 'Breadbox',
        desc: 'Full stack blogging application.',
        link: 'https://github.com/BrendonianSL/BreadBox',
        type: 'full-stack',
        img: 'breadbox.svg',
    },
    {
        title: 'Reverb',
        desc: 'A front end application built using Spotify API',
        link: 'https://github.com/BrendonianSL/Jammin-React-Application',
        type: 'front-end',
        img: 'jammin.svg'
    },
    {
        title: 'VCT Toronto Analysis',
        desc: 'Data analysis of VCT Masters Toronto 2025',
        link: 'https://github.com/BrendonianSL/VCToronto_Analytics',
        type: 'data-analysis',
        img: 'vct.svg',
    }
];

export default projectData;