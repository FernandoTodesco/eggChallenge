import styled, { css } from "styled-components";
import baseTheme from "../../theme/baseTheme";

interface IViewButtonProps {
  hoverText: string;
}

export const StyledViewButton = styled.button<IViewButtonProps>(
  ({ hoverText }) => {
    return css`
      align-items: center;
      background: ${baseTheme.colors.white};
      border: 1px solid ${baseTheme.colors.border};
      border-radius: 8px;
      color: ${baseTheme.colors.primary};
      cursor: pointer;
      display: flex;
      font-family: ${baseTheme.typography.fonts.medium};
      font-size: 10px;
      height: 20px;
      justify-content: center;
      line-height: 12px;
      text-transform: capitalize;
      width: 105px;

      :hover {
        font-size: 0;

        :after {
          color: ${baseTheme.colors.actionable};
          content: "${hoverText}";
          font-size: 10px;
        }
      }
    `;
  }
);
