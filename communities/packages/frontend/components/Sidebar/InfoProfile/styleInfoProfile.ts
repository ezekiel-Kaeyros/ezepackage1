import styled from 'styled-components';



export const TopProfile = styled.div`
display: flex;

width: 100%;

flex-direction: column;
justify-content: left;
align-items: left;
gap: var(--spacing-4---grid-1, 4px);
border-bottom: 1px solid #B2BBC64D;
padding-bottom: 20px;
margin-bottom: 10px;
@media only screen and (max-width: 768px) {
  justify-content: left;
  display: grid;
  width: 100%;
  padding: 0 16px 20px 16px;
  margin-top: -5%;
  
}

`;

export const Img = styled.div`
display: flex;
justify-content: left;

`;




export const LocalisationProfile = styled.div`
display: flex;

grid-template-columns: auto auto auto;
  grid-auto-rows: auto;
  grid-gap: 20px;

  @media only screen and (max-width: 768px) {
    width: 100%;
    flex-wrap: wrap;
    display: flex;
    grid-gap: 12px;
    
  }

`;

export const ListButtonProfile = styled.div`

width: 100%;
display: flex;
justify-content: center;
  grid-gap: 20px;
  @media only screen and (max-width: 768px) {
    grid-gap: 10px;
    display: flex;
    flex-wrap: wrap;
    
  }
`;
export const MyButton = styled.div`

Button{
    color: var(--colors-button-color, #015E44);
    font-size: 18px;
font-style: normal;
font-weight: 600;
line-height: normal;

display: flex;
padding: var(--raduis-sm, 8px) var(--raduis-md, 16px);
justify-content: center;
align-items: center;
gap: 5px;
    border-radius: var(--spacing-4---grid-3, 12px);
border: 1px solid var(--colors-button-color, #015E44);

@media only screen and (max-width: 768px) {
  font-size: 19px;
  
}
}
`;


export const EditProfile = styled.div`
display: flex;
grid-template-columns: auto auto;
  grid-gap: 20px;

Button {
    display: flex;
padding: var(--raduis-sm, 8px) var(--raduis-md, 16px);
justify-content: center;
align-items: center;
gap: 5px;
}

@media only screen and (max-width: 768px) {
  width: 100%;
  grid-gap: 3%;
}

`;
export const EditAction1 = styled.span`


Button {
    display: flex;
    padding: var(--raduis-sm, 11px) var(--raduis-md, 16px);
justify-content: center;
align-items: center;
gap: 5px;
}

@media only screen and (max-width: 768px) {
  width: 85%;

  Button {
    width: 100%;

  }
}

`;
export const EditAction2 = styled.span`


Button {
    display: flex;
padding: var(--raduis-sm, 11px) var(--raduis-md, 16px);
justify-content: center;
align-items: center;
gap: 5px;
}

@media only screen and (max-width: 768px) {
  width: 15%;
  Button {
    width: 100%;

  }
}

`;


export const ListStatistique = styled.div`
width: 100%;
display: flex;
grid-template-columns: auto auto auto;
  grid-auto-rows: auto;
  grid-gap: 20px;

  @media only screen and (max-width: 768px) {
    width: 100%;
  }

`;
export const Statistique = styled.div`
width: 25%;
    display: flex;
    padding: var(--input-seclected,0px);
    align-items: baseline;
    gap: 1px;
    border-radius: var(--input-seclected,0px);
    position: relative;
    flex-direction: row;
    flex-wrap: nowrap;
    /* align-content: stretch; */
    justify-content: space-evenly;

`;
export const DividerStat = styled.span`
position: absolute;

left: -5px;

width: 1px;
height: var(--input-seclected, 16px);
border-radius: var(--input-seclected, 0px);
background: var(--colors-text-Placeholder, #A3ADBB);

`;
export const Stat = styled.h2`
color: var(--colors-text-colors-primary, #1D242D);
font-size: 16px;
font-style: normal;
font-weight: 700;
line-height: 120%;
margin-bottom: 5px;

`;
export const TitleStat = styled.span`
color: var(--colors-text-colors-secondary, #47586E);
font-size: 16px;
font-style: normal;
font-weight: 400;
line-height: 120%;

`;
export const Title = styled.h2`

color: #000;
font-size: 18px;
font-style: normal;
font-weight: 500;
line-height: normal;

`;

export const ItemProfile = styled.span`
display: flex;
color: var(--colors-text-Placeholder, #A3ADBB);
font-family: Satoshi;
font-size: 14px;
font-style: normal;
font-weight: 500;
line-height: normal;

`;

