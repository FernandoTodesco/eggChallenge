import styled from "styled-components";
import baseTheme from "../../theme/baseTheme";

export const StyledActionButton = styled.button`
  align-items: center;
  background: ${baseTheme.colors.white};
  border: 1px solid ${baseTheme.colors.border};
  border-radius: 8px;
  box-shadow: 0px 0px 30px ${baseTheme.colors.black}0D;
  color: ${baseTheme.colors.black};
  cursor: pointer;
  display: flex;
  font-family: ${baseTheme.typography.fonts.medium};
  font-size: 20px;
  height: 40px;
  justify-content: center;
  width: 96px;

  :hover {
    background: ${baseTheme.colors.hover};
  }
`;

export const StyledTooltipContent = styled.div`
  font-family: ${baseTheme.typography.fonts.medium};
  font-size: 9px;
  line-height: 20px;
`;
