import { useState } from "react";
import { About } from "../About/About";
import { Contacts } from "../Contacts/Contacts";
import { Home } from "../Home/Home";
import { NavBar } from "../NavBar/NavBar";
import { Portfolio } from "../Portfolio/Portfolio";
import { Skills } from "../Skills/Skills";
import { BurgerMenu } from "../BurgerMenu/BurgerMenu";
import styles from './Main.module.scss';

export const Main: React.FC = () => {
    let [activeBurger, setActiveBurger] = useState(false);

    return (
        <main className={styles.main}>
            <div className={styles.nav} style={{ opacity: activeBurger ? 1 : .8 }}>
                <div className={activeBurger ? styles.navbar__active : styles.navbar}>
                    <NavBar />
                </div>
                <BurgerMenu activeBurger={activeBurger} setActiveBurger={setActiveBurger} />
            </div>

            <div className={styles.main__content} style={{ opacity: activeBurger ? .2 : 1 }}>
                <Home />
                <About />
                <Skills />
                <Portfolio />
                <Contacts />
            </div>
        </main>
    )
}