import { Card, CardBody, Heading, Image, Text } from "@chakra-ui/react";
import { Game } from "../Hooks/useGame";
import PlatFormiconList from "./PlatFormiconList";

interface Props {
  game: Game;
}

const GameCard: React.FC<Props> = ({ game }) => {
  return (
    <Card m={[3, 5]} overflow="hidden">
      <Image src={game.background_image} alt={game.name} />
      <CardBody>
        <Heading fontSize="2xl">{game.name}</Heading>
      <PlatFormiconList platforms={game.parent_platforms.map(p =>p.platform)} />
      </CardBody>
    </Card>
  );
};

export default GameCard;
