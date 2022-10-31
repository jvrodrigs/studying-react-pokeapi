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
          try {
            const response = await api.get(url)
            const data = response.data

            for (let i = 0; i < data.results.length; i++) {
              const imageResponse = await axios.get(data.results[i].url)
              data.results[i].urlImage = imageResponse.data.sprites.other.dream_world.front_default
            }

            setData(data)
              console.log(data)
            setIsFetching(false);
          } catch (error) {
            setError(error as Error);
          }
        }

        fecthData();
    }, [url])

    return { data, error, isFetching };
}