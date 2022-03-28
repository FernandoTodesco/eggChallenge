import styled from "styled-components";
import baseTheme from "./theme/baseTheme";

export const AppContainer = styled.div`
  margin: auto;
  height: 100%;
  max-height: ${baseTheme.breakpoints.xl_vh};
  min-height: ${baseTheme.breakpoints.sm_vh};
  max-width: ${baseTheme.breakpoints.xl_vw};
  min-width: ${baseTheme.breakpoints.sm_vw};
  width: 100%;
`;
