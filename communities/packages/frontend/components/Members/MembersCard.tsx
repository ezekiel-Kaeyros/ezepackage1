import React, { FC, useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import Image from 'next/image';
import { Root, ImageContainer, Imaged, InitialLetters, FullName, Description, UserName } from './style';
import { Button, Link, Spacing } from '../ui';
import Follow from '../Follow';
import theme from '../../theme';
import { RootState } from '../../store';
import FOE_image from 'img_p1.png';
import iconButton from '../../public/add-circle.svg';

interface MembersCardProps {
  user: any;
  queryKey: any;
}

const MembersCard: FC<MembersCardProps> = ({ user, queryKey }) => {
  const [color, setColor] = useState('');
  const authUser = useSelector((state: RootState) => state.auth.user);

  const { fullName, username, image } = user;

  useEffect(() => {
    const { primary, secondary, success, error } = theme.colors.general;
    const colors = [primary, secondary, success, error];
    const randomColor = Math.floor(Math.random() * colors.length);
    setColor(colors[randomColor]);
  }, []);

  const splitFullName = () => {
    const splitWords = fullName.split(' ').slice(0, 2).join(' ');
    const firstLetters = splitWords
      .split(' ')
      .map((a) => a.charAt(0))
      .join(' ');

    return firstLetters;
  };

  return (
    <Root>
      <Link href={`/communities/profile/${user._id}`} disableBorderOnHover>
        <ImageContainer>
          {image ? (
            <Imaged alt="{user.fullName}" src={image} />
          ) : (
            <InitialLetters color={color}>{splitFullName()}</InitialLetters>
          )}
        </ImageContainer>
      </Link>

      <Spacing top="sm">
        <Link href={`/communities/profile/${user._id}`} disableBorderOnHover weight="bold" color="textSecondary">
          <FullName>{fullName}</FullName>
        </Link>
      </Spacing>
      <Spacing bottom="xs">
        <Description>{`Président du comité d'organisation chez International`} </Description>
      </Spacing>

      {/* <Button color="ezeColor" radius="full" fullWidth>
        <Image alt="icon" src={iconButton} />
        &nbsp;Follow
      </Button> */}
      {username ? <UserName>@{username}</UserName> : <Spacing top="sm" />}

      {authUser && <Follow queryKey={queryKey} user={user} />}
    </Root>
  );
};
export default MembersCard;