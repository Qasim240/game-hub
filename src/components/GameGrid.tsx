import { SimpleGrid } from "@chakra-ui/react";
import useGame from "../Hooks/useGame"
import GameCard from "./GameCard";

export const GameGrid = () => {
 const {games, error} = useGame();
    return (
        <>
         { error && <text>{error}</text>}
            <SimpleGrid columns={{sm: 1, md: 2, lg: 2, xl: 3}} spacing={5}>

                {games.map((game) => (

                  <GameCard key={game.id} game={game}/>

                    ))}
            </SimpleGrid>
            </>
    );
};
