import { motion } from 'framer-motion';
import { skills } from '../../mock/skills';
import { MSkillsCard } from '../SkillsCard/SkillsCard';
import { BigSpaceship } from '../BigSpaceship/BigSpaceship';
import styles from './Skills.module.scss';

export const Skills: React.FC = () => {
    const textAnimation = {
        hidden: {
            x: 0,
            opacity: 0,
        },
        visible: (custom: number) => ({
            x: 0,
            opacity: 1,
            transition: { 
                delay: custom * 0.2 
            }
        })
    }

    return (
        <motion.section 
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.2, once: true }}
            className={styles.section}
        >
            <motion.h2 variants={textAnimation} className={styles.title}>Мои навыки</motion.h2>

            <div className={styles.skills__wrapper}>
                {skills.map((item, index) => (
                    <MSkillsCard
                        key={index} 
                        custom={index}
                        variants={textAnimation}
                        {...item} 
                    />
                ))}
            </div>

            <div className={styles.bg__spaceship}>
                <BigSpaceship />
            </div>
        </motion.section>
    )
}