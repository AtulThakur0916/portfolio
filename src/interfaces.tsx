//about

export interface About {
    id: number;
    title: string;
    description: string;
    imgUrl: string;
}

//navigation-dots
export interface ActiveProp {
    active: string;
}

// work

export interface PortfolioProject {
    id: number;
    title: string;
    description: string;
    repositoryUrl: string;
    imageUrl: string;
    techStack: string;
    tag: string[];
}

export interface AnimatedCard {
    y: number;
    opacity: number;
}

//skills

export interface Skill {
    id: number;
    name: string;
    imageUrl: string;
    backgroundColor: string;
}

export interface Experience {
    id: number;
    name: string;
    company: string;
    achievements: string[];
    period: string;
    url: string;
    techStack: string;
}
