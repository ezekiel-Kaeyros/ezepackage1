import styled from 'styled-components';

export const Root = styled.div`
display: flex;
width: 100%;
//width: 256px;
padding: 0px 16px 16px 16px;

flex-direction: column;
justify-content: center;
align-items: flex-center;
gap: 10px;
border-radius: var(--spacing-4---grid-3, 12px);
border: var(--input-seclected, 1px) solid var(--colors-border-btn-colors, #A3ADBB);
background: var(--colors-white, #FFF);

`;

export const ListConnexion = styled.div`

display: grid;
gap: 12px;

@media only screen and (max-width: 768px) {
  display: grid;
grid-template-columns: auto auto;
grid-auto-rows: auto;
grid-gap: 10px;
  }
`;

export const DescriptStat = styled.span`
display: flex;
align-items: baseline;
justify-content: start;
gap: 5px;
}

`;

export const Img = styled.span`
display: flex;
justify-content: start;

`;

export const Statistique = styled.h2`
color: var(--colors-Castleton-Green-400, #01684B);
font-size: 16px;
font-style: normal;
font-weight: 700;
line-height: 120%;

@media only screen and (max-width: 768px) {
  height: 1px;
  font-weight: 500;
  font-familly: Satoshi;
  }

`;

export const BlockFollow = styled.div`
  display: flex;
`;
export const Title = styled.h2`
color: var(--colors-text-colors-primary, #1D242D);
font-size: 18px;
font-style: normal;
font-weight: 700;
line-height: normal;
`;
export const SubTitle = styled.span`
color: var(--colors-text-colors-secondary, #47586E);

flex-direction: column;
justify-content: center;
align-items: flex-center;
font-size: 16px;
font-style: normal;
font-weight: 700;
line-height: 120%; 
margin-right: 10px;
`;

export const SubTitleFont = styled.span`
color: var(--colors-text-colors-secondary, #47586E);
font-size: 16px;
font-style: normal;
font-weight: 400;
line-height: normal;
margin-right: 10px;
`;


export const BanqueImage = styled.div``;

export const HeaderContainer = styled.div`
width: 100%;
  display: flex;
// justify-content: space-between;
  
`;
export const Button = styled.span`
display: flex;
padding: var(--spacing-4---grid-1, 4px) var(--raduis-sm, 8px);
color: var(--colors-text-colors-secondary, #47586E);

font-size: 16px;
font-style: normal;
font-weight: 600;
justify-content: center;
align-items: center;
gap: 10px;
border-radius: var(--spacing-4---grid-3, 12px);
background: var(--colors-surface-secondary, #E6F0ED);
`;

export const OtherButton = styled.div<{ background?: string }>`
display: flex;
padding: var(--input-seclected, 0px) 10px;

align-items: center;
gap: 8px;

align-self: stretch;
border-radius: var(--raduis-sm, 8px);
background: ${(p) => p.background};

@media only screen and (max-width: 768px) {
 display: grid;
 gap: 0px;
 padding: 10px;
}

  
`;
export const FrenchContainer = styled.div`
width: 100%;
  display: flex;

  
`;
export const TopSection = styled.div`
padding-bottom: 15px;
display: grid;
border-bottom: 1px solid rgba(163, 173, 187, 0.30);
gap: 15px;
  
`;

export const BottomSection = styled.div`
padding-top: 0px;
display: grid;
gap: 15px;
margin-top: -12px;
  
`;

export const Item = styled.span`
  
`;


// COmmunity page styles
