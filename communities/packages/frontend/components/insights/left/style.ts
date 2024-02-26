import styled from 'styled-components';
import { Layout } from '../../../constants';
interface DivAProps {
  id?: string;
  fullWidth?: boolean;
  center?: boolean;

  active?: string;
  hasHover?: boolean;
}
export const DivWrapLeftInsignPage = styled.div`
  margin-top: -${Layout.HEADER_HEIGHT}px;
  padding-top: ${Layout.HEADER_HEIGHT}px;
  width: 20%;

  height: 100vh;
  @media (min-width: ${(p) => p.theme.screen.md}) {
    border-right: 1px solid ${(p) => p.theme.colors.border.main};
  }
`;

export const TitleLeftInsign = styled.p`
  font-weight: 700;
  font-size: 18px;
  padding-left: 20px;
`;

export const SubTitleLeftInsign = styled.p`
  font-weight: 500;
  font-size: 14px;
  color: #a3adbb;
  margin-bottom: 70px;
  padding-left: 20px;
`;

export const LineLeftInsight = styled.div<DivAProps>`
  width: 100%;
  padding-left: 20px;
  border-radius: 12px;
  margin-bottom: 20px;
  border: 1px solid transparent;
  background-color: ${(p) => (p.active !== p.id ? '' : '#E6F0ED')};
  cursor: pointer;
  font-size: 16px;
  color: #1d242d;
  display: flex;
  justify-content: start;
`;

export const TitleLineLeft = styled.p``;

export const ImgLineLeft = styled.img`
  height: 32px;
  width: 32px;
  margin-right: 2px;
  display: inline-block;
`;

export const ImageContainer = styled.div<{ size: string; mt?: string; mr?: string }>`
  height: ${(p) => p.size}px;
  width: ${(p) => p.size}px;
  margin-right: ${(p) => p.mr}px;
  margin-top: ${(p) => p.mt}px;

  overflow: hidden;
  flex-shrink: 0;
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
