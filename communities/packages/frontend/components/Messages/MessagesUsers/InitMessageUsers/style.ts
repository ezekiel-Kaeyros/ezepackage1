import styled from 'styled-components';

export const MyButton = styled.span`
  display: flex;
  justify-content: end;
  margin-top: 2rem;
`;

export const Button1 = styled.button<{ colored?: string; background?: string; border?: string }>`
  display: flex;
  padding: 8px 12px;
  justify-content: flex-end;
  align-items: center;
  font-weight: 700;
  font-size: 18px;
  gap: 5px;
  border-radius: 12px;
  border: ${(p) => p.border};
  color: ${(p) => p.colored};
  background-color: ${(p) => p.background};
  cursor: pointer;
  margin: 10px 0 0 0;
`;

export const ImageStatus = styled.div`
  width: 40px;
  height: 40px;
  position: relative;
`;

export const Status = styled.div<{ backgrounded?: string }>`
  position: absolute;
  width: 13.167px;
  height: 13.167px;
  flex-shrink: 0;
  right: 1px;
  bottom: 0px;
  background-color: ${(p) => p.backgrounded};
  border-radius: 20px;
`;

// COmmunity page styles
