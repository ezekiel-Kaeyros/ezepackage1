import styled from 'styled-components';
import { ProfileLoading } from './ChannelInfo';

interface CoverPhotoProps {
  image?: string;
  isLoading: ProfileLoading;
}

export const Heading = styled.div`
  text-align: center;
  margin-bottom: ${(p) => p.theme.spacing.md};
  padding-bottom: ${(p) => p.theme.spacing.sm};
  border-bottom: 1px solid ${(p) => p.theme.colors.border.main};
`;

export const LabelAndToggle = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const ButtonContainer = styled.div`
  border-top: 1px solid ${(p) => p.theme.colors.border.main};
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  padding-top: ${(p) => p.theme.spacing.sm};
`;

// Channel info styles

interface CoverPhotoProps {
  image?: string;
  isLoading: ProfileLoading;
}

export const CoverPhoto = styled.div<CoverPhotoProps>`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  position: relative;
  width: 100%;
  max-width: 100%;
  margin: 0 auto;
  margin-bottom: 16rem;
  height: 350px;
  ${(p) =>
    p.isLoading !== ProfileLoading.CoverPicture &&
    `background-image: url(${p.image ? p.image : 'https://bit.ly/3pxODji'}) `};
  background-size: cover;
  background-position: center;
  /* border-bottom-left-radius: ${(p) => p.theme.radius.md}; */
  /* border-bottom-right-radius: ${(p) => p.theme.radius.md}; */
  box-shadow: ${(p) => p.theme.shadows.sm};

  @media (max-width: ${(p) => parseInt(p.theme.screen.lg, 10) + 20 + 'px'}) {
    margin-bottom: 28rem;
    height: 250px;
  }
`;

export const CoverLoading = styled.div`
  position: absolute;
  right: 30px;
  top: 30px;
`;

export const ProfilePhoto = styled.div`
  margin-left: 4rem;
  margin-right: 0;
  position: relative;
  margin-top: -10rem;
  height: 119px;
  width: 119px;
  margin-bottom: -50px;
  border-radius: 50%;
  background-color: ${(p) => p.theme.colors.general.white};
  display: flex;
  justify-content: center;
  @media (max-width: ${(p) => p.theme.screen.sm}) {
    margin-top: 18rem;
    margin-left: 0rem;
    margin-bottom: 0;
  }
`;

export const ProfileImageWrapper = styled.div`
  position: absolute;
  left: 70px;
  bottom: 15px;
  @media (max-width: ${(p) => p.theme.screen.sm}) {
    left: 80px;
    bottom: -50px;
  }
`;

export const CoverImageWrapper = styled.div`
  position: absolute;
  right: ${(p) => p.theme.spacing.xs};
  top: ${(p) => p.theme.spacing.xs};

  @media (min-width: ${(p) => p.theme.screen.sm}) {
    top: auto;
    bottom: ${(p) => p.theme.spacing.xs};
  }
`;

export const Info = styled.div`
  margin-top: ${(p) => p.theme.spacing.xl};
  text-align: center;
`;

export const ProfileDetails = styled.div`
  display: flex;
  margin-top: 3rem;
  align-items: center;
  gap: 4rem;
  position: absolute;
  bottom: 0;
  left: 0;
  top: 100%;
  background-color: antiquewhite;

  @media (max-width: ${(p) => parseInt(p.theme.screen.lg, 10) + 20 + 'px'}) {
    flex-direction: column;
    justify-content: center;
    text-align: center;
    width: 100%;
  }
`;

export const DetailsList = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 2rem;
  padding-top: 6rem;
  width: 100%;
  column-gap: 1rem;

  @media (max-width: ${(p) => parseInt(p.theme.screen.lg, 10) + 20 + 'px'}) {
    flex-direction: column;
    justify-content: center;
    padding-top: 2rem;
  }
`;

export const DetailsText = styled.div`
  margin-bottom: 1rem;
  font-weight: normal;
  display: flex;
  flex-direction: column;
`;

export const DecriptionText = styled.h3`
  font-size: 16px;
  opacity: 0.8;
  font-weight: normal;
`;

export const DetailsInfo = styled.div`
  display: flex;
  align-items: center;
  max-width: 100%;
  min-width: 80%;
  column-gap: 2rem;

  @media (max-width: ${(p) => parseInt(p.theme.screen.lg, 10) + 20 + 'px'}) {
    flex-direction: row;
    column-gap: 0rem;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    font-size: 12px;
  }
`;

export const Detail = styled.div`
  opacity: 0.6;
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const DetailText = styled.h3``;

export const ButtonGroup = styled.div`
  display: flex;
  column-gap: 1rem;

  @media (max-width: ${(p) => parseInt(p.theme.screen.lg, 10) + 20 + 'px'}) {
    margin-top: -2rem;
  }
`;

export const JoinButton = styled.button`
  display: flex;
  padding: 10px 1.5rem;
  column-gap: 5px;
  cursor: pointer;
  border-radius: 0.5rem;
  background-color: ${(p) => p.theme.colors.general.link};
  color: ${(p) => p.theme.colors.general.white};
  border: none;
  align-items: center;
`;

export const LeaveButton = styled.button`
  display: flex;
  padding: 10px 1.5rem;
  column-gap: 5px;
  cursor: pointer;
  border-radius: 0.5rem;
  background-color: ${(p) => p.theme.colors.general.error};
  color: ${(p) => p.theme.colors.general.white};
  border: none;
  align-items: center;
`;

export const ShareButton = styled.button`
  border: 2px solid ${(p) => p.theme.colors.general.link};
  display: flex;
  align-items: center;
  background-color: 'red';
  display: flex;
  padding: 10px 1.5rem;
  border-radius: 0.5rem;
  column-gap: 5px;
  cursor: pointer;
  border: none;
  align-items: center;
`;
