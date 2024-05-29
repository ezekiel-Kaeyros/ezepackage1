import styled from 'styled-components';

export const Root = styled.div`

width: 205px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  background-color: white;
  padding: 0px 10px;
  //padding: ${(p) => p.theme.spacing.sm};
  border-radius: ${(p) => p.theme.radius.sm};
  transition: border-color 0.1s;
  box-shadow: ${(p) => p.theme.shadows.sm};
`;

export const WrappButton = styled.div`
  margin-bottom: 1rem;
  // width: 100%;
  // max-width: ${(p) => p.theme.screen.lg};
  // margin: 0 auto;
  // display: grid;
  // border-top-left-radius: 15px;
  // border-top-right-radius: 15px;
  // grid-template-columns: repeat(auto-fill, minmax(180px, 3fr));
  // //grid-template-columns: auto auto auto auto;
  // grid-auto-rows: auto;
  // grid-gap: 20px;
  // margin-bottom: ${(p) => p.theme.spacing.lg};
`;

export const Wrapper = styled.div`
  width: 100%;
  max-width: ${(p) => p.theme.screen.lg};
  margin: 0 auto;
  display: grid;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  grid-template-columns: repeat(auto-fill, minmax(180px, 200px));
  //grid-template-columns: auto auto auto auto;
  justify-content: center;
  grid-auto-rows: auto;
  grid-gap: 20px;
  margin-bottom: ${(p) => p.theme.spacing.lg};
`;

export const ImageContainer = styled.div`
  width: 205px;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  height: 150PX;
  //border-radius: 50%;
  overflow: hidden;
  flex-shrink: 0;


  Image: {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const Imaged = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const InitialLetters = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  text-transform: uppercase;
  color: ${(p) => p.theme.colors.general.white};
  font-size: ${(p) => p.theme.font.size.lg};
  background-color: ${(p) => p.color};
`;

export const FullName = styled.span`

  width: 200px;
  align-items: left;
  justify-content: left;
  text-align: center;
  padding: 0px 5px;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 120%;
  text-transform: capitalize;
`;

export const Description = styled.p`
  width: 200px;
  align-items: left;
  justify-content: left;
  padding: 0px 5px;
  color: var(--colors-text-Placeholder, #A3ADBB);
  
  font-family: Satoshi;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 120%;
`;


export const UserName = styled.span`
  font-size: ${(p) => p.theme.font.size.xs};
  color: ${(p) => p.theme.colors.general.text};
  margin-top: 4px;
`;