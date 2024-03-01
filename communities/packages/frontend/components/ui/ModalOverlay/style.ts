import styled from 'styled-components';

export const Root = styled.div`

  position: relative;
  top: ${(p) => p.theme.spacing.sm};
  left: 0;
  width: 100%;
  height: 100%;
  z-index: ${(p) => p.theme.zIndex.xl};
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
 
//  max-width: 35%;
  
 div {
  
  max-height: 100%;
 // overflow: overlay;
 }
 div::-webkit-scrollbar-track
 {

   -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
   background-color: #F5F5F5;
 }
 
 div::-webkit-scrollbar
 {
  
   width: 6px;
   background-color: #F5F5F5;
 }
 
 div::-webkit-scrollbar-thumb
 {
 
   background-color: #BEC3C9;
 }



  @media (min-width: ${(p) => p.theme.screen.md}) {
    align-items: center;
    top: 0;
  }
`;

interface HeadingProps {
  hideTitleBorder?: boolean;
}

export const Heading = styled.span<HeadingProps>`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
   align-items: center;
 text-align: center;

  padding-bottom: ${(p) => p.theme.spacing.sm};
  margin-bottom: ${(p) => p.theme.spacing.xs};
  //border-bottom: ${(p) => (p.hideTitleBorder ? 'none' : `1px solid ${p.theme.colors.border.main}`)};

  H2{
    font-size: 18px;
font-style: normal;
font-weight: 700;
line-height: normal;
  }

  `;
