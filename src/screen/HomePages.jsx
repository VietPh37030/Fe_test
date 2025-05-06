import React from 'react';
import ContentComponent from '../component/ContentComponent';
import homepagesdata from '../data/templates';

const HomePages = () => {
  return (
    <div>
      <ContentComponent
        headerContent="15 Templates"
        titlePage="HOMEPAGES"
        data={homepagesdata}
      />
    </div>
  );
};

export default HomePages;