import styled from 'styled-components';
import BackgroundProfile from '../../public/profile/Rectangle29.svg';

export const Root = styled.div`
background-color: #fff;
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

//background-image: url('${BackgroundProfile}');
position: relative;
`;

export const MyImage = styled.div`

bottom: 5%;
left: 45%;
position: absolute;
//background-image: url(${BackgroundProfile});

`;
export const MyButton = styled.div`
width: 100%;
display: flex;
justify-content: center;
// bottom: 4%;
// right: 1%;
// position: absolute;

// Button {
//   color: var(--colors-text-colors-primary, #1D242D);
//   display: inline-flex;
// padding: var(--raduis-sm, 8px) var(--raduis-md, 16px);
// justify-content: center;
// align-items: center;
// gap: 5px;

// border-radius: var(--raduis-full, 104px);
// background: var(--colors-surface-primary, #FFF);
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
color: #000;
font-size: 18px;
font-style: normal;
font-weight: 700;
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
 // display: flex;
  width: 100%;
 padding: 2%;

//  justify-content: space-between;
 
  
`;

export const LeftContainPage = styled.div`
 //width: 100%;

 boder: 1px solid red;
  
 @media (min-width: 576px) {
  width: 100%;
  
}
 @media (min-width: 768px) {
  width: 100%;
  
}

@media (min-width: 992px) { 
  width: 100%;
 }


@media (min-width: 1200px) { 
  width: 100%;
 }


@media (min-width: 1400px) { 
  width: 80%;
 } 


`;





export const RightContainPage = styled.div`
/* width: 30%;
justify-content: end;
align-items: flex-end;
margin-left: 28%; */
`;


export const SearchContainer = styled.div`
  position: relative;
  height: 40px;
  width: 100%;
  margin-bottom: 30px;
  //margin-left: 2%;
 
 
`;

export const ImageSearch = styled.div`
  position: absolute;
  width: 24px;
  height: 24px;
  top: 8px;
  left: 10px;
  margin-right: ${(p) => p.theme.spacing.xs};
`;

export const InputSearch = styled.input`
  width: 100%;
  height: 100%;
  border-radius: 104px;
  background-color: #e9ecef;
  padding-left: 40px;

  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 19.2px;
  border: none;

  &:hover {
    border: 1px solid #e9ecef;
    background-color: #fff;
  }
  &:focus {
    outline: none;
  }
`;
