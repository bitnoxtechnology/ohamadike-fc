"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import "../Styles/Herosection.css"
import Slide1 from "../assets/Image1.jpg"
import Slide2 from "../assets/Herosection2.jpeg"
import Slide3 from "../assets/Herosection3.jpeg"

function Herosection() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const slides: Array<{
    title: string
    subtitle: string
    bgImage: string
  }> = [
    {
      title: "Welcome to Ohamadike International FC",
      subtitle: "Nurturing Football Excellence Since 2019",
      bgImage: Slide1, // removed .src - in React, imported images are already strings
    },
    {
      title: "Empowering Young Talents",
      subtitle: "Building Future Football Champions",
      bgImage: Slide2, // removed .src
    },
    {
      title: "Promoting Fair Play",
      subtitle: "Excellence On and Off the Field",
      bgImage: Slide3, // removed .src
    },
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [slides.length])

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length)
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)

  return (
    <section id="home" className="hero-section">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`hero-slide ${currentSlide === index ? "active" : ""}`}
          style={{ backgroundImage: `url(${slide.bgImage})` }}
        >
          {currentSlide === index && (
            <div className="hero-content">
              <h1 className="animate-fade-in-up">{slide.title}</h1>
              <p className="animate-fade-in-up delay-1">{slide.subtitle}</p>
              <div className="hero-buttons animate-fade-in-up delay-2">
                <a href="#about" className="btn-primary">
                  Learn More
                </a>
                <a href="#contact" className="btn-secondary">
                  Get in Touch
                </a>
              </div>
            </div>
          )}
        </div>
      ))}

      <button className="hero-nav-btn prev" onClick={prevSlide}>
        <ChevronLeft size={30} />
      </button>
      <button className="hero-nav-btn next" onClick={nextSlide}>
        <ChevronRight size={30} />
      </button>

      <div className="hero-dots">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`dot ${currentSlide === index ? "active" : ""}`}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </div>
    </section>
  )
}

export default Herosection
