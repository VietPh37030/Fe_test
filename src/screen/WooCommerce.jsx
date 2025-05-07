import React, { useState } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';

// Fake discographyData with provided image URLs
const discographyData = [
    { id: 1, image: 'https://preview.wolfthemes.store/app/uploads/sites/31/2019/12/product-mp3.jpg', alt: 'WooCommerce Single Product' },
    { id: 2, image: 'https://preview.wolfthemes.store/app/uploads/sites/31/2019/12/store-alt.jpg', alt: 'WooCommerce Product Grid' },
    { id: 3, image: 'https://preview.wolfthemes.store/app/uploads/sites/31/2019/12/checkout.jpg', alt: 'WooCommerce Checkout' },
    { id: 4, image: 'https://preview.wolfthemes.store/app/uploads/sites/31/2019/12/cart.jpg', alt: 'WooCommerce Single Product' },
    { id: 5, image: 'https://preview.wolfthemes.store/app/uploads/sites/31/2019/12/store-alt.jpg', alt: 'WooCommerce Product Grid' },
    { id: 6, image: 'https://preview.wolfthemes.store/app/uploads/sites/31/2019/12/checkout.jpg', alt: 'WooCommerce Checkout' },
  ];
  
const WooCommerce = () => {
  const [startIndex, setStartIndex] = useState(0);
  const [direction, setDirection] = useState(null); // For slide animation
  const [isSliding, setIsSliding] = useState(false);

  const totalItems = discographyData.length;
  const itemsPerPage = 3;

  const handlePrev = () => {
    if (isSliding) return;
    setDirection('left');
    setIsSliding(true);
    setTimeout(() => {
      setStartIndex((prevIndex) => (prevIndex - 1 + totalItems) % totalItems);
      setDirection(null);
      setIsSliding(false);
    }, 400);
  };

  const handleNext = () => {
    if (isSliding) return;
    setDirection('right');
    setIsSliding(true);
    setTimeout(() => {
      setStartIndex((prevIndex) => (prevIndex + 1) % totalItems);
      setDirection(null);
      setIsSliding(false);
    }, 400);
  };

  const displayedItems = [];
  for (let i = 0; i < itemsPerPage; i++) {
    const dataIndex = (startIndex + i) % totalItems;    
    displayedItems.push(discographyData[dataIndex]);
  }

  return (
    <div className="flex flex-col items-center min-h-screen mb-20" style={{background:"#f7f7f7"}}>
      {/* Header */}
      <div className="text-center py-16 max-w-3xl mx-auto">
        <h1 className="text-5xl text-gray-400 font-light italic mb-2">Sell Your Merch</h1>
        <h2 className="text-xl font-semibold tracking-wider uppercase mb-6">WOOCOMMERCE SHOP</h2>
        <p className="text-gray-600 px-4">
          Sell your merch online using the most powerful and secure e-commerce WordPress theme: WooCommerce. Herion is built 
          to integrate WooCommerce smoothly in its design.
        </p>
      </div>

      {/* Image Showcase */}
      <div className="w-full flex justify-center items-center" style={{ height: 420 }}>
        <div className="relative flex items-center" style={{ width: 1150 }}>
          {/* Mũi tên trái */}
          <button
            className="absolute left-[-48px] z-10 flex items-center h-[400px]"
            style={{ top: '50%', transform: 'translateY(-50%)' }}
            onClick={handlePrev}
            disabled={isSliding}
          >
            <ArrowLeft size={32} className="text-black cursor-pointer" />
          </button>

          {/* 3 ảnh với animation */}
          <div
            className={`flex gap-x-20 transition-transform duration-500 ease-in-out`}
            style={{
              transform: direction === 'left'
                ? 'translateX(80px)'
                : direction === 'right'
                ? 'translateX(-80px)'
                : 'translateX(0)',
              opacity: direction ? 0.7 : 1,
            }}
          >
            {displayedItems.map((item) => (
              <div key={item.id} className="shadow-md hover:-translate-y-3 transition-all duration-300 ease-in-out flex items-center">
                <img
                  src={item.image}
                  alt={item.alt}
                  className="w-[350px] h-[400px] object-cover"
                />
              </div>
            ))}
          </div>

          {/* Mũi tên phải */}
          <button
            className="absolute right-[-48px] z-10 flex items-center h-[400px]"
            style={{ top: '50%', transform: 'translateY(-50%)' }}
            onClick={handleNext}
            disabled={isSliding}
          >
            <ArrowRight size={32} className="text-black cursor-pointer" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default WooCommerce;