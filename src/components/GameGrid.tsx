import React, { useEffect, useState } from 'react'
import ApiClinet from '../Services/Api-clinet';

interface Game {
    id: number;
    name: string;
}

interface FetchGamesResponse {
    count: number;
    results: Game[];
}

export const GameGrid = () => {
    const [games, setGames] = useState<Game[]>([]);
    const [error, setError] = useState('');

    useEffect(() => {
        ApiClinet.get<FetchGamesResponse>('/games')
            .then(res => setGames(res.data.results))
            .catch(err => setError(err.message));
    }, []) // add empty dependency array here

    return (
        <>
         { error && <text>{error}</text>}
            <ul>
                {games.map(game => <li key={game.id}>{game.name}</li>)}
            </ul></>
    )
}
