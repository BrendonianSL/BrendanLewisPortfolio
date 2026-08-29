import { JobSchema } from "./schemas"

const jobExperience = [
{
    company: 'Portland Trail Blazers',
    position: 'Junior Front End Web Developer',
    desc: 'Designed, developed, and maintained web experiences and internal services used by the organization. Contributed to UI/UX design and development across multiple projects.',
    tags: ['front-end', 'ui-ux design'],
    tenure: '2025-Current',
    iconFile: 'Soon'
},
{
    company: 'NY Auto Museum',
    position: 'Volunteer Web Developer',
    desc: 'Collaborated with developers to maintain and improve the museum\'s website. Contributed to front-end development and ongoing site updates.',
    tags: ['front-end'],
    tenure: '2024',
    iconFile: 'Soon',
},
{
    position: 'Freelance Game Developer',
    company: 'Benjamin Harrison Presidential Site',
    tenure: '2022-2023',
    tags: ['game-development'],
    desc: 'Contributed to the development and design of an interactive video game for museum visitors. Helped continuously improve the experience throughout development.',
    iconFile: 'Soon'
}
] satisfies JobSchema[]

export default jobExperience;