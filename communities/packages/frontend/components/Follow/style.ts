import styled from 'styled-components';
import { Button } from '../ui';

interface RootProps {
  isFollowing: boolean;
}

export const Root = styled(Button)<RootProps>`
  padding: ${(p) => p.theme.spacing.xs} ${(p) => p.theme.spacing.sm};
  font-size: ${(p) => p.theme.font.size.xs};
  border-radius: 4rem;
  width: 100%;
  max-width: 10rem;
  border: 1px solid ${(p) => p.theme.colors.general.link};
  color: ${(p) => p.theme.colors.general.white};
  font-weight: ${(p) => p.theme.font.weight.bold};
  background-color: ${(p) => p.theme.colors.general.link};

  &:hover {
    opacity: 0.8;
  }

  ${(p) =>
    p.isFollowing &&
    `
    background-color: ${p.theme.colors.general.link};
    color: ${p.theme.colors.general.white};
  `}
`;
