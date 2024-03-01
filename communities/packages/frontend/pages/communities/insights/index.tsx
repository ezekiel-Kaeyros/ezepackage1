import React, { FC, Fragment } from 'react';

import Seo from '../../../components/Seo';
import Insights from '../../../components/insights/insights';
import LayoutCommunities from '../../../components/Layout/CommuntiesLayout';

const insights = () => {
  return (
    <>
      <LayoutCommunities marginTop="sm" hideRightSidebar containerMaxWidth="md">
        <Seo title="Members" />

        <Insights />

        {/* <Wrapper></Wrapper> */}
      </LayoutCommunities>
    </>
  );
};

export default insights;
