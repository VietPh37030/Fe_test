import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import Bg_hero from '../../public/img/bg-hero.png';
import logo from '../../public/img/h.png';

const Hero = () => {
  const [scrolled, setScrolled] = useState(false);
  const headerRef = useRef(null);
  const buyNowRef = useRef(null);
  const viewDemosRef = useRef(null);
  const underlineRef = useRef(null);
  const logoRef = useRef(null);

  useEffect(() => {
    // Handle scroll behavior for logo
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 50) {
        setScrolled(true);
        gsap.to(logoRef.current, { opacity: 1, duration: 0.3 });
      } else {
        setScrolled(false);
        gsap.to(logoRef.current, { opacity: 0, duration: 0.3 });
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    // Header hover animation chỉ khi đã scroll xuống
    const header = headerRef.current;
    let isScrolled = false;
    const handleScroll = () => {
      isScrolled = window.scrollY > 50;
      if (!isScrolled) {
        gsap.to(header, {
          backgroundColor: "rgba(0, 0, 0, 0)",
          boxShadow: "none",
          duration: 0.3,
        });
      }
    };
    window.addEventListener("scroll", handleScroll);
    if (header) {
      header.addEventListener("mouseenter", () => {
        if (window.scrollY > 50) {
          gsap.to(header, {
            backgroundColor: "rgba(255, 255, 255, 1)",
            boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
            duration: 0.3,
          });
        }
      });
      header.addEventListener("mouseleave", () => {
        if (window.scrollY > 50) {
          gsap.to(header, {
            backgroundColor: "rgba(0, 0, 0, 0)",
            boxShadow: "none",
            duration: 0.3,
          });
        }
      });
    }
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    // Buy Now button hover animation
    if (buyNowRef.current && underlineRef.current) {
      const button = buyNowRef.current;
      const underline = underlineRef.current;

      button.addEventListener("mouseenter", () => {
        gsap.to(underline, {
          width: "100%",
          left: "0",
          duration: 0.3,
          ease: "power2.out",
        });
      });

      button.addEventListener("mouseleave", () => {
        gsap.to(underline, {
          width: "0",
          duration: 0.3,
          ease: "power2.out",
        });
      });
    }

    // View Demos button hover animation (border "drawing" effect)
    if (viewDemosRef.current) {
      const button = viewDemosRef.current;
      gsap.set(button, { border: "2px solid transparent" });

      button.addEventListener("mouseenter", () => {
        gsap.to(button, {
          keyframes: [
            { borderTopColor: "black", duration: 0.2 },
            { borderRightColor: "black", duration: 0.2 },
            { borderBottomColor: "black", duration: 0.2 },
            { borderLeftColor: "black", duration: 0.2 },
          ],
          ease: "power2.out",
        });
      });

      button.addEventListener("mouseleave", () => {
        gsap.to(button, {
          border: "2px solid black",
          duration: 0.3,
          ease: "power2.out",
        });
      });
    }
  }, []);

  return (
    <div className="relative w-full h-screen">
      <div className="absolute inset-0 w-full h-full">
        <img src={Bg_hero} alt="bg-hero" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black opacity-20"></div>
      </div>

      {/* Header with scroll and hover effect */}
      <header
         ref={headerRef}
         className="fixed w-full flex justify-between items-center p-4 z-50 transition-all duration-300"
         style={{ top: '50px' }}
      >
        <div ref={logoRef} className="transition-opacity duration-300">
          <img src={logo} alt="logo" className="w-10 h-10" />
        </div>
        <div className="relative">
          <button
            ref={buyNowRef}
            className="relative text-black font-bold uppercase tracking-wider py-2 px-4 transition duration-300"
          >
            BUY Now
            <span
              ref={underlineRef}
              className="absolute bottom-0 left-0 h-0.5 bg-black"
              style={{ width: "0" }}
            ></span>
          </button>
        </div>
      </header>

      {/* Hero content */}
      <div
       className="absolute top-16 inset-0 flex flex-col justify-center px-10 md:px-24 z-10 pt-32"
       >
        <div className="max-w-3xl">
          <h2
            className="text-[70px] text-black mb-4"
            style={{ fontFamily: "MyFont" }}
          >
            Music WordPress Theme
          </h2>
          <h1 className="text-[50px] leading-tight font-bold text-black mb-4">
            DEDICATED TO BANDS, LABELS, FESTIVALS, MUSIC STORE AND MORE...
          </h1>
          <p className="text-[30px] text-black uppercase font-bold mt-8 mb-8">
            NO CODING REQUIRED
          </p>

          <button
            ref={viewDemosRef}
            className="border-2 border-black text-black hover:bg-white hover:text-black font-bold uppercase py-3 px-8 transition duration-300 relative"
          >
            VIEW DEMOS
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;