import { Grid, GridItem, Show } from '@chakra-ui/react'
import Navbar from './components/Navbar'
import { GameGrid } from './components/GameGrid'
import GenreList from './components/GenreList'
import { useState } from 'react'
import { Genre } from './Hooks/UseGenre'
function App() {
  const [selectedGenre, SetSelectedGenre] = useState<Genre | null>(null);

  return (
    <>

      <Grid templateAreas={{
        base: '"nav" "main"',
        lg: '"nav nav" "aside main"' // larger than 1024px
      }}

      >

        <GridItem area='nav'><Navbar /></GridItem>

        <Show above='lg'> <GridItem area='aside' paddingX={7}>

          <GenreList SelectedGenre={selectedGenre} onSelectGenre={(genre) => SetSelectedGenre(genre)}/>
        </GridItem></Show>
        <GridItem area='main'>
          <GameGrid selectdGenre={selectedGenre}/>
        </GridItem>


      </Grid>
    </>
  )
}

export default App
