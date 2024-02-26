import styled from 'styled-components';
import { Layout } from '../../../../constants';

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

export const SpanBtn = styled.div<{ size?: string; mt?: string; mr?: string }>`
  font-size: ${(p) => p.size}px;
  margin-top: ${(p) => p.mt}px;
`;

export const SectionStep2 = styled.div`
  width: 100%;
  margin-top:40px;
  height:auto
 
`;

export const LineSectionStep2 = styled.div`
  width: 100%;
color:#47586E;
  margin-bottom: 10px;
  font-weight: 600;
  display: flex;
  justify-content: space-between;
  padding: 20px 10px;
  border: 1px solid #a3adbb;
  border-radius: 12px;
`;

export const LeftLineSectionStep2 = styled.div`
  display: flex;
  color: #47586e;
`;
