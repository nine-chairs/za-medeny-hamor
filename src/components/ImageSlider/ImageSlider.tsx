import React, { useState, useEffect } from 'react';
import { storage } from '../../firebase';
import { ref, listAll, getDownloadURL, StorageReference } from 'firebase/storage';
import './ImageSlider.css'; // Import the CSS file

interface ImageSliderProps {
  images: string[]; // Paths to the images
}

const ImageSlider: React.FC<ImageSliderProps> = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [isPaused, setIsPaused] = useState<boolean>(false);
  const [imageUrls, setImageUrls] = useState<string[]>([]);
  const [areImagesLoaded, setAreImagesLoaded] = useState<boolean>(false);

  const imagesListRef = ref(storage, 'images/');

  useEffect(() => {
    const fetchImageUrls = async () => {
      try {
        const response = await listAll(imagesListRef);
        const urls = await Promise.all(
          response.items.map(async (item: StorageReference) => {
            const url = await getDownloadURL(item);
            return url;
          })
        );
        setImageUrls(urls);
        setAreImagesLoaded(true); // Mark images as loaded
      } catch (error) {
        console.error('Error fetching image URLs:', error);
      }
    };

    fetchImageUrls();
  }, [imagesListRef]);

  // Function to go to the next slide
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % imageUrls.length);
  };

  // Function to go to the previous slide
  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + imageUrls.length) % imageUrls.length);
  };

  // Auto advance to the next slide every 2 seconds
  useEffect(() => {
    let intervalId: NodeJS.Timeout;

    if (!isPaused && areImagesLoaded) {
      intervalId = setInterval(() => {
        nextSlide();
      }, 2000);
    }

    // Clear the interval when the component is unmounted or paused
    return () => clearInterval(intervalId);
  }, [currentIndex, imageUrls.length, isPaused, areImagesLoaded]);

  // Function to toggle pause/resume
  const togglePause = () => {
    setIsPaused((prevPaused) => !prevPaused);
  };

  return (
    <div>
      {areImagesLoaded && (
        <div className="image-slider">
          <button className="left-arrow" onClick={prevSlide}>&#9664;</button>

          <img
            src={imageUrls[currentIndex]}
            alt={`Slide ${currentIndex}`}
            loading="lazy" // Apply lazy loading
          />

          <button className="right-arrow" onClick={nextSlide}>&#9654;</button>
          <button className="pause-resume" onClick={togglePause}>
            {isPaused ? 'Resume' : 'Pause'}
          </button>
        </div>
      )}
      {!areImagesLoaded && <p>Loading images...</p>}
    </div>
  );
}

export default ImageSlider;
