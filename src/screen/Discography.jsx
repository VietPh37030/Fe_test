// src/pages/Discography.js
import React from "react";
import discographyData from "../data/discographyData";
import DiscographyReleasePages from "../component/DiscographyReleasePages";

const Discography = () => {
  return (
    <div>
      <DiscographyReleasePages
        data={discographyData}
        headerTitle="Discography"
        pageTitle="Release Pages"
        contentTitle="Single release pages don’t have to be boring and all the same! You can use a different layout for each release, and use the page builder template system if you want all release pages with the same custom layout."
      />
    </div>
  );
};

export default Discography;