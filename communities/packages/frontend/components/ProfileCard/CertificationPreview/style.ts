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

export const SubTitle = styled.h3`
color: var(--colors-text-colors-secondary, #47586E);
font-size: 16px;
font-style: normal;
font-weight: 700;
line-height: 19.2px;
margin: 0px;

`;

export const NameUser = styled.span`
color: var(--colors-text-colors-secondary, #47586E);
font-size: 18px;
font-style: normal;
font-weight: 700;
line-height: normal;
`;
export const Pagination = styled.span`

width: 100%;
color: var(--colors-Castleton-Green-400, #01684B);
font-size: 18px;
font-style: normal;
font-weight: 700;
line-height: normal;
display: flex;
justify-content: end;
`;
export const Container = styled.div`
display: flex;
  width: 100%;

  justify-content: space-between;
  border-bottom: 1px solid rgba(178, 187, 198, 0.20);
`;

export const ItemWorkshop = styled.div`
display: flex;
margin-bottom: 15px;
`;

export const ContentItem = styled.div`
display: grid;
margin-left: 10px;
  
`;
export const ContentLocalisation = styled.div`
display: flex;
gap: 10px;

img{
    width: var(--spacing-4---grid-1, 4px);
height: var(--spacing-4---grid-1, 4px);
}
  
`;

export const Date = styled.span`
color: var(--colors-text-colors-secondary, #47586E);

font-size: 14px;
font-style: normal;
font-weight: 600;
line-height: 19.2px;

  
`;
export const Vile = styled.span`
color: var(--colors-text-colors-secondary, #47586E);
font-size: 14px;
font-style: normal;
font-weight: 600;
line-height: 19.2px;
  
`;



// COmmunity page styles
