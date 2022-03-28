import styled from "styled-components";
import baseTheme from "../../theme/baseTheme";

export const ActionButtonsContainer = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

export const Container = styled.div`
  align-items: center;
  color: ${baseTheme.colors.primary};
  display: flex;
  flex-direction: column;
  justify-content: center;
  letter-spacing: 0px;
  padding: 0 21px;
`;

export const Header = styled.div`
  align-items: center;
  background: ${baseTheme.colors.white};
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 17px 21px 22px;
  position: sticky;
  top: 0;
  width: 100%;
`;

export const ItemsList = styled.div`
  height: 100%;
  margin: 0 67px;
  overflow-y: scroll;
  width: 100%;
  ::-webkit-scrollbar {
    width: 0;
  }
`;

export const TeamId = styled.h4`
  font-family: ${baseTheme.typography.fonts.bold};
  font-size: 12px;
  line-height: 14px;
  text-transform: uppercase;
`;

export const TeamIdContainer = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  padding: 8px 0 14px;
  width: 100%;
`;

export const Title = styled.h1`
  font-family: ${baseTheme.typography.fonts.bold};
  font-size: 20px;
  line-height: 24px;
  text-align: left;
  text-transform: capitalize;
  width: 100%;
`;
