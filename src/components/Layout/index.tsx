import { AppRoutes } from "../../Routes";
import { Header } from "../Header/Header";
import './styles.css'

type Props = {
    children: React.ReactNode
}

export const Layout: React.FC<Props> = ({children}) => {
    return(
        <>
            <div>
                <Header/>
                <div className="main">
                    {children}
                </div>
            </div>
        </>
    )
}