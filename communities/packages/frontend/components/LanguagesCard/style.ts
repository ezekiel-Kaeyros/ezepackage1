import styled from 'styled-components';

export const Root = styled.div`
display: flex;
width: 100%;
padding: 8%;

flex-direction: column;
justify-content: center;
align-items: flex-center;
gap: 20px;
border-radius: var(--spacing-4---grid-3, 12px);
border: var(--input-seclected, 1px) solid var(--colors-border-btn-colors, #A3ADBB);
background: var(--colors-white, #FFF);

`;


export const ImageContainer = styled.div`
display: flex;
width: 30%;
justify-content: end;
`;

export const BlockFollow = styled.div`
  display: flex;
`;
export const Title = styled.h2`
color: var(--colors-text-colors-primary, #1D242D);
font-size: 18px;
font-style: normal;
font-weight: 700;
line-height: normal;
margin-right: 25px;
`;
export const SubTitle = styled.span`
color: var(--colors-text-colors-secondary, #47586E);

flex-direction: column;
justify-content: center;
align-items: flex-center;
font-size: 16px;
font-style: normal;
font-weight: 700;
line-height: 120%; 
margin-right: 10px;
`;

export const SubTitleFont = styled.span`
color: var(--colors-text-colors-secondary, #47586E);
font-size: 16px;
font-style: normal;
font-weight: 400;
line-height: normal;
margin-right: 10px;
`;


export const BanqueImage = styled.div``;

export const HeaderContainer = styled.div`
width: 100%;
  display: flex;
 justify-content: space-between;
  
`;
export const Button = styled.span`
display: flex;
padding: var(--spacing-4---grid-1, 4px) var(--raduis-sm, 8px);
color: var(--colors-text-colors-secondary, #47586E);

font-size: 16px;
font-style: normal;
font-weight: 600;
justify-content: center;
align-items: center;
gap: 10px;
border-radius: var(--spacing-4---grid-3, 12px);
background: var(--colors-surface-secondary, #E6F0ED);
`;

export const OtherButton = styled.div`
color: var(--colors-text-colors-secondary, #47586E);
font-size: 16px;
font-style: normal;
font-weight: 500;

display: flex;
padding: 10px;
justify-content: center;
align-items: center;
gap: 1px;
align-self: stretch;

border-radius: var(--spacing-4---grid-3, 12px);
border: var(--input-seclected, 1px) solid var(--borders, #B2BBC6);
background: var(--colors-surface-primary, #FFF);

  
`;
export const FrenchContainer = styled.div`
width: 100%;
  display: flex;

  
`;
export const TopSection = styled.div`
padding-bottom: 15px;
display: grid;
border-bottom: 1px solid rgba(163, 173, 187, 0.30);
gap: 15px;
  
`;

export const BottomSection = styled.div`
padding-top: 0px;
display: grid;
gap: 15px;
margin-top: -12px;
  
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
width: 100%;
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
