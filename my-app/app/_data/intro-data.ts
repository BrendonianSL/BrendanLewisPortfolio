import { IntroSchema } from "./schemas";

const introData : IntroSchema = {
    skills: [{
        name: 'Web Development',
        iconFile: 'web.svg',
    },
    {
        name: 'UI/UX Design',
        iconFile: 'laptop.svg',
    },
    {
        name: 'Game Development',
        iconFile: 'game.svg',
    }
],
    tools: [{
            name: 'Cursor',
            iconFile: 'cursor.svg',
        },
        {
            name: 'Linear',
            iconFile: 'linear.svg',
        },
        {
            name: 'Figma',
            iconFile: 'figma.svg',
        },
        {
            name: 'Claude',
            iconFile: 'claude.svg',
        },
        {
            name: 'React',
            iconFile: 'react.svg',
        },
        {
            name: 'TypeScript',
            iconFile: 'typescript.svg',
        },
        {
            name: 'Hono',
            iconFile: 'hono.svg',
        },
        {
            name: 'Tailwind',
            iconFile: 'tailwind.svg'
        },
    ]
}

export default introData;

