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

export const Button3 = styled.button`

letter-spacing: 0.5px;
outline: 0;
transition: opacity 0.1s;
border: 0;
color: #fff;
font-size: 16px;
padding: 10px 40px;
background-color: #01533C;
border-radius: 8px;
font-weight: 400;
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
white-space: nowrap;
@media only screen and (max-width: 768px) {
    width: 310px;
    height: 44px;
    margin: 0 6px;
   }


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

// COmmunity page styles
