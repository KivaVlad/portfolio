import { motion } from 'framer-motion';
import { skills } from '../../mock/skills';
import { MSkillsCard } from '../SkillsCard/SkillsCard';
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
            <div className={styles.text__wrapper}>
                <motion.h2 custom={1} variants={textAnimation}>Мои навыки</motion.h2>
                <motion.p custom={2} variants={textAnimation}>
                    При создании веб-приложений у меня есть различные инструменты, которые я могу выбирать в зависимости от 
                    потребностей конкретного проекта. Я постоянно обновляю свои знания и всегда ищу лучшие решения.
                </motion.p>
            </div>

            <div className={styles.skills__wrapper}>
                {skills.map((item, index) => (
                    <MSkillsCard
                        key={index} 
                        custom={index + 1}
                        variants={textAnimation}
                        {...item} 
                    />
                ))}
            </div>
        </motion.section>
    )
}