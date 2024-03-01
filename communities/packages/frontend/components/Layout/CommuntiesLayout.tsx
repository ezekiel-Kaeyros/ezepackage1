import { FC, useEffect, useRef, useState } from 'react';
import Router from 'next/router';
import { Root, StyledContainer } from './style';
import Header from '../Header';
import { Cookies, getCookie, useClickOutside } from '../../utils';
import { Spacing, Screen } from '../../theme';
import RightSideBar from '../RightSideBar';
import Seo from '../Seo';
import Announcement from '../Announcement';
import Sidebar from '../Sidebar';

interface LayoutCommunitiesProps {
  children: React.ReactNode;
  hideLeftSidebar?: boolean;
  hideRightSidebar?: boolean;
  containerMaxWidth?: Screen;
  marginTop?: Spacing;
}

const LayoutCommunities: FC<LayoutCommunitiesProps> = ({
  children,
  hideLeftSidebar,
  hideRightSidebar,
  containerMaxWidth,
  marginTop,
}) => {
  const isAnnouncementDisabled = getCookie(Cookies.Announcement_Disabled);
  const [isAnnouncementOpen, setIsAnnouncementOpen] = useState(isAnnouncementDisabled !== 'true');
  const sideBarRef = useRef(null);
  const hamburgerRef = useRef(null);
  const [isSideBarOpen, setIsSidebarOpen] = useState(false);
  useClickOutside([sideBarRef, hamburgerRef], isSideBarOpen, () => {
    setIsSidebarOpen(false);
  });

  const toggleSidebar = () => setIsSidebarOpen(!isSideBarOpen);

  useEffect(() => {
    Router.events.on('routeChangeComplete', () => {
      if (isSideBarOpen) {
        setIsSidebarOpen(false);
      }
    });
  }, [isSideBarOpen]);

  return (
    <>
      <Seo />
      {isAnnouncementOpen && <Announcement setIsAnnouncementOpen={setIsAnnouncementOpen} />}
      <Header ref={hamburgerRef} toggleSidebar={toggleSidebar} />
      <Root>
        {!hideLeftSidebar && <Sidebar ref={sideBarRef} isOpen={isSideBarOpen} />}
        <StyledContainer
          marginTop={marginTop}
          padding={marginTop}
          maxWidth={containerMaxWidth}
          hideRightSidebar={hideRightSidebar}
        >
          {children}
        </StyledContainer>
        {!hideRightSidebar && <RightSideBar />}
      </Root>
    </>
  );
};

LayoutCommunities.defaultProps = {
  hideLeftSidebar: false,
  hideRightSidebar: false,
  containerMaxWidth: 'sm',
};

export default LayoutCommunities;
