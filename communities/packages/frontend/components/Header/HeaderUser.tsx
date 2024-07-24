import React, { FC, RefObject } from 'react';
import { useSelector } from 'react-redux';
import { config, Cookies, deleteCookie, useClickOutside } from '../../utils';
import { UserDropDown, UserDropDownItem } from './style';
import { ButtonLink } from '../ui';
import { RootState } from '../../store';
import { UserRole } from '../../constants';

interface HeaderUserProps {
  closeDropDown: () => void;
  authUserRef: RefObject<HTMLDivElement>;
  isUserDropdownOpen: boolean;
}

const HeaderUser: FC<HeaderUserProps> = ({ closeDropDown, isUserDropdownOpen, authUserRef }) => {
  const authUser = useSelector((state: RootState) => state.auth.user);
  useClickOutside(authUserRef, isUserDropdownOpen, () => {
    closeDropDown();
  });

  const logout = async () => {
    try {
      closeDropDown();
      window.location.href = `${config.ssoUrl}/auth/logout`
    } catch (error) {
      console.error('An error occurred while logging out: ', error);
    }
  };

  return (
    <UserDropDown>
      <ButtonLink
        fullWidth
        center
        hasHover
        color="textSecondary"
        radius="none"
        href={`/communities/profile/${authUser?._id}`}
      >
        My Profile
      </ButtonLink>

      <ButtonLink fullWidth center hasHover color="textSecondary" radius="none" href="/communities/settings/account">
        Account
      </ButtonLink>

      {authUser.role === UserRole.Admin ||
        (authUser.role === UserRole.SuperAdmin && (
          <ButtonLink
            fullWidth
            center
            hasHover
            color="textSecondary"
            radius="none"
            href="/communities/settings/community"
          >
            Admin
          </ButtonLink>
        ))}

      <UserDropDownItem text fullWidth radius="none" onClick={logout}>
        Log Out
      </UserDropDownItem>
    </UserDropDown>
  );
};

export default HeaderUser;
