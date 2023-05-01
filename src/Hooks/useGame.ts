import { useState, useEffect } from "react";
import ApiClinet from "../Services/Api-clinet";
import { CanceledError } from "axios";
ApiClinet
interface Game {
    id: number;
    name: string;
}

interface FetchGamesResponse {
    count: number;
    results: Game[];
}

const useGame = () =>{
    const [games, setGames] = useState<Game[]>([]);
    const [error, setError] = useState('');

    useEffect(() => {
        const controller = new AbortController();
        ApiClinet.get<FetchGamesResponse>('/games', {signal:controller.signal  })
            .then((res) => setGames(res.data.results))
            .catch((err) => {
                if(err instanceof CanceledError) return;
                
                setError(err.message)
            });



            return () => controller.abort();
    },[]);
    return {games, error};
}
export default useGame;