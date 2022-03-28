import styled from "styled-components";
import baseTheme from "../../theme/baseTheme";

export const PeopleContainer = styled.div`
  color: ${baseTheme.colors.primary};
  display: flex;
  flex-wrap: wrap;
  font-family: ${baseTheme.typography.fonts.regular};
  width: 100%;
`;

export const PeopleContent = styled.div`
  margin: 20px;
`;

export const PeopleData = styled.li`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const PeopleTitle = styled.h3`
  font-size: 12px;
  text-transform: capitalize;
`;
