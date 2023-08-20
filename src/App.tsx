import { Grid, GridItem, Show } from '@chakra-ui/react'
import Navbar from './components/Navbar'
import { GameGrid } from './components/GameGrid'
import GenreList from './components/GenreList'
import { useState } from 'react'
import { Genre } from './Hooks/UseGenre'
import PlatFormSelector from './components/PlatFormSelector'
import { Platform } from './Hooks/useGame'

export interface GameQuery{
  genre: Genre | null;
  platform: Platform | null
}


function App() {
  // const [selectedGenre, SetSelectedGenre] = useState<Genre | null>(null);
  // const [selectedPatform, setSelectedPatform] = useState<Platform | null>(null);
  const [GameQuery, setGameQuery]=useState<GameQuery>({} as GameQuery)
 

  return (
    <>

      <Grid templateAreas={{
        base: '"nav" "main"',
        lg: '"nav nav" "aside main"' // larger than 1024px
      }}

      >

        <GridItem area='nav'><Navbar /></GridItem>
        <Show above='lg'> <GridItem area='aside' paddingX={7}>
          <GenreList SelectedGenre={GameQuery.genre} onSelectGenre={(genre) => setGameQuery({...GameQuery, genre})} />
        </GridItem>
        </Show>
        <GridItem area='main'>
          <PlatFormSelector onSelectPlatform={(platform) => setGameQuery({...GameQuery, platform})} />
          <GameGrid GameQuery={GameQuery} />
        </GridItem>


      </Grid>
    </>
  )
}

export default App
