import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ICharacter } from "../../models/character";
import {
  PeopleContainer,
  PeopleContent,
  PeopleData,
  PeopleTitle,
} from "./styles";

const People = () => {
  const [character, setCharacter] = useState<ICharacter>({});
  let { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`https://swapi.dev/api/people/${id}/`);
        setCharacter(response.data);
      } catch (err) {
        alert("something went wrong, try reloading the page");
      }
    };
    id && fetchData();
  }, [id]);

  return (
    <PeopleContainer>
      {Object.keys(character).map((key, value) => (
        <PeopleContent key={key}>
          <PeopleTitle>{key.split("_").join(" ")}</PeopleTitle>
          <span>
            {typeof Object.values(character)[value] !== "object" ? (
              Object.values(character)[value].toUpperCase()
            ) : (
              <ul>
                {Object.values(character)[value].map((link: string) => (
                  <PeopleData>{link.toUpperCase()}</PeopleData>
                ))}
              </ul>
            )}
          </span>
        </PeopleContent>
      ))}
    </PeopleContainer>
  );
};

export default People;
