import { About } from "../About/About";
import { Contacts } from "../Contacts/Contacts";
import { Home } from "../Home/Home";
import { NavBar } from "../NavBar/NavBar";
import { Portfolio } from "../Portfolio/Portfolio";
import { Skills } from "../Skills/Skills";
import styles from './Main.module.scss';

export const Main: React.FC = () => {

    return (
        <main className={styles.main}>
            <div className={styles.nav}>
                <NavBar />
            </div>

            <div className={styles.main__content}>
                <Home />
                <About />
                <Skills />
                <Portfolio />
                {/* <Contacts /> */}
            </div>
        </main>
    )
}