import styled from 'styled-components';

export const Root = styled.div`
  width: 100%;
  height: 300px;
  display: flex;
  flex-direction: column;
  align-items: left;
  // justify-content: space-between;
  background-color: white;
  padding: 16px 16px;
  //padding: ${(p) => p.theme.spacing.sm};
  border-radius: ${(p) => p.theme.radius.sm};
  transition: border-color 0.1s;
  box-shadow: ${(p) => p.theme.shadows.sm};
  @media only screen and (max-width: 768px) {
    margin-bottom: 5%;
  }
`;

export const Wrapper = styled.div`
  width: 100%;
  // max-width: ${(p) => p.theme.screen.lg};
  //margin: 0 auto;
  display: grid;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  // grid-template-columns: auto auto auto auto;
  grid-template-columns: repeat(auto-fill, minmax(40%, 3fr));
  grid-auto-rows: auto;
  grid-gap: 20px;

  margin-bottom: ${(p) => p.theme.spacing.lg};

  @media only screen and (max-width: 768px) {
    display: block;
    padding: 0 1%;
  }
`;

export const ImageContainer = styled.div``;

export const BlockFollow = styled.div`
  display: flex;
  // border: 1px solid red;
`;

export const BanqueImage = styled.div`
  display: flex;
  margin-left: 10px;
`;
export const ListImage = styled.div`
  margin-left: -10px;
`;

export const HeaderContainer = styled.div`
  width: 100%;
  // margin-top: 15px;
  overflow: hidden;
  flex-shrink: 0;
  display: flex;
  padding: var(--input-seclected, 14px 0px);

  align-items: flex-start;
`;

export const DescriptionContainer = styled.div`
  display: flex;
  padding: var(--input-seclected, 0px);

  flex-direction: column;
  align-items: flex-start;
  gap: var(--spacing-4---grid-1, 4px);
`;

/* export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`; */

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
  align-items: left;
  justify-content: left;
  color: var(--colors-text-colors-primary, #1d242d);

  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;


export const InnerWrapper = styled.div`
  height: 100%;
  display: flex; 
  // background-color: black; 
  flex-direction: column;
  justify-content: space-between;
`;

export const MainUpperContent = styled.div`
  // height: 100%;
  display: flex; 
  flex-direction: column;
  // justify-content: space-between;
`;

export const MembersNumber = styled.p`
  width: 200px;
  align-items: left;
  justify-content: left;
  color: var(--colors-text-Placeholder, #a3adbb);
  margin: 0px 5px;

  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 120%;
`;

export const BlockMembers = styled.div`
  display: flex;
`;

export const MyButton = styled.div`
  display: flex;
  justify-content: space-between;

  button {
    width: 50%;
    padding-bottom: 6px 10px;
  }
`;

export const Description = styled.span`
  color: var(--colors-text-colors-secondary, #47586e);

  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 120%; /* 19.2px */
`;

export const ListMembers = styled.span`
  width: 200px;
  align-items: left;
  justify-content: left;
  margin-left: 5px;
  color: #000;

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

// COmmunity page styles
