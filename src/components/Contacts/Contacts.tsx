import { contacts } from '../../mock/contacts';
import { motion } from 'framer-motion';
import styles from './Contacts.module.scss';
import { mailIcon, tgLogo, linkedInLogo } from '../../assets/icons/icons';
import { StarFox } from '../StarFox/StarFox';

export const Contacts: React.FC = () => {
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
            <div className={styles.bg}>
                <StarFox />
            </div>

            <div className={styles.text__wrapper}>
                <motion.h2 variants={textAnimation}>Контакты</motion.h2>

                <div className={styles.contacts__wrapper}>
                    <motion.div custom={1} variants={textAnimation} className={styles.contact}>
                        <a href={contacts.mail} target='_blank' rel="noreferrer">
                            <img src={mailIcon} alt='' />
                        </a>
                        <span>kivavladdev@yandex.ru</span>
                    </motion.div>

                    <motion.div custom={2} variants={textAnimation} className={styles.contact}>
                        <a href={contacts.telegram} target='_blank' rel="noreferrer">
                            <img src={tgLogo} alt='' />
                        </a>
                        <span>@kivavlad</span>
                    </motion.div>

                    <motion.div custom={3} variants={textAnimation} className={styles.contact}>
                        <a href={contacts.linkedIn} target='_blank' rel="noreferrer">
                            <img src={linkedInLogo} alt='' />
                        </a>
                        <span>in/kivavlad</span>
                    </motion.div>
                </div>
            </div>
        </motion.section>
    )
}