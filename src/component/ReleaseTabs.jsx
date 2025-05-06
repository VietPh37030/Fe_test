import React, { useState } from 'react';

const ReleaseTabs = ({ tab1Label, tab2Label, onTabChange }) => {
  const [activeTab, setActiveTab] = useState('tab1');

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    if (onTabChange) {
      onTabChange(tab);
    }
  };

  return (
    <div className="flex justify-center gap-8 mb-12">
      <button
        className={`font-semibold pb-1 ${activeTab === 'tab1' ? 'text-gray-800 border-b-2 border-gray-800' : 'text-gray-500 hover:text-gray-800'}`}
        onClick={() => handleTabChange('tab1')}
      >
        {tab1Label}
      </button>
      <button
        className={`font-semibold pb-1 ${activeTab === 'tab2' ? 'text-gray-800 border-b-2 border-gray-800' : 'text-gray-500 hover:text-gray-800'}`}
        onClick={() => handleTabChange('tab2')}
      >
        {tab2Label}
      </button>
    </div>
  );
};

export default ReleaseTabs;