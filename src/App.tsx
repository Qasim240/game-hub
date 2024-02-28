import { Box, Flex, Grid, GridItem, HStack, Show, useQuery } from '@chakra-ui/react'
import Navbar from './components/Navbar'
import { GameGrid } from './components/GameGrid'
import GenreList from './components/GenreList'
import { useState } from 'react'
import { Genre } from './Hooks/UseGenre'
import PlatFormSelector from './components/PlatFormSelector'
import { Platform } from './Hooks/useGame'
import SortSelector from './components/SortSelector'
import GameHeading from './components/GameHeading'


export interface GameQuery {
  genre: Genre | null;
  platform: Platform | null
  sortOrder: string;
  searchText: string;
}


function App() {



  // const [selectedGenre, SetSelectedGenre] = useState<Genre | null>(null);
  // const [selectedPatform, setSelectedPatform] = useState<Platform | null>(null);
  const [GameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery)



  // todo with React Query method

 

  return (
    <>


  

      <Grid templateAreas={{
        base: '"nav" "main"',
        lg: '"nav nav" "aside main"' // larger than 1024px
      }}

      >

        <GridItem area='nav'><Navbar onSearch={(searchText) => setGameQuery({...GameQuery, searchText})} /></GridItem>
     
        <Show above='lg'> <GridItem area='aside' paddingLeft={5}>
          <GenreList SelectedGenre={GameQuery.genre} onSelectGenre={(genre) => setGameQuery({ ...GameQuery, genre })} />
        </GridItem>
        </Show>
        <GridItem padding={5} area='main'>
          <GameHeading gameQuery={GameQuery} />
   
          <Flex  marginBottom={5}>
           <Box marginRight={5}>
           <PlatFormSelector onSelectPlatform={(platform) => setGameQuery({ ...GameQuery, platform })} />
           </Box>
            <SortSelector onSelectSortOrder={(sortOrder) => setGameQuery({ ...GameQuery, sortOrder })} />
          </Flex>

          <GameGrid GameQuery={GameQuery} />
        </GridItem>


      </Grid>
    </>
  )
}

export default App
