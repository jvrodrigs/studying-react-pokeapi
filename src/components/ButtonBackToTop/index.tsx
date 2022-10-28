import { useEffect, useState } from 'react';
import './styles.css';

export function ButtonBackToTop() {

    const [isBack, setIsBack] = useState(false);

    const contentClassName = isBack ? 'show' : '';
    

    useEffect( () => {
        window.addEventListener('scroll', () => {
            window.scrollY >= 1000 ? setIsBack(!isBack) : setIsBack(isBack);
        }); 
    }, [])

    return(
        <>
            <a href="#top">
                <i className={`back_to_top icon-arrow-up ${contentClassName}`}></i>
            </a>
        </>
    )
}