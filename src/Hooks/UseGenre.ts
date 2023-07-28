import { useEffect, useState } from "react";
import ApiClinet from "../Services/Api-clinet";
import { CanceledError } from "axios";


interface Genre{
    id: number;
    name: string;
}
interface FetchGenreResponse{
    count: number;
    results: Genre[];
}


const useGenres = () =>{
    const [genres, setGenres] = useState<Genre[]>([]);
    const [error, setError] = useState('');
    const [isLoading, setLoading]= useState(false)

    useEffect(() => {
        const controller = new AbortController();
        setLoading(true);
        ApiClinet.get<FetchGenreResponse>('/genres', {signal:controller.signal  })
            .then((res) => {
                setGenres(res.data.results)
            setLoading(false);
            })
            .catch((err) => {
                if(err instanceof CanceledError) return;
                
                setError(err.message)
                setLoading(false);
            });



            return () => controller.abort();
    },[]);
    return {genres, error, isLoading};
};

export default useGenres