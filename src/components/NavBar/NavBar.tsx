import { contacts } from '../../mock/contacts';
import styles from './NavBar.module.scss';
import photo from '../../assets/images/photo.jpg';
import { mailIcon, tgLogo, linkedInLogo, gitHubLogo } from '../../assets/icons/icons';

export const NavBar: React.FC = () => {
    return (
        <nav className={styles.navbar}>
            <div className={styles.icon__wrapper}>
                <img src={photo} alt='' />
            </div>

            <div className={styles.links__wrapper}>
                <div className={styles.link}>
                    <a href={contacts.mail} target='_blank' rel="noreferrer">
                        <img src={mailIcon} />
                    </a>
                </div>

                <div className={styles.link}>
                    <a href={contacts.telegram} target='_blank' rel="noreferrer">
                        <img src={tgLogo} />
                    </a>
                </div>

                <div className={styles.link}>
                    <a href={contacts.linkedIn} target='_blank' rel="noreferrer">
                        <img src={linkedInLogo} />
                    </a>
                </div>
            </div>

            <div className={styles.github__wrapper}>
                <a href="https://github.com/KivaVlad" target='_blank' rel="noreferrer">
                    <img src={gitHubLogo} />
                </a>
            </div>
        </nav>
    )
}