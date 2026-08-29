export interface SocialSchema {
    link: string,
    iconUrl: string
}

export interface IntroSchema {
    skills: {
        name: string,
        iconFile: string
    }[],
    tools: {
        name: string,
        iconFile: string,
    }[],
}

export interface JobSchema
 {
    iconFile: string,
    position: string,
    company: string,
    tenure: string,
    tags: string[],
    desc: string
}

export interface ProjectsSchema {
    chip?: 'New!' | 'Updated!' | 'WIP!',
    title: string,
    desc: string,
    type: 'front-end' | 'back-end' | 'full-stack' | 'data-analysis',
    img: string,
    link: string
}