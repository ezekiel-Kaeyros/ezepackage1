import styled from 'styled-components';

export const Root = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
  align-items: center;
  padding-top: ${(p) => p.theme.spacing.xs};
`;
