// Assuming the correct paths for the imports
import { GameQuery } from "../App";
import useData from "./useData"; // Replace 'path_to_useData_file' with the correct path
import { Genre } from "./UseGenre";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
  rating_top: number;

}

const useGame = (
  gameQuery: GameQuery


) =>
  useData<Game>('games', {
    params:
    {
      genres: gameQuery.genre?.id,
      platforms: gameQuery.platform?.id,
      ordering: gameQuery.sortOrder,
      search: gameQuery.searchText

    }
  },
    [gameQuery
    ]);
export default useGame;
