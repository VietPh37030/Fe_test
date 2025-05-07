import React from 'react';

const ContentComponent = ({ headerContent, titlePage, data, contentPage }) => {
  return (
    <div className="w-full min-h-screen bg-white flex flex-col items-center py-8">
      <h2 className="text-[95px] text-gray-400  mb-2" style={{ fontFamily: 'MyFont' }}>
        {headerContent}
      </h2>
      <h3 className="text-3xl font-bold tracking-widest mb-5" style={{ fontFamily: "MyFont3" }}>{titlePage}</h3>
      <div className="flex justify-center text-center">
        <p
          className="mb-15 max-w-3xl text-gray-500 text-base"
          style={{ fontFamily: "MyFont2" }}
        >
          {contentPage}
        </p>
      </div>


      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        {data.map(item => (
          <div
            key={item.id}
            className="cursor-pointer transition-transform hover:-translate-y-2 flex flex-col items-center"
            onClick={() => window.open(item.link, '_blank')}
          >
            <div
              className="bg-white shadow-lg"
              style={{ width: '438px', height: '282px', overflow: 'hidden' }}
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
              style={{ fontFamily: 'MyFont2' }}
            >
              {item.title}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContentComponent;