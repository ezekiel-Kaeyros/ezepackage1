import styled from 'styled-components';

export const Root = styled.div`
  width: 80px;
  height: 100%;
  border-right: 1px solid ${(p) => p.theme.colors.border.main};
  display: flex;
  flex-direction: column;

  @media (min-width: ${(p) => p.theme.screen.lg}) {
    width: 400px;
  }
`;

export const HeadingContainer = styled.div`
  border-bottom: 1px solid ${(p) => p.theme.colors.border.main};
  height: 60px;
  padding: 0 ${(p) => p.theme.spacing.xs};
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  @media (min-width: ${(p) => p.theme.screen.lg}) {
    justify-content: space-between;
  }
`;

export const MessageHeading = styled.div`
  border-bottom: 0px solid ${(p) => p.theme.colors.border.main};
  margin-bottom: 20px;
  height: 60px;
  padding: 0 ${(p) => p.theme.spacing.xs};
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  @media (min-width: ${(p) => p.theme.screen.lg}) {
    justify-content: space-between;
  }
`;

export const MessageHeading2 = styled.div`
  padding: 0 ${(p) => p.theme.spacing.xs};
  display: flex;
  flex-direction: row-reverse;

  position: absolute;
  left: 230px;
  bottom: 18px;

  @media (min-width: ${(p) => p.theme.screen.lg}) {
    justify-content: space-between;
  }
`;

export const Heading = styled.h3`
  display: none;
  color: ${(p) => p.theme.colors.general.text};
  margin: 0;

  @media (min-width: ${(p) => p.theme.screen.lg}) {
    display: block;
  }
`;

export const SearchContainer = styled.div`
  display: none;
  border-bottom: 1px solid ${(p) => p.theme.colors.border.main};

  &:focus {
    background-color: ${(p) => p.theme.colors.grey[70]};
    border-radius: ${(p) => p.theme.radius.none};
  }

  @media (min-width: ${(p) => p.theme.screen.lg}) {
    display: block;
  }
`;

export const UserContainer = styled.div`
  overflow-y: auto;

  ::-webkit-scrollbar {
    width: 8px;
  }

  ::-webkit-scrollbar-thumb {
    background-color: ${(p) => p.theme.colors.grey[90]};
    border-radius: ${(p) => p.theme.radius.lg};
    visibility: hidden;

    &:hover {
      background-color: ${(p) => p.theme.colors.grey[80]};
    }
  }

  &:hover {
    ::-webkit-scrollbar-thumb {
      visibility: visible;
    }
  }
`;

interface UserProps {
  active?: boolean;
}

export const User = styled.div<UserProps>`
  width: 100%;
  border-radius: ${(p) => p.theme.radius.none};
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  color: ${(p) => p.theme.colors.general.text};
  padding: 22px 15px 22px 15px;

  ${(p) =>
    p.active &&
    `
  background-color: ${p.theme.colors.grey[100]};
  `}

  &:hover {
    background-color: ${(p) => p.theme.colors.grey[100]};
  }
`;

export const Info = styled.div`
  width: 100%;
  display: none;
  padding-left: ${(p) => p.theme.spacing.xs};
  margin-left: ${(p) => p.theme.spacing.xxs};

  @media (min-width: ${(p) => p.theme.screen.lg}) {
    display: block;
  }
`;

export const FullNameUnSeen = styled.div`
  width: 100%;
  font-size: ${(p) => p.theme.font.size.smD};
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const FullName = styled.div`
  text-overflow: ellipsis;
  width: 100%;
`;

export const UnSeen = styled.div`
  min-width: 8px;
  height: 8px;
  background-color: ${(p) => p.theme.colors.general.primary};
  border-radius: 50%;
`;

export const LastMessage = styled.div`
  margin-top: ${(p) => p.theme.spacing.xxs};
  font-size: ${(p) => p.theme.font.size.xxsD};
  color: ${(p) => p.theme.colors.general.textSecondary};
  text-overflow: ellipsis;
  width: 140px;
  white-space: nowrap;
  overflow: hidden;
`;

export const IconPlus = styled.div`
  position: absolute;
  bottom: 15px;
  left: 275px;
`;
