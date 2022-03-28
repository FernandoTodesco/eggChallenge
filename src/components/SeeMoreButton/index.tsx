import React, { HTMLAttributes } from "react";
import { SeeMoreButtonText, SeeMoreLink, StyledSeeMoreButton } from "./styles";
import { ReactComponent as CirclePlusRegular } from "../../assets/images/circle-plus-regular.svg";
import { ICharacter } from "../../models/character";

interface ISeeMoreButtonProps extends HTMLAttributes<HTMLButtonElement> {
  character: ICharacter;
}

const SeeMoreButton: React.FC<ISeeMoreButtonProps> = ({ character }) => {
  const { url } = character;
  const urlArray = url?.split("/");
  const id = urlArray && urlArray[urlArray?.length - 2];
  return (
    <SeeMoreLink to={`/people/${id}`}>
      <StyledSeeMoreButton>
        <CirclePlusRegular width={12} />
        <SeeMoreButtonText>Ver más</SeeMoreButtonText>
      </StyledSeeMoreButton>
    </SeeMoreLink>
  );
};

export default SeeMoreButton;
