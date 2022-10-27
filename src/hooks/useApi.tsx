import { useEffect, useState } from "react";
import axios from 'axios';

const api = axios.create({
    baseURL: "https://pokeapi.co/api/v2/"
})

export function useApi<T = unknown>(url: string){
    const [data, setData] = useState<T | null>(null);
    const [isFetching, setIsFetching] = useState(true);
    const [error, setError] = useState<Error | null>(null);

    useEffect( () => {
        async function fecthData() {
            await api.get(url).then(response => {
              response.data.results.map( 
                (getPokemons: any) => axios.get(getPokemons.url).then(resInfo => getPokemons.url_image = resInfo.data.sprites.other.dream_world.front_default)
              )
              setData(response.data)
            })
            .catch(err => {
              setError(err);
            })
            .finally( () => {
              setIsFetching(false);
            });
        }

        fecthData();
    }, [url])

    return { data, error, isFetching };
}