import { useState } from 'react';
import { ButtonBackToTop } from '../../components/ButtonBackToTop';
import { Card } from '../../components/Card';
import { useApi } from '../../hooks/useApi';
import './styles.css'

export type modelObjectsPokeApi ={
    name: string;
    url: string;
    urlImage?: string;
}

type modelResponsePokeApi = {
    count: number;
    next: string;
    results: modelObjectsPokeApi[]
}

export function Home(){
    const [limit, setLimit] = useState('10');
    const [search, setSearch] = useState("");

    const { data: poke, error, isFetching } = useApi<modelResponsePokeApi>(`pokemon?offset=0&limit=${limit}`)

    const parsePoke = search.length > 0 
    ? poke?.results.filter(repo => repo.name.includes(search)) : poke?.results;
    
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
                        parsePoke?.map(data => <Card key={data.name} name={data.name} url={data.url} urlImage={data.urlImage}/>)
                    }
                </div>
            </div>

           <ButtonBackToTop />
        </>
    )
}