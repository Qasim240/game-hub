import { Button, HStack, Heading, Image, Link, List, ListItem, Spinner } from '@chakra-ui/react';
import useGenres, { Genre } from '../Hooks/UseGenre'
import getCroppedImageUrl from '../Services/image-url';
import { Skeleton } from '@chakra-ui/react';
interface props{
    onSelectGenre:(genre:  Genre) => void;
    SelectedGenre: Genre | null;
}

const GenreList = ({SelectedGenre, onSelectGenre}: props) => {
    const { data, isLoading } = useGenres();

    if(isLoading) return  <Skeleton height="1200px"/>;

    return (
        <>
        <Heading fontSize='5xl' marginBottom={3}> Genres</Heading>
            <List>
                {data.map(genre => <ListItem key={genre.id} paddingY='5px'>
                    <HStack backgroundColor='grey'paddingX='10px' paddingY='5px' borderRadius='10px'>
                        <Image boxSize='32px' borderRadius='50px' src={getCroppedImageUrl(genre.image_background)} />

                        <Button fontWeight={genre.id === SelectedGenre?.id ? 'bold' : 'normal'} color={genre.id === SelectedGenre?.id ? 'black' : 'white'}  onClick={()=> onSelectGenre(genre)} variant='link' bgColor='transparent' width='100%' fontSize='lg'>{genre.name}</Button>

                    </HStack>


                </ListItem>)}
            </List>

        </>
    )
}

export default GenreList