import styled from 'styled-components';

export const MyButton = styled.span`
display: flex;
justify-content: end;


`;

export const Button1 = styled.button<{ colored?: string, background?: string, border?: string }>`

    display: flex;
padding: 12px 24px;
justify-content: flex-end;
align-items: center;
font-weight: 700;
font-size: 18px;
gap: 5px;
    border-radius: 12px;
    border: ${(p) => p.border};
    color: ${(p) => p.colored};
    background-color: ${(p) => p.background}; 
 margin: 1%;



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
