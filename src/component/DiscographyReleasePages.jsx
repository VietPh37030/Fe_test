// src/component/DiscographyReleasePages.js
import React, { useState } from "react";
import ReleaseTabs from "./ReleaseTabs";
import releaseListingData from "../data/releaseListingData";

const DiscographyReleasePages = ({ data, headerTitle , pageTitle,contentTitle  }) => {
  const [activeTab, setActiveTab] = useState("tab1");

  // Select data based on active tab
  const displayData = activeTab === "tab1" ? data : releaseListingData;

  return (
    <div className="w-full min-h-screen bg-white flex flex-col items-center py-8">
      <div>
        <h2
          className="text-[95px] text-gray-400 font-bold text-center mb-2 italic"
          style={{ fontFamily: "MyFont" }}
        >
          {headerTitle}
        </h2>
        <h3
          className="text-[35px] text-black text-center"
          style={{fontFamily:"MyFont3"}}
        >
          {pageTitle}
        </h3>
        <p className="text-center text-gray-500 max-w-3xl mx-auto mb-8">
          {contentTitle}
        </p>
        <ReleaseTabs
          tab1Label="Release Single Pages"
          tab2Label="Release Listing"
          onTabChange={(tab) => setActiveTab(tab)}
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {displayData.map((item) => (
            <div
              key={item.id}
              className="cursor-pointer transition-transform hover:-translate-y-2 flex flex-col items-center"
              onClick={() => window.open(item.link, "_blank")}
            >
              <div
                className="bg-white shadow-lg"
                style={{ width: "438px", height: "282px", overflow: "hidden" }}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="object-cover w-full h-full"
                  loading="lazy"
                />
              </div>
              <div
                className="text-xl font-semibold mt-4 text-gray-800 text-center"
                style={{ fontFamily: "MyFont2" }}
              >
                {item.title}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DiscographyReleasePages;