"use client"

import { useEffect, useRef, useState } from "react"
import { gsap } from "gsap"
import Bg_hero from "../../public/img/bg-hero.png"
import logo from "../../public/img/h.png"
import { ShoppingCart, Share2 } from "lucide-react"

const Hero = () => {
  const [scrolled, setScrolled] = useState(false)
  const headerRef = useRef(null)
  const buyNowRef = useRef(null)
  const viewDemosRef = useRef(null)
  const underlineRef = useRef(null)
  const logoRef = useRef(null)
  const cartButtonRef = useRef(null)
  const shareButtonRef = useRef(null)

  useEffect(() => {
    // Animate fixed buttons on load
    gsap.from(cartButtonRef.current, {
      x: 100,
      opacity: 0,
      duration: 0.5,
      delay: 0.5,
      ease: "power2.out",
    })

    gsap.from(shareButtonRef.current, {
      x: 100,
      opacity: 0,
      duration: 0.5,
      delay: 0.7,
      ease: "power2.out",
    })

    // Handle scroll behavior for logo
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      if (scrollPosition > 50) {
        setScrolled(true)
        gsap.to(logoRef.current, { opacity: 1, duration: 0.3 })
      } else {
        setScrolled(false)
        gsap.to(logoRef.current, { opacity: 0, duration: 0.3 })
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    // Header hover animation chỉ khi đã scroll xuống
    const header = headerRef.current
    let isScrolled = false
    const handleScroll = () => {
      isScrolled = window.scrollY > 50
      if (!isScrolled) {
        gsap.to(header, {
          backgroundColor: "rgba(0, 0, 0, 0)",
          boxShadow: "none",
          duration: 0.3,
        })
      }
    }
    window.addEventListener("scroll", handleScroll)
    if (header) {
      header.addEventListener("mouseenter", () => {
        if (window.scrollY > 50) {
          gsap.to(header, {
            backgroundColor: "rgba(255, 255, 255, 1)",
            boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
            duration: 0.3,
          })
        }
      })
      header.addEventListener("mouseleave", () => {
        if (window.scrollY > 50) {
          gsap.to(header, {
            backgroundColor: "rgba(0, 0, 0, 0)",
            boxShadow: "none",
            duration: 0.3,
          })
        }
      })
    }
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  useEffect(() => {
    // Buy Now button hover animation
    if (buyNowRef.current && underlineRef.current) {
      const button = buyNowRef.current
      const underline = underlineRef.current

      button.addEventListener("mouseenter", () => {
        gsap.to(underline, {
          width: "100%",
          left: "0",
          duration: 0.3,
          ease: "power2.out",
        })
      })

      button.addEventListener("mouseleave", () => {
        gsap.to(underline, {
          width: "0",
          duration: 0.3,
          ease: "power2.out",
        })
      })
    }

    // View Demos button hover animation (border "drawing" effect)
    if (viewDemosRef.current) {
      const button = viewDemosRef.current
      gsap.set(button, { border: "2px solid transparent" })

      button.addEventListener("mouseenter", () => {
        gsap.to(button, {
          keyframes: [
            { borderTopColor: "black", duration: 0.2 },
            { borderRightColor: "black", duration: 0.2 },
            { borderBottomColor: "black", duration: 0.2 },
            { borderLeftColor: "black", duration: 0.2 },
          ],
          ease: "power2.out",
        })
      })

      button.addEventListener("mouseleave", () => {
        gsap.to(button, {
          border: "2px solid black",
          duration: 0.3,
          ease: "power2.out",
        })
      })
    }
  }, [])

  return (
    <div className="relative w-full h-screen">
      <div className="absolute inset-0 w-full h-full">
        <img src={Bg_hero || "/placeholder.svg"} alt="bg-hero" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black opacity-20"></div>
      </div>

      {/* Header with scroll and hover effect */}
      <header
        ref={headerRef}
        className="fixed w-full flex justify-between items-center p-4 z-40 transition-all duration-300"
        style={{ top: "50px" }}
      >
        <div ref={logoRef} className="transition-opacity duration-300">
          <img src={logo || "/placeholder.svg"} alt="logo" className="w-10 h-10" />
        </div>
        <div className="relative">
          <button
            ref={buyNowRef}
            className="relative text-black font-bold uppercase tracking-wider py-2 px-4 transition duration-300"
          >
            BUY Now
            <span ref={underlineRef} className="absolute bottom-0 left-0 h-0.5 bg-black" style={{ width: "0" }}></span>
          </button>
        </div>
      </header>

      {/* Fixed buttons on right side */}
      <div className="fixed right-0 top-1/2 transform -translate-y-1/2 z-50 flex flex-col space-y-2">

        {/* Cart Button */}
        <div
          ref={cartButtonRef}
          style={{backgroundColor:"#ee2851"}}
        className="w-[43px] h-[43px] hover:bg-red-600 text-white p-2 cursor-pointer transition-colors duration-300 flex items-center justify-center"
        >
          <ShoppingCart className="w-6 h-6" />
        </div>

        {/* Share Button */}
        <div
          ref={shareButtonRef}
          className="w-[43px] h-[43px] bg-black hover:bg-gray-800 text-white p-4 cursor-pointer transition-colors duration-300 flex items-center justify-center"
        >
          <Share2 className="w-6 h-6" />
        </div>
      </div>

      {/* Hero content */}
      <div className="absolute top-16 inset-0 flex flex-col justify-center px-10 md:px-24 z-10 pt-32">
        <div className="max-w-3xl">
          <h2 className="text-[70px] text-black mb-4" style={{ fontFamily: "MyFont" }}>
            Music WordPress Theme
          </h2>
          <h1 className="text-[50px] leading-tight font-bold text-black mb-4">
            DEDICATED TO BANDS, LABELS, FESTIVALS, MUSIC STORE AND MORE...
          </h1>
          <p className="text-[30px] text-black uppercase font-bold mt-8 mb-8">NO CODING REQUIRED</p>

          <button
            ref={viewDemosRef}
            className="border-2 border-black text-black hover:bg-white hover:text-black font-bold uppercase py-3 px-8 transition duration-300 relative"
          >
            VIEW DEMOS
          </button>
        </div>
      </div>
    </div>
  )
}

export default Hero
