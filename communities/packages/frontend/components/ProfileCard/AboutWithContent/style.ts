import styled from 'styled-components';

export const Root = styled.div`

display: flex;
width: 100%;
padding: 10px 10px;

flex-direction: column;
justify-content: center;
align-items: center;
gap: 10px;
  border-radius: 8px;

  border: var(--input-seclected, 1px) solid var(--colors-border-btn-colors, #A3ADBB);

  background: var(--colors-surface-primary, #FFF);

`;


export const Header = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;




export const Title = styled.h2`
color: var(--colors-text-colors-secondary, #47586E);
font-size: 18px;
font-style: normal;
font-weight: 700;
line-height: normal;

`;

export const NameUser = styled.span`
color: var(--colors-text-colors-secondary, #47586E);
font-size: 18px;
font-style: normal;
font-weight: 700;
line-height: normal;
`;
export const Description = styled.span`
color: var(--colors-text-colors-secondary, #47586E);
font-size: 18px;
font-style: normal;
font-weight: 400;
line-height: normal;
`;



// COmmunity page styles
