import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled, { css } from "styled-components";
import baseTheme from "../../theme/baseTheme";

interface ISlideDotProps {
  isActive?: boolean;
}

interface ISlideProps {
  lead?: boolean;
}

export const Lead = styled.h5`
  color: ${baseTheme.colors.white};
  font-family: ${baseTheme.typography.fonts.regular};
  font-size: 10px;
  line-height: 22px
  letter-spacing: 0px;
  text-transform: uppercase;
`;

export const SlideButton = styled.button<ISlideProps>(({ lead }) => {
  return css`
    background: inherit;
    border: 2px solid ${
      lead ? baseTheme.colors.white : `${baseTheme.colors.black}0D`
    };
    border-radius: 8px;
    box-shadow: 0px 0px 30px ${baseTheme.colors.white}0D;
    color: ${lead ? baseTheme.colors.white : baseTheme.colors.primary};
    height: 40px;
    font-family: ${baseTheme.typography.fonts.bold};
    font-size: 11px;
    line-height: 23px
    letter-spacing: 0.28px;
    margin: 37px 0 22px;
    text-transform: uppercase;
    width: 290px;
`;
});

export const SlideContainer = styled.div<ISlideProps>(({ lead }) => {
  return css`
    align-items: center;
    background: ${lead ? baseTheme.colors.alternative : baseTheme.colors.white};
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: ${lead ? "flex-end" : "space-between"};
    overflow-x: hidden;
    overflow-y: scroll;
    padding: 25px;
    width: 100%;
  `;
});

export const SlideContent = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 19px;
  justify-content: space-between;
`;

export const SlideContentWrapper = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const SlideDot = styled(FontAwesomeIcon)<ISlideDotProps>(
  ({ isActive }) => {
    return css`
      color: ${isActive ? baseTheme.colors.focused : baseTheme.colors.border};
      cursor: pointer;
      height: 7px;
      width: 7px;
    `;
  }
);

export const SlideDotContainer = styled.div`
  align-items: center;
  display: flex;
  gap: 11px;
  justify-content: center;
`;

export const SlideHeader = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

export const SlideImg = styled.img`
  display: none;
  margin: 0 0 30px;
  max-width: 250px;
  max-height: 200px;
  @media screen and (min-height: ${baseTheme.breakpoints.lg_vh}) {
    display: block;
    max-width: 100%;
  }
`;

export const SlideText = styled.h4`
  color: ${baseTheme.colors.primary};
  font-family: ${baseTheme.typography.fonts.regular};
  font-size: 14px;
  letter-spacing: 0px;
  line-height: 22px
  text-align: center;
`;

export const SlideTitle = styled.h3`
  color: ${baseTheme.colors.primary};
  font-family: ${baseTheme.typography.fonts.bold};
  font-size: 18px;
  letter-spacing: 0px;
  line-height: 26px;
`;
