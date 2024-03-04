import styles from './BurgerMenu.module.scss';

interface IProps {
    activeBurger: boolean;
    setActiveBurger: (param: boolean) => void;
}

export const BurgerMenu: React.FC<IProps> = ({activeBurger, setActiveBurger}) => {
    return (
        <div className={activeBurger ? styles.burger__menu_active : styles.burger__menu}>
            <input id="toggle" type="checkbox" onClick={() => setActiveBurger(activeBurger = !activeBurger)} />
            <label htmlFor="toggle" className={styles.hamburger}>
                <div className={styles.top_bun}></div>
                <div className={styles.meat}></div>
                <div className={styles.bottom_bun}></div>
            </label>
        </div>
    )
}