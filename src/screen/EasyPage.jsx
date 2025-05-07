"use client"

import { useEffect, useRef, useState } from "react"
import { Maximize, Plus } from "lucide-react"
import Bg_hero from "../../public/img/admin-1.png"

const EasyPage = () => {
  const sectionRef = useRef(null)
  const counterRef1 = useRef(null)
  const counterRef2 = useRef(null)
  const [isImageOpen, setIsImageOpen] = useState(false)
  const [isZoomed, setIsZoomed] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-fade-in")

          // Animate counters
          if (counterRef1.current && counterRef2.current) {
            animateCounter(counterRef1.current, 0, 200, 2000)
            animateCounter(counterRef2.current, 0, 110, 2000)
          }
        }
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [])

  const animateCounter = (element, start, end, duration) => {
    let startTimestamp = null
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp
      const progress = Math.min((timestamp - startTimestamp) / duration, 1)
      const currentCount = Math.floor(progress * (end - start) + start)
      element.textContent = `${currentCount}`

      if (progress < 1) {
        window.requestAnimationFrame(step)
      } else {
        element.textContent = `${end}`
      }
    }
    window.requestAnimationFrame(step)
  }

  const handleImageClick = () => {
    setIsImageOpen(true)
  }

  const handleCloseImage = () => {
    setIsImageOpen(false)
    setIsZoomed(false)
  }

  const handleDoubleClick = () => {
    setIsZoomed(!isZoomed)
  }

  return (
    <div>
      <section className="py-24 bg-black text-white" ref={sectionRef}>
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src={Bg_hero}
                alt="Page Builder"
                width={760}
                height={437}
                className="w-full h-auto cursor-pointer"
                onClick={handleImageClick}
              />
            </div>

            <div>
              <h2 className="section-title text-left ml-0 text-[95px] text-gray-100" style={{ fontFamily: "MyFont" }}>
                Easy To Use
              </h2>
              <h3 className="text-3xl font-bold mb-8" style={{ fontFamily: "MyFont3" }}>
                NO CODING REQUIRED
              </h3>

              <p className="text-lg mb-12 text-gray-300">
                Herion comes with an advanced drag and drop page builder to help you create your website easily and quickly.
              </p>

              <div className="grid grid-cols-2 gap-8">
                <div className="text-center">
                  <div className="flex items-center justify-center">
                    <div ref={counterRef1} className="text-7xl font-bold">
                      0
                    </div>
                    <Plus size={48} style={{ color: "#ff3269" }} />
                  </div>
                  <p className="text-lg mt-2">DEMO LAYOUTS</p>
                </div>

                <div className="text-center">
                  <div className="flex items-center justify-center">
                    <div ref={counterRef2} className="text-7xl font-bold">
                      0
                    </div>
                    <Plus size={48} style={{ color: "#ff3269" }} />
                  </div>
                  <p className="text-lg mt-2">CONTENT ELEMENTS</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {isImageOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
          onClick={handleCloseImage}
        >
          <img
            src={Bg_hero}
            alt="Page Builder"
            className={`max-w-[90%] max-h-[90%] transition-transform duration-300 ${isZoomed ? "scale-150" : "scale-100"}`}
            onDoubleClick={handleDoubleClick}
          />
        </div>
      )}
    </div>
  )
}

export default EasyPage