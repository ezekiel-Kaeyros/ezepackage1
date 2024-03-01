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
`;

export const ItemWorkshop = styled.div`
display: flex;
  
`;

export const ContentItem = styled.div`
display: grid;
margin-left: 10px;
  
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
  
`;


export const MyButton = styled.span`
display: flex;
justify-content: space-between;
Button {
    display: flex;
padding: 12px 24px;
justify-content: flex-end;
align-items: center;
font-weight: 700;
font-size: 18px;
gap: 5px;
    border-radius: 12px;
    border: 1px solid #FF0505; 
    color: #FF0505;
    background-color: white; 
 margin: 5% 0 2% 0;
}

`;

export const TableOfContentsContainer = styled.span`
// margin: 20px;
`;

export const CheckboxContainer = styled.span`
display: flex;
align-items: center;
margin-bottom: 8px;
`;

export const ListContent = styled.span`


 display: flex;
flex-wrap: wrap;
width: 100%;
max-width: 100%;
gap: 5px;
`;

export const CheckboxLabel = styled.label`
  cursor: pointer;
`;

export const OurInput = styled.span`

input {
    border-radius: var(--Dimensions-Spacing-md, 12px);
background: var(--Labels-label-background, #E9ECEF);
}

`;



// COmmunity page styles
