import { useEffect, useState } from 'react';
import { Card } from '../../components/Card';
import { useApi } from '../../hooks/useApi';
import './styles.css'

export type modelObjectsPokeApi ={
    name: string;
    url: string;
    url_image?: string;
}

type modelResponsePokeApi = {
    count: number;
    next: string;
    results: modelObjectsPokeApi[]
}

export function Home(){
    const [limit, setLimit] = useState('10');
    const [search, setSearch] = useState("");
    const [isBack, setIsBack] = useState(false);

    const { data: poke, error, isFetching } = useApi<modelResponsePokeApi>(`pokemon?offset=0&limit=${limit}`)
    const contentClassName = isBack ? 'show' : '';
    
    const filteredRepos = search.length > 0 
    ? poke?.results.filter(repo => repo.name.includes(search)) : [];

    useEffect( () => {
        window.addEventListener('scroll', () => {
            window.scrollY >= 1000 ? setIsBack(!isBack) : setIsBack(isBack);
        });      
    }, [])
    
    return(
        <>
            <div className="container-home" id='top'>
                <h1>Pesquisar</h1>
                <input 
                    type="text"
                    placeholder="Digite o nome.."
                    maxLength={15}
                    onChange={(e) => setSearch(e.target.value)}
                />

                <button 
                    type='button'
                    disabled={search.length === 0}
                >Procurar</button>


                {error && 
                    <h1 className={`title`}>
                        {error.name} - {error.message}
                    </h1>
                }
                        
                {isFetching && 
                    <h1 className={`title`}>
                        Loading...
                    </h1>
                }
            </div>

            <div className="container-list container-limit">
                <label>Quantidade:</label>
                <div className="select">
                    <select 
                        id="standard-select"
                        onChange={e => setLimit(e.target.value)}
                    >
                        <option value="10" defaultChecked>10</option>
                        <option value="50">50</option>
                        <option value="100">100</option>
                        <option value="200">200</option>
                        <option value="1000">1000</option>
                    </select>
                </div>
            </div>
            
            <div className="container-list">

                <div className="cards grid-cards">
                    {
                        search.length > 0 ?
                        (
                            filteredRepos?.map(data => {
                                return(
                                    <Card key={data.name} name={data.name} url={data.url} url_image={data.url_image}/>
                                )
                            })
                        ) :
                        (
                            poke?.results.map(data => {
                                return(
                                    <Card key={data.name} name={data.name} url={data.url} url_image={data.url_image}/>
                                )
                            })
                        )
                    }
                </div>
            </div>

            <a href="#top">
                <i className={`back_to_top icon-arrow-up ${contentClassName}`}></i>
            </a>
        </>
    )
}