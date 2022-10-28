import './styles.css';

export function About(){
    return(
        <>
            <div className="container-about">
                <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
                <div className="container-footer-about grid footer">
                    <div className="brand">
                        <a href="/" className="logo logo_alt">
                            Poke<span>dex</span>.
                        </a>
                        <p>©2022 Pokemon - PokeApi</p>
                        <p>Direitos Reservados.</p>
                    </div>
                    <div className="social">
                        <a href="/" target={"_blank"}>
                            <i className="icon-instagram"></i>
                        </a>

                        <a href="/" target={"_blank"}>
                            <i className="icon-facebook"></i>
                        </a>
                        <a href="/" target={"_blank"}>
                            <i className="icon-youtube"></i>
                        </a>
                    </div>
                </div>
            </div>

        </>
    )
}