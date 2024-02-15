import { motion } from 'framer-motion';
import { projects } from '../../mock/projects';
import styles from './Portfolio.module.scss';
import { MProjectCard } from '../ProjectCard/ProjectCard';

export const Portfolio: React.FC = () => {
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
            <motion.h2 variants={textAnimation} className={styles.title}>Мои работы</motion.h2>
            <motion.p variants={textAnimation} className={styles.subtitle}>
                Здесь вы можете посмотреть примеры моих работ. <br />
                Больше проектов в моем <a href="https://github.com/KivaVlad/" target='_blank' rel="noreferrer">GitHub</a>
            </motion.p>
        
            <div className={styles.slider__wrapper}>
                {projects.map((item) => (
                    <MProjectCard 
                        custom={item.id} 
                        variants={textAnimation} 
                        key={item.id} 
                        {...item} 
                    /> 
                ))}
            </div>
        </motion.section>
    )
}