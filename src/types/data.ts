export interface IProject {
    id: number;
    title: string;
    description: string;
    img: any;
    link: string;
    stack: any[];
}

interface ISkillsOptions {
    img: any;
    description: string;
}

export interface ISkills {
    title: string;
    data: {
        icons: ISkillsOptions[]
    }
}

export interface IContacts {
    mail: string;
    telegram: string;
    linkedIn: string;
}