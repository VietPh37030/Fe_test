import React from "react";
import DiscographyReleasePages from "../component/DiscographyReleasePages";
import discographyData from "../data/discographyData";
import artistSinglePagesData from "../data/artistSinglePagesData"; // Giả định bạn có file dữ liệu này
import artistListingData from "../data/artistListingData"; // Giả định bạn có file dữ liệu này

const ArtistPages = () => {
  return (
   
    <DiscographyReleasePages
      data={artistSinglePagesData}
      headerTitle="Artist Pages"
      pageTitle="Simple or Custom Layouts"
      contentTitle="Herion can be used for your record label website. You can create an unlimited number of pages for each artist and choose between simple default layouts, automatically generated from the release, videos and events artist category, or create a custom page. It’s all up-to-you!"
      tab1Label="Artist Single Pages"
      tab2Label="Artist Listing"
      tab2Data={artistListingData} // Dữ liệu khác cho tab 2
    />
  );
};

export default ArtistPages;