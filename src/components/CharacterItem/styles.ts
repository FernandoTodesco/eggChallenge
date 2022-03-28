import styled from "styled-components";
import baseTheme from "../../theme/baseTheme";

export const ContentContainer = styled.div`
  align-items: center;
  display: flex;
  width: 100%;
`;

export const ItemContainer = styled.div`
  align-items: center;
  border-bottom: 1px solid ${baseTheme.colors.border};
  display: flex;
  justify-content: space-between;
  padding: 11px 0 14px;
  width: 100%;

  :last-child {
    border-style: none;
  }
`;

export const ItemImg = styled.img`
  border-radius: 50%;
`;

export const ItemName = styled.h5`
  color: ${baseTheme.colors.primary};
  font-family: ${baseTheme.typography.fonts.regular};
  font-size: 12px;
  line-height: 16px;
  margin: 0 0 0 10px;
`;
