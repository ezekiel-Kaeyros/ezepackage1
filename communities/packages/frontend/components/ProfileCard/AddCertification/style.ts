import styled from 'styled-components';

export const DateWorkshop = styled.span`
display: flex;
justify-content: space-between;
width: 100%;


`;
export const Day = styled.span`
width: 49%;
    display: grid;


`;
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
export const MyTextarea = styled.span`


label{
    color: var(--colors-text-colors-secondary, #47586E);
    font-size: 16px;
font-style: normal;
font-weight: 400;
line-height: 19.2px;
}
Textarea {
    color: var(--Labels-label-text, #6C757D);
    font-size: 16px;
font-style: normal;
font-weight: 400;
line-height: 19.2px;

    display: flex;
    min-height: 187px;
padding: var(--Dimensions-Spacing-lg, 16px);
align-items: flex-start;
gap: 8px;

align-self: stretch;

border-radius: var(--Dimensions-Spacing-md, 12px);
background: var(--Labels-label-background, #E9ECEF);
 
}

`;

export const BtnAddMedia = styled.span`
display: flex;
height: 48px;
flex-direction: column;
align-items: flex-start;
gap: 20px;

Button {
    color: var(--colors-text-colors-secondary, #47586E);
font-size: 14px;
font-style: normal;
font-weight: 600;
line-height: 120%;
    display: flex;
padding: 12px 24px;

justify-content: center;
align-items: center;
gap: 8px;
border-radius: var(--raduis-lg, 24px);
border: var(--input-seclected, 1px) solid var(--borders, #B2BBC6);
background: var(--colors-surface-primary, #FFF);
}

`;





// COmmunity page styles
