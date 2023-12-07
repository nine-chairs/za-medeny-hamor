import React, { useState, useEffect } from 'react'
import './ImageSlider.css' // Import the CSS file

interface ImageSliderProps {
  images: string[] // Paths to the images
}

const ImageSlider: React.FC<ImageSliderProps> = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0)
  const [isPaused, setIsPaused] = useState<boolean>(false)

  // Function to go to the next slide
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
  }

  // Function to go to the previous slide
  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length)
  }

  // Auto advance to the next slide every 2 seconds
  useEffect(() => {
    let intervalId: NodeJS.Timeout

    if (!isPaused) {
      intervalId = setInterval(() => {
        nextSlide()
      }, 2000)
    }

    // Clear the interval when the component is unmounted or paused
    return () => clearInterval(intervalId)
  }, [currentIndex, images.length, isPaused])

  // Function to toggle pause/resume
  const togglePause = () => {
    setIsPaused((prevPaused) => !prevPaused)
  }

  return (
    <div>
      {images.length > 0 && (
        <div className="image-slider">
          <button className="left-arrow" onClick={prevSlide}>
            &#9664
          </button>

          <img
            src={images[currentIndex]}
            alt={`Slide ${currentIndex}`}
            loading="lazy" // Apply lazy loading
          />

          <button className="right-arrow" onClick={nextSlide}>
            &#9654
          </button>
          <button className="pause-resume" onClick={togglePause}>
            {isPaused ? 'Resume' : 'Pause'}
          </button>
        </div>
      )}
      {images.length === 0 && <p>No images to display.</p>}
    </div>
  )
}

export default ImageSlider
