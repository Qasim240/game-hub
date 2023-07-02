import React from "react";
import { Card, CardBody, HStack, Heading, Image, Text } from "@chakra-ui/react";
import { Game } from "../Hooks/useGame";
import PlatFormiconList from "./PlatFormiconList";
import CriticScore from "./CriticScore"; // Correct import statement
import getCroppedImageUrl from "../Services/image-url";

interface Props {
  game: Game;
}

const GameCard: React.FC<Props> = ({ game }) => {
  return (
    <Card m={[3, 5]} overflow="hidden">
     <Image src={getCroppedImageUrl(game.background_image)} alt={game.name} />
      <CardBody>
        <Heading fontSize="2xl">{game.name}</Heading>
        <HStack justify='space-between'>
        <PlatFormiconList platforms={game.parent_platforms.map(p => p.platform)} />
        <CriticScore score={game.metacritic} /> 
        </HStack>   
      </CardBody>
    </Card>
  );
};

export default GameCard;
