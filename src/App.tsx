import { Main } from "./components/Main/Main"
import { ParticlesBg } from "./components/ParticlesBg/ParticlesBg"

export const App: React.FC = () => {
    return (
        <>
            <ParticlesBg />
            <Main />
        </>
    )
}