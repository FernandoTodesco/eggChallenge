import React, { HTMLAttributes } from "react";
import { StyledViewButton } from "./styles";

interface IViewButtonProps extends HTMLAttributes<HTMLButtonElement> {
  hoverText: string;
}

const ViewButton: React.FC<IViewButtonProps> = ({ children, hoverText }) => {
  return <StyledViewButton hoverText={hoverText}>{children}</StyledViewButton>;
};

export default ViewButton;
