import Typewriter from 'typewriter-effect';
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
            <motion.h2 variants={textAnimation} className={styles.title}>Мои навыки</motion.h2>

            <div className={styles.content}>
                <div className={styles.skills__wrapper}>
                    {skills.map((item, index) => (
                        <MSkillsCard 
                            custom={index} 
                            variants={textAnimation} 
                            key={index} 
                            {...item} 
                        />
                    ))}
                </div>

                <motion.div custom={3} variants={textAnimation} className={styles.typewriter__wrapper}>
                    <Typewriter
                        options={{
                            strings: ['Мои навыки: HTML, CSS, SASS, JavaScript, TypeScript, React, Redux. <br/><br/>  Владею хорошими навыками верстки и оптимизации кода. Умею создавать адаптивные и кросс-браузерные сайты. <br/><br/> Умею взаимодействовать с серверной частью с помощью REST API'],
                            autoStart: true,
                            loop: true,
                            delay: 50,
                        }}
                    />
                </motion.div>
            </div>

        </motion.section>
    )
}