import React from "react";
import { ICharacter } from "../../models/character";
import SeeMoreButton from "../SeeMoreButton";
import { ContentContainer, ItemContainer, ItemImg, ItemName } from "./styles";

interface ICharacterItemProps {
  character: ICharacter;
  index: number;
}

const CharacterItem: React.FC<ICharacterItemProps> = ({ character, index }) => {
  const { name } = character;
  return (
    <ItemContainer>
      <ContentContainer>
        <ItemImg src={`https://picsum.photos/40/40?random=${index}`} alt="" />
        <ItemName>{name}</ItemName>
      </ContentContainer>
      <SeeMoreButton character={character} />
    </ItemContainer>
  );
};

export default CharacterItem;
