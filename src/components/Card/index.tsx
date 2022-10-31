import './styles.css'
import { modelObjectsPokeApi } from "../../pages/home/Home";

export function Card(props: modelObjectsPokeApi) {    
    return(
        <>
            <div key={props.name} className="card">
                <img 
                    src={props.urlImage ?? '../../assets/img/default_image.png'} 
                    alt={`Imagem do ${props.name}`}/>
                <h3 className="title">{props.name}</h3>
                <p>
                    Description do {props.name}
                </p>
            </div>
        </>
    )
}