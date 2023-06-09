
import { Card, CardBody, Heading, Image } from "@chakra-ui/react"
import { Game } from "../Hooks/useGame"
interface props {
    game: Game
}

const GameCard = ({ game }: props) => {
    return (
        <Card m={[3, 5]} overflow='hidden'>
            <Image src={game.background_image} />
            <CardBody>
                <Heading fontSize='2xl'>
                    {game.name}
                </Heading>
            </CardBody>
        </Card>
    )
}

export default GameCard 