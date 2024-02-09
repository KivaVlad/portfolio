import styles from './NavBar.module.scss';
import photo from '../../assets/images/photo.jpg';

export const NavBar: React.FC = () => {
    return (
        <nav className={styles.navbar}>
            <div className={styles.icon__wrapper}>
                <img src={photo} alt='' />
            </div>
        </nav>
    )
}