import styled from "styled-components";
import baseTheme from "../../theme/baseTheme";
import { Link } from "react-router-dom";

export const FooterContainer = styled.div`
  align-items: center;
  background: ${baseTheme.colors.white};
  bottom: 0;
  display: flex;
  justify-content: center;
  padding: 21px 0 30px;
  position: fixed;
  width: 100%;
`;

export const FooterLink = styled(Link)`
  color: ${baseTheme.colors.active};
  font-family: ${baseTheme.typography.fonts.medium};
  font-size: 11px;
  line-height: 16px;
  margin: 0 0 0 16px;
  text-decoration: none;
  :hover {
    text-decoration: underline;
  }
`;

export const FooterText = styled.h5`
  color: ${baseTheme.colors.primary};
  font-family: ${baseTheme.typography.fonts.regular};
  font-size: 11px;
  line-height: 16px;
`;
