import styled from 'styled-components';

export const Root = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: left;
  justify-content: space-between;
  background-color: white;
  padding: 0px 10px;
  //padding: ${(p) => p.theme.spacing.sm};
  border-radius: ${(p) => p.theme.radius.sm};
  transition: border-color 0.1s;
  box-shadow: ${(p) => p.theme.shadows.sm};
`;

export const BlockInsight = styled.div`
  display: flex;
  gap: 10px;
  padding: var(--spacing-4---grid-2, 8px) 0px;
align-items: center;
gap: var(--spacing-4---grid-3, 12px);
align-self: stretch;
  
    color: var(--colors-text-colors-primary, #1D242D);
    font-family: Visby CF;
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  
`;
export const BlockOverview = styled.div`
  display: flex;
padding: var(--spacing-4---grid-2, 8px) 0px;
align-items: center;
gap: var(--spacing-4---grid-3, 12px);
align-self: stretch;
`;

export const BlockCommunity = styled.div`
    display: flex;
    padding: var(--spacing-4---grid-2, 8px) 0px;
    align-items: center;
    gap: var(--spacing-4---grid-3, 12px);
    align-self: stretch;
`;

export const BlockContent = styled.div`
display: flex;
padding: var(--spacing-4---grid-2, 8px) 0px;
align-items: center;
gap: var(--spacing-4---grid-3, 12px);
align-self: stretch;

    color: var(--colors-text-colors-primary, #1D242D);
    /* Desktop/Body text */
    font-family: Satoshi;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 120%;
`;

export const ContentInsight = styled.div`

  display: grid;
  gap: 10px;
  width: 43%;
  margin-left: 52%;
  padding: 34px 20px;
  border-radius: var(--spacing-8---grid-2, 16px);
    border: 1px solid var(--borders, #B2BBC6);
    background: #FFF;
`;






