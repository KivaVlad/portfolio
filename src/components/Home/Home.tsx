import { motion } from 'framer-motion';
import styles from './Home.module.scss';

export const Home: React.FC = () => {
    const textAnimation = {
        hidden: {
            x: -100,
            opacity: 0,
        },
        visible: (custom: number) => ({
            x: 0,
            opacity: 1,
            transition: { 
                delay: custom * 0.5 
            }
        })
    }

    const divAnimation = {
        hidden: {
            y: -100,
            opacity: 0,
        },
        visible: (custom: number) => ({
            y: 0,
            opacity: 1,
            transition: { 
                delay: custom * 0.5 
            }
        })
    }

    return (
        <motion.section 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className={styles.section}
        >
            <motion.div custom={5} variants={divAnimation} className={styles.resume__wrapper}>
                <span>Резюме</span>
            </motion.div>

            <div className={styles.text__wrapper}>
                <motion.h1 custom={1} variants={textAnimation} className={styles.title}>Привет!</motion.h1>
                <motion.h1 custom={2} variants={textAnimation} className={styles.title}>Меня зовут <span>Владислав</span></motion.h1>
                <motion.h1 custom={3} variants={textAnimation} className={styles.title}>Я <span>Frontend разработчик</span></motion.h1>
            </div>
        </motion.section>
    )
}