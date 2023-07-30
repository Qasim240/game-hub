// Assuming the correct paths for the imports
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
}

const useGame = (selectedGenre: Genre | null) => useData<Game>('games', {params: {genres: selectedGenre?.id}}, [selectedGenre?.id]);
export default useGame;
