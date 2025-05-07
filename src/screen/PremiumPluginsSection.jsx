import React from 'react';
import FeatureCard from './FeatureCard';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const testimonials = [
  {
    text: "Customer support is super fast and super nice. It has been a few years since I touched a website so I am dusting off my cobwebs and I am not feeling bad about asking questions! Thanks guys!",
    author: "— LUCKY777 (FIREMASTER)"
  },
  {
    text: "The themes are beautifully designed and very user-friendly. Perfect for my music studio website!",
    author: "— MUSICPRO (VERIFIED)"
  },
  {
    text: "Incredible value for the price. The customization options are exactly what I needed for my band's website.",
    author: "— ROCKSTAR99 (VERIFIED)"
  }
];

export default function PremiumPluginsSection() {
  return (
    <div className="w-full bg-white py-16 px-4">
      {/* Save Money Section */}
      <div className="text-center mb-16 animate-fade-in">
        <h2 className="text-3xl md:text-[95px] font-light text-gray-400 italic mb-4" style={{fontFamily:'MyFont'}}>Save Money</h2>
        <h3 className="text-3xl font-bold text-gray-800 mb-4" style={{fontFamily:'MyFont3'}}>$90 OF PREMIUM PLUGIN INCLUDED</h3>
        <p className="text-gray-600 max-w-3xl mx-auto text-center">
          Includes WPBakery Page Builder and Slider Revolution premium plugins. Save money and start building your website
          using the best tools available on the market today.
        </p>
      </div>
      
      {/* Plugin Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-8 md:gap-x-8 lg:gap-x-24 max-w-7xl mx-auto">
        {/* WPBakery Card */}
        <FeatureCard
          iconUrl="https://preview.wolfthemes.store/app/uploads/sites/31/2019/11/wpb-80x80.jpg"
          title="WPBakery Page Builder"
          saveText="Save $74"
          width={400}
          height={500}
          features={[
            "Full Version Included",
            "Unlimited design options",
            "Easy to use, no coding",
            "Fast & Easy"
          ]}
        />

        {/* Slider Revolution Card */}
        <FeatureCard
          iconUrl="https://preview.wolfthemes.store/app/uploads/sites/31/2019/11/sr-80x80.jpg"
          title="Slider Revolution"
          saveText="Save $109"
          width={400}
          height={500}
          features={[
            "Full Version Included",
            "Powerful visual editor",
            "Advanced Animations",
            "For Sliders, Headers and more"
          ]}
        />
        
        {/* Wolf Page Builder Card */}
        <FeatureCard
          iconUrl="https://preview.wolfthemes.store/app/uploads/sites/31/2019/11/new_avatar80_80.png"
          title="Wolf Page Builder Extension"
          saveText="Exclusive"
          width={400}
          height={500}
          features={[
            "Only Available with our Themes",
            "Extends WPBakery Page Builder",
            "Adds Tons of Elements and Options"
          ]}
        />
      </div>
    </div>
  );
}