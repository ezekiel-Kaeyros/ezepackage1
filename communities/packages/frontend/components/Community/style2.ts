import styled from 'styled-components';

export const Root = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: left;
  justify-content: space-between;
  background-color: white;
  padding: 0px 10px;
  //padding: ${(p) => p.theme.spacing.sm};
  border-radius: ${(p) => p.theme.radius.sm};
  transition: border-color 0.1s;
  box-shadow: ${(p) => p.theme.shadows.sm};
`;

export const Wrapper = styled.div`
  width: 67%;
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

export const BodyCommunity = styled.div`
  display: flex;
  width: 100%;
  // max-width: ${(p) => p.theme.screen.lg};
  margin: 0 auto;
  justify-content: space-between;
  // border: 1px solid red;
  //background-color: red;
  margin-bottom: ${(p) => p.theme.spacing.lg};
`;

export const LeftSection = styled.div`
  width: 60%;
  justify-content: start;
  align-items: flex-start;
  max-width: ${(p) => p.theme.screen.lg};

  background-color: #fff;
  margin-bottom: ${(p) => p.theme.spacing.lg};
`;

export const RightSection = styled.div`
  width: 40%;
  justify-content: end;
  align-items: flex-end;

  background-color: #fff;
  padding-top: 20px;
`;

export const Title = styled.h2`
  color: var(--colors-text-colors-secondary, #47586e);
  /* Desktop/Button Text */

  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin-left: 20px;
`;

export const ListCommunity = styled.div`
  display: flex;
  padding: 10px;
  justify-content: start;
  align-items: flex-start;
  gap: 20px;
  margin-left: 10px;
  margin-top: 10px;
  margin-bottom: 30px;
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

export const ImageSearch = styled.div`
  position: absolute;
  width: 24px;
  height: 24px;
  top: 8px;
  left: 10px;
  margin-right: ${(p) => p.theme.spacing.xs};
`;
export const ItemAll = styled.span<{ underlined?: string }>`
  color: var(--colors-text-colors-secondary, #47586e);
  cursor: pointer;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  text-decoration: ${(p) => p.underlined};
`;
export const ItemData = styled.span<{ background?: string }>`
  display: flex;
  cursor: pointer;
  padding: var(--spacing-4---grid-2, 8px) var(--spacing-4---grid-3, 12px);
  justify-content: center;
  align-items: center;
  gap: var(--spacing-4---grid-3, 12px);
  border-radius: var(--raduis-full, 104px);
  background: ${(p) => p.background};
`;
export const ItemAgro = styled.span`
  color: var(--colors-text-colors-secondary, #47586e);

  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;
export const ItemMicrobio = styled.span`
  color: var(--colors-text-colors-secondary, #47586e);

  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

export const SearchContainer = styled.div`
  position: relative;
  height: 40px;
  width: 95%;
  margin-bottom: 30px;
  margin-left: 2%;
  border: none;
`;
