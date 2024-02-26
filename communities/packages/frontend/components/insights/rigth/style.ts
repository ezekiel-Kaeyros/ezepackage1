import styled from 'styled-components';
import { Layout } from '../../../constants';

export const DivWrapRightInsignPage = styled.div`
  margin-top: -${Layout.HEADER_HEIGHT}px;
  padding-top: ${Layout.HEADER_HEIGHT}px;
  width: 70%;

  height: 100vh;
`;

export const BtnRightInsignPage = styled.button<{ color?: string; bg?: string }>`
  padding: 10px 20px;
  border-radius: 12px;
  font-size: 18px;
  font-weight: 700;
  border: 1px solid #015e44;
  display: flex;
  color: ${(p) => p.color};
  background-color: ${(p) => p.bg};

  width: auto;
`;

export const SpanBtn = styled.div<{
  size?: string;
  mt?: string;
  mr?: string;
  weight?: string;
  color?: string;
  cursor?: string;
}>`
  font-size: ${(p) => p.size}px;
  margin-top: ${(p) => p.mt}px;
  font-weight: ${(p) => p.weight};
  color: ${(p) => p.color};
  cursor: ${(p) => p.cursor};
`;


export const ContainerRightInsignPage = styled.div`
  width: 90%;
  margin:auto;
  margin-bottom:30px;
  padding: 20px;

  border: 1px solid #a3adbb;
  border-radius: 12px;
`;

export const HeaderRightInsignPage = styled.div`
  width: 100%;
 
  margin-bottom: 30px;
  

  
  display: flex;
  justify-content: space-between;
 
`;

export const TitleStepRightInsignPage = styled.p`
  font-size: 22px;
  color: #47586e;
  font-weight: bold;
  line-height: 26.4px;
  margin-bottom: 0px;
`;


export const BlockSectionLeftHeaderRightInsignPage = styled.div`
  display: flex;
  
`;
export const SectionLeftHeaderRightInsignPage = styled.div`
  display: flex;
 
 
  margin-right:10px;
  padding-left:0;
`;

export const TextSectionLeftHeaderRightInsignPage = styled.p`
  font-weight: 500;
  font-size: 14px;
  line-height: 21.84px;
  color: #47586e;
`;

export const ImageContainer = styled.div<{ size: string; mt?: string; mr?: string; cursor?: string }>`
  height: ${(p) => p.size}px;
  width: ${(p) => p.size}px;
  margin-right: ${(p) => p.mr}px;
  margin-top: ${(p) => p.mt}px;
  margin-left:0

  overflow: hidden;
  flex-shrink: 0;
  cursor: ${(p) => p.cursor};
`;
