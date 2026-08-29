export interface IntroProps {
    desc: string,
    skills: string[],  
}



interface PortfolioSchema {
    hero: HeroProps,
    intro: IntroProps,
    projects: ProjectProps[],
}

const data = {
    hero: {
        name: 'Brendan L.',
        flavorText: 'Based In Portland Oregon',
        text: 'I create intuitive web designs that help stand out and connect with users.',
        socials: [
            'https://www.linkedin.com/in/brendanslewis/',
            'https://github.com/BrendonianSL'
        ]
    },
    intro: {
        skills: [
            {
                skill: 'Web Development',
            }
        ]
    }
} as PortfolioData;

export default data;