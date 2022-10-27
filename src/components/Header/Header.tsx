import { useState } from "react";
import  './styles.css';

export function Header() {
    const [isMenu, setIsMenu] = useState(false);

    const contentClassName = isMenu ? `${"show"}` : ``;

    return(
        <>
            <header className={`headerMain`} id="header">
                <nav className={`container ${contentClassName}`}>
                    <a className="logo" href="/">
                        Poke<span>dex</span>
                    </a>
                    <div className="menu">
                        <ul className="grid">
                            <li>
                                <a onClick={() => setIsMenu(false)} className="title" href="/">Início</a>
                            </li>
                            <li>
                                <a onClick={() => setIsMenu(false)} className="title" href="/about">Sobre</a>
                            </li>
                        </ul>
                    </div>
                    <div onClick={() => setIsMenu(!isMenu)} className={`open toggle icon_menu icon-menu toggle`}></div>
                    <div onClick={() => setIsMenu(!isMenu)} className={`close toggle icon_close icon-close toggle`}></div>
                </nav>
            </header>
        </>
    )
}