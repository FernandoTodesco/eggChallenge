import React from "react";
import { FooterContainer, FooterLink, FooterText } from "./styles";

interface IFooterProps {}

const Footer: React.FC<IFooterProps> = () => {
  return (
    <FooterContainer>
      <FooterText>Lorem ipsum dolor sit amet</FooterText>
      <FooterLink to={"/slider"}>Ver tutorial</FooterLink>
    </FooterContainer>
  );
};

export default Footer;
