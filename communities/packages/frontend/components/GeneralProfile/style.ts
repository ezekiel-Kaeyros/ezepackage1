import styled from 'styled-components';
import BackgroundProfile from '../../public/profile/Rectangle29.svg';

export const Root = styled.div`
//background-color: red;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
 
  padding: 0px 10px;
  //padding: ${(p) => p.theme.spacing.sm};
  border-radius: ${(p) => p.theme.radius.sm};
  transition: border-color 0.1s;
  box-shadow: ${(p) => p.theme.shadows.sm};
`;

export const HeaderProfile = styled.div`

width: 100%;


position: relative;
`;

export const MyImage = styled.div`

bottom: 10%;

  left: 50%;
  transform: translate(-50%, 8%);


position: absolute;

@media only screen and (max-width: 768px) {
  width: 15%;

}

`;
export const MyButton = styled.div`

bottom: 4%;
right: 2%;
position: absolute;

Button {
  color: var(--colors-text-colors-primary, #1D242D);
  
padding: var(--raduis-sm, 8px) var(--raduis-md, 16px);

gap: 5px;

border-radius: var(--raduis-full, 104px);
background: var(--colors-surface-primary, #FFF);
}

`;

export const Wrapper = styled.div`
  width: 100%;
  max-width: ${(p) => p.theme.screen.lg};
  margin: 0 auto;
  display: grid;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  grid-template-columns: repeat(auto-fill, minmax(180px, 3fr));
  //grid-template-columns: auto auto auto auto;
  grid-auto-rows: auto;
  grid-gap: 20px;
  margin-bottom: ${(p) => p.theme.spacing.lg};
`;

export const TopProfile = styled.div`
display: flex;
padding: var(--input-seclected, 0px);

flex-direction: column;
justify-content: center;
align-items: center;
gap: var(--spacing-4---grid-1, 4px);
`;




export const LocalisationProfile = styled.div`
display: flex;
grid-template-columns: auto auto auto;
  grid-auto-rows: auto;
  grid-gap: 20px;

`;
export const Title = styled.h2`
margin-bottom: -14px;
color: #000;
font-size: 18px;
font-style: normal;
font-weight: 500;
line-height: normal;

`;

export const ItemProfile = styled.p`
color: var(--colors-text-Placeholder, #A3ADBB);
font-family: Satoshi;
font-size: 14px;
font-style: normal;
font-weight: 500;
line-height: normal;

`;

export const Divider = styled.div`
border-left: 1px solid #A3ADBB;
height: var(--input-seclected, 16px);

`;
export const ContainPage = styled.div`
  display: flex;
  width: 100%;
  margin-top: 50px;
//  padding: 0 5%;
 
 justify-content: center;

 @media only screen and (max-width: 768px) {
  
  display: grid;
  }
  
`;

export const LeftContainPage = styled.div`
  width: 60%;
margin-right: 3%;
  @media only screen and (max-width: 768px) {
    width: 100%;
    padding: 0 5%;
  
  }
`;



export const RightContainPage = styled.div`
width: 23%;

@media screen and (max-width: 1024px) {
  width: 30%;
  
  
}
@media screen and (max-width: 768px) {
  width: 100%;
  padding: 0 5%;
  
  
}

`;
