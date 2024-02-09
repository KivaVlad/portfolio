import { motion } from 'framer-motion';
import styles from './About.module.scss';
import skillsImg from '../../assets/images/about.png';

export const About: React.FC = () => {
    const textAnimation = {
        hidden: {
            x: 0,
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

    return (
        <motion.section 
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.2, once: true }}
            className={styles.section}
        >
            <div className={styles.text__wrapper}>
                <motion.h1 custom={1} variants={textAnimation} className={styles.title}>Обо мне</motion.h1>
                <motion.p custom={2} variants={textAnimation}>
                    Меня зовут Кива Владислав. Я специализируюсь на создании красивого и надежного внешнего интерфейса для различных сервисов и приложений. <br /> <br />
                    Основной профиль - фронтенд разработка. Люблю учиться, получать новые знания и изучать новые технологии. <br /> <br />
                    Навыки: JavaScript, TypeScript, React, Redux, HTML, CSS, Sass, Git
                </motion.p>
            </div>
            <motion.div custom={3} variants={textAnimation} className={styles.image__wrapper}>
                <img src={skillsImg} alt='' />
            </motion.div>
        </motion.section>
    )
}