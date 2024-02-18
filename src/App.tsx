import { Main } from "./components/Main/Main"
import { ParticlesBg } from "./components/ParticlesBg/ParticlesBg"
import { BigSpaceship } from "./components/BigSpaceship/BigSpaceship"

export const App: React.FC = () => {
    return (
        <>
            <ParticlesBg />
            <Main />
            
            <div className="spaceship__wrapper">
                <BigSpaceship />
            </div>
        </>
    )
}