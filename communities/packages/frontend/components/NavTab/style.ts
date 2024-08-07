import styled from 'styled-components';

interface IconProps {
   isActive: boolean;
  children: React.ReactNode;
}

export const Icon = styled.div<IconProps>`
  fill: ${(p) => p?.isActive && 'red'};
`;

export const Root = styled.div<{children:React.ReactNode}>`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Line = styled.div`
  height: 2px;
  margin-top: 2px;
  border-radius: 50%;
  background-color: #015e44;
  width: 100%;
`;
