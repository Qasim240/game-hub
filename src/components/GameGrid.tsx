import { SimpleGrid } from "@chakra-ui/react";
import useGame, { Platform } from "../Hooks/useGame"
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import { Genre } from "../Hooks/UseGenre";
import { GameQuery } from "../App";
interface props{
  GameQuery: GameQuery
}

export const GameGrid = ({GameQuery}: props) => {
  const { data, error, isLoading } = useGame(GameQuery);
  const Skeleton = [1, 2, 3, 4, 5, 6];
  return (
    <>
      {error && <text>{error}</text>}
      <SimpleGrid columns={{ sm: 1, md: 2, lg: 2, xl: 3 }} spacing={5}>
        {isLoading && Skeleton.map(Skeleton =>
          
          <GameCardSkeleton key={Skeleton} />
          
          )}
        {data.map((game) => (

          <GameCard key={game.id} game={game} />

        ))}
      </SimpleGrid>
    </>
  );
};
