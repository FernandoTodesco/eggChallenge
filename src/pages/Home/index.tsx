import axios from "axios";
import React, { useEffect, useState } from "react";
import ActionButton from "../../components/ActionButton";
import CharacterItem from "../../components/CharacterItem";
import Footer from "../../components/Footer";
import ViewButton from "../../components/ViewButton";
import { ICharacter } from "../../models/character";
import {
  ActionButtonsContainer,
  Container,
  Header,
  ItemsList,
  TeamId,
  TeamIdContainer,
  Title,
} from "./styles";

const Home = () => {
  const [characters, setCharacters] = useState<ICharacter[]>([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get("https://swapi.dev/api/people/");
      setCharacters(response.data.results);
    } catch (err) {
      alert("something went wrong, try reloading the page");
    }
  };

  return (
    <Container>
      <Header>
        <Title>example title</Title>
        <TeamIdContainer>
          <TeamId>lead</TeamId>
          <ViewButton hoverText={"ver modo circular"}>
            rounded button
          </ViewButton>
        </TeamIdContainer>
        <ActionButtonsContainer>
          <ActionButton variant={"like"} />
          <ActionButton variant={"help"} />
          <ActionButton variant={"video"} />
        </ActionButtonsContainer>
      </Header>
      <ItemsList>
        {characters?.map((character: ICharacter, index: number) => (
          <CharacterItem
            key={character.name}
            character={character}
            index={index}
          />
        ))}
      </ItemsList>
      <Footer />
    </Container>
  );
};

export default Home;
