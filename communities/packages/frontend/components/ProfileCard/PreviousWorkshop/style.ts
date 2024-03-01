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
margin: 1px;

@media only screen and (max-width: 768px) {

 font-size: 14px;
}

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
  padding-bottom: 15px;
  border-bottom: 1px solid #B2BBC64D;
  @media only screen and (max-width: 768px) {

    
   
   }
`;

export const ItemWorkshop = styled.div`
display: flex;
  
`;

export const ContentItem = styled.div`
display: grid;
margin-left: 10px;
@media only screen and (max-width: 768px) {

  gap: 5px;
 }
  
`;
export const ContentLocalisation = styled.div`
display: flex;
gap: 10px;
  
`;

export const Date = styled.span`

display: flex;
width: auto;
padding: 5px 8px;
justify-content: center;
align-items: center;
gap: 10px;

border-radius: 12px;
background: var(--colors-surface-secondary, #E6F0ED);

@media only screen and (max-width: 768px) {
  height: 17px;
 font-size: 12px;
}
  
`;
export const Vile = styled.span`

display: flex;
width: auto;
padding: 2px 5px;
justify-content: center;
align-items: center;
gap: 10px;

border-radius: 12px;
background: var(--colors-surface-secondary, #E6F0ED);

@media only screen and (max-width: 768px) {
  height: 17px;
  font-size: 12px;
 }
  
`;

export const Img = styled.span`

display: flex;
align-items: flex-start;
  
`;



// COmmunity page styles
