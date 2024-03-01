import styled from 'styled-components';
import { Container } from '../ui';

export const Root = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: start;
  margin: 0 auto;
  width: 100%;
  position: relative;
  background: var(--colors-surface-primary, #f5f7f9);

  @media (min-width: ${(p) => p.theme.screen.xxxl}) {
    max-width: ${(p) => p.theme.screen.xxl};
  }

  /* @media (min-width: ${(p) => parseInt(p.theme.screen.lg, 10) + 20 + 'px'}) {
    max-width: ${(p) => p.theme.screen.lg};
  }

  @media (min-width: ${(p) => parseInt(p.theme.screen.xl, 10) + 20 + 'px'}) {
    max-width: ${(p) => p.theme.screen.xl};
  } */
`;

interface StyledContainerProps {
  hideRightSidebar?: boolean;
  marginTop?: string;
}

export const StyledContainer = styled(Container)<StyledContainerProps>`
  ${(p) => p.marginTop && `margin-top: 2rem`};

  @media (min-width: ${(p) => parseInt(p.theme.screen.md, 10) + 20 + 'px'}) {
    max-width: ${(p) => p.theme.screen.xs};
    padding-top: 2rem;
  }

  @media (min-width: ${(p) => parseInt(p.theme.screen.xl, 10) + 20 + 'px'}) {
    max-width: ${(p) => p.theme.screen.sm};
  }

  ${(p) => p.hideRightSidebar && `max-width: 100% !important;`};
`;

// Channel info Layout

export const Wrapper = styled.div`
  margin: 0 auto;

  @media (max-width: ${(p) => parseInt(p.theme.screen.lg, 10) + 20 + 'px'}) {
    margin: 0;
    width: 100%;
  }
`;

export const ContentWrapper = styled.div`
  display: flex;

  @media (max-width: ${(p) => parseInt(p.theme.screen.lg, 10) + 20 + 'px'}) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const MainContent = styled.div`
  margin: 0 16rem;
  width: 100%;

  @media (max-width: ${(p) => parseInt(p.theme.screen.xl, 10) + 20 + 'px'}) {
    margin: 0rem;
    width: 100%;
  }
`;
