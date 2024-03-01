import styled from 'styled-components';

export const Root = styled.div`

display: flex;
width: 100%;
padding: 2% 17%;

flex-direction: column;
justify-content: center;
align-items: center;
gap: 10px;
  border-radius: 8px;

  border: var(--input-seclected, 1px) solid var(--colors-border-btn-colors, #A3ADBB);

  background: var(--colors-surface-primary, #FFF);

  @media only screen and (max-width: 768px) {
    padding: 10px;
   }

`;

export const Wrapper = styled.div`
  width: 95%;
  max-width: ${(p) => p.theme.screen.lg};
  margin: 0 auto;
  display: grid;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  // grid-template-columns: auto auto auto auto;
  grid-template-columns: repeat(auto-fill, minmax(35%, 3fr));
  grid-auto-rows: auto;
  grid-gap: 20px;
  // padding-top: 20px;
  margin-bottom: ${(p) => p.theme.spacing.lg};
`;

export const ImageContainer = styled.div``;

export const BlockFollow = styled.div`
  display: flex;
`;

export const BanqueImage = styled.div``;

export const HeaderContainer = styled.div`

  width: 100%;
  margin-top: 15px;
  overflow: hidden;
  flex-shrink: 0;
  display: grid;
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
  color: var(--colors-text-colors-secondary, #47586E);
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: 120%; /* 24px */

  @media only screen and (max-width: 768px) {
    font-size: 18px;
   }
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
 

`;

export const Description = styled.span`
color: var(--colors-text-colors-secondary, #47586E);
text-align: center;
font-size: 16px;
font-style: normal;
font-weight: 400;
line-height: normal;
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
