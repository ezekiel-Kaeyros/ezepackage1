import styled from 'styled-components';



export const Wrapper = styled.div`
width: 100%;
    margin: 0 auto;
   //  display: grid;
    border-top-left-radius: 15px;
    border-top-right-radius: 15px;
   // grid-template-columns: repeat(auto-fill, minmax(25%, 3fr));
    //  grid-template-columns: repeat(3, minmax(0, 1fr));
    grid-auto-rows: auto;
    grid-gap: 20px; 
    
   /*  display: flex;
    flex-wrap: wrap;
    margin-bottom: 40px;
    gap: 20px; */

    
     @media (min-width: 576px) {
      display: block;
   //   grid-template-columns: repeat(1, minmax(100%, 3fr));
      
    }
    @media (min-width: 768px) {
      display: grid;
      grid-template-columns: repeat(2, minmax(40%, 3fr));
      
    }
   
    @media (min-width: 992px) { 
      display: grid;
      grid-template-columns: repeat(2, minmax(35%, 3fr));
     }
  
  
    @media (min-width: 1200px) { 
      display: grid;
      grid-template-columns: repeat(3, minmax(25%, 3fr));
     }
  
  
    @media (min-width: 1400px) { 
      display: grid;
      grid-template-columns: repeat(3, minmax(25%, 3fr));
     }

    

`;

export const Root = styled.div`
width: 100%;
  //width: 30%;
  display: flex;
  flex-direction: column;
  align-items: left;
  justify-content: space-between;
  background-color: white;
  padding: 16px 16px;
  //padding: ${(p) => p.theme.spacing.sm};
  border-radius: ${(p) => p.theme.radius.sm};
  transition: border-color 0.1s;
  box-shadow: ${(p) => p.theme.shadows.sm};
  
  @media only screen and (max-width: 768px) {
    // gap: 20px;
     
    margin-bottom: 20px;
  
   }

  /* @media (min-width: 576px) {
    width: 100%;
    
  }
  @media (min-width: 768px) {
    width:40%;
    
  }
 
  @media (min-width: 992px) { 
    width: 40%;
   }


  @media (min-width: 1200px) { 
    width: 30%;
   }


  @media (min-width: 1400px) { 
    width: 25%;
   } */
`;

export const ImageContainer = styled.div`
  width: 20%;
  display: flex;
`;

export const BlockFollow = styled.div`
  display: flex;
`;

export const BanqueImage = styled.div`
display: flex;
margin-left: 10px;

`;

export const OurImage = styled.div`
margin-left: -10px;
`;


export const Public = styled.div`
/* display: flex;
align-items: baseline; */
display: flex;

`;

export const HeaderContainer = styled.div`
display: flex;
width: 100%;

`;

export const DescriptionContainer = styled.div`
  width: 80%;
  display: flex;
  padding: 0px 10px;

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

export const MembersNumber = styled.p`
  
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
//width: 45%;
margin-top: 8%;

`;

export const Button1 = styled.button`
display: flex;
padding: 8px 12px;
justify-content: center;
align-items: center;
gap: var(--spacing-4---grid-2, 8px);
border-radius: var(--raduis-full, 104px);
background: var(--colors-button-color, #015E44);
color: #ffffff;
font-size: 16px;
font-style: normal;
font-weight: 400;
line-height: normal;
border: none;

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
