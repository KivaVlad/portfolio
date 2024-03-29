import { cssIcon, htmlIcon, jsIcon, reactIcon, reduxIcon, sassIcon, tsIcon, gitIcon } from "../assets/icons/icons";
import type { ISkills } from "../types/data";

export const skills: ISkills[] = [
    {
        title: 'Базовые',
        data: {
            icons: [
                { img: htmlIcon, description: 'HTML' },
                { img: cssIcon, description: 'CSS' },
                { img: jsIcon, description: 'JavaScript' },
                { img: gitIcon, description: 'Git' },
            ]
        }
    }, 
    {
        title: 'Разработка',
        data: {
            icons: [
                { img: reactIcon, description: 'React' },
                { img: reduxIcon, description: 'Redux' },
                { img: tsIcon, description: 'TypeScript' },
                { img: sassIcon, description: 'Sass' },
            ]
        }
    },
]