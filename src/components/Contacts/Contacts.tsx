import styles from './Contacts.module.scss';
import { mailIcon, gitHubLogo, tgLogo, } from '../../assets/icons/icons';

export const Contacts: React.FC = () => {

    return (
        <section className={styles.section}>
            <div className={styles.text__wrapper}>
                <h2>Контакты</h2>
                <p>Вы можете выбрать любой удобный для вас способ связаться со мной</p>
            </div>

            <div className={styles.contacts__wrapper}>
                <div className={styles.contact}>
                    <img src={mailIcon} alt='' />
                </div>
            </div>
        </section>
    )
}