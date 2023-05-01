import useGame from "../Hooks/useGame"

export const GameGrid = () => {
 const {games, error} = useGame();
    return (
        <>
         { error && <text>{error}</text>}
            <ul>
                {games.map(game => <li key={game.id}>{game.name}</li>)}
            </ul></>
    )
}
