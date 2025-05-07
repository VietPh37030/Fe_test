"use client"

import React, { useEffect, useState } from "react"
import { MousePointer, Monitor, Heart } from "lucide-react"

const DemoPages = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, 300)

    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="min-h-screen bg-black text-white mt-20">

      {/* Main Content */}
      <main className="container mx-auto p-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Column */}
        <div className="space-y-8">
          <div>
            <h2 className="text-[95px] font-script text-gray-400"
              style={{ fontFamily: "MyFont" }}
            >Demo Import</h2>
            <h1 className="text-4xl font-bold uppercase mt-2"
              style={{ fontFamily: "MyFont3" }}
            >One-Click Demo Install</h1>
          </div>

          <p className="text-gray-300 text-lg" style={{ fontFamily: "MyFont2" }}>
            Herion includes a One-Click Demo Importer, to allow you to import the demo content easily. It is the cool
            way to set up your theme in a couple of minutes from this starting point.
          </p>

          <div
            className={`transform transition-all duration-700 ease-out ${isVisible ? "translate-y-0 opacity-100" : "translate-y-32 opacity-0"
              }`}
          >
            <button
              style={{ fontFamily: "MyFont3" }}
              className="w-[140px] h-[51px] bg-[#ed2851] hover:bg-white hover:text-black text-white text-[13px] uppercase tracking-wider transition-colors"
            >
              Get Your Copy
            </button>
          </div>
        </div>

        {/* Right Column - Timeline */}
        <div className="relative flex flex-col items-center">
          {/* Vertical Line */}
          <div className="absolute left-10 top-10 bottom-10 w-0.5 bg-white"></div>

          {/* Step 1 */}
          <div
            className={`flex items-center gap-6 mb-24 w-full transform transition-all duration-700 delay-100 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-16 opacity-0"
              }`}
          >
            <div className="relative z-10 flex items-center justify-center w-20 h-20 rounded-full border-2 border-white bg-black">
              <MousePointer className="w-8 h-8" />
            </div>
            <div className="text-xl font-bold uppercase" style={{fontFamily:"MyFont3"}}>Install Herion</div>
          </div>

          {/* Step 2 */}
          <div
            className={`flex items-center gap-6 mb-24 w-full transform transition-all duration-700 delay-200 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-16 opacity-0"
              }`}
          >
            <div className="relative z-10 flex items-center justify-center w-20 h-20 rounded-full border-2 border-white bg-black">
              <Monitor className="w-8 h-8" />
            </div>
            <div className="text-xl font-bold uppercase" style={{fontFamily:"MyFont3"}}>Import Demo Content</div>
          </div>

          {/* Step 3 */}
          <div
            className={`flex items-center gap-6 w-full transform transition-all duration-700 delay-300 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-16 opacity-0"
              }`}
          >
            <div className="relative z-10 flex items-center justify-center w-20 h-20 rounded-full border-2 border-white bg-black">
              <Heart className="w-8 h-8" />
            </div>
            <div className="text-xl font-bold uppercase" style={{fontFamily:"MyFont3"}}>Have Fun!</div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default DemoPages