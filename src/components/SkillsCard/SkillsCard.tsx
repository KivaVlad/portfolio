import { forwardRef } from 'react';
import { motion } from 'framer-motion';
import type { ISkills } from '../../types/data';
import styles from './SkillsCard.module.scss';

const SkillsCard: React.FC<ISkills> = forwardRef((props, ref: any) => {
    const { title, data } = props;

    return (
        <div ref={ref} className={styles.container}>
            <div className={styles.icons__wrapper}>
                {data.icons.map((item, index) => (
                    <div key={index} className={styles.icon__box}>
                        <img src={item.img} alt='' />
                        <span>{item.description}</span>
                    </div>
                ))}
            </div>

            <h2 className={styles.title}>{title}</h2>
        </div>
    )
})

export const MSkillsCard = motion(SkillsCard);