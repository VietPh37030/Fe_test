import React from 'react';
import ContentComponent from '../component/ContentComponent';
import releasepagesdata from '../data/releasepagesdata';

const ReleasePages = () => {
  return (
    <div>
      <ContentComponent
        headerContent="3 Release Pages"
        titlePage="RELEASE PAGES"
        data={releasepagesdata}
      />
    </div>
  );
};

export default ReleasePages; 