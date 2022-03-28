import styled from "styled-components";
import baseTheme from "../../theme/baseTheme";
import { Link } from "react-router-dom";

export const StyledSeeMoreButton = styled.button`
  align-items: center;
  background: ${baseTheme.colors.white};
  border: 1px solid ${baseTheme.colors.border};
  border-radius: 8px;
  cursor: pointer;
  display: flex;
  height: 30px;
  justify-content: center;
  width: 104px;
`;

export const SeeMoreButtonText = styled.h5`
  color: ${baseTheme.colors.primary};
  cursor: pointer;
  font-family: ${baseTheme.typography.fonts.medium};
  font-size: 11px;
  line-height: 13px;
  margin: 0 2px 0 5px;
  :link {
    text-decoration: none;
  }
`;

export const SeeMoreLink = styled(Link)`
  text-decoration: none;
`;
