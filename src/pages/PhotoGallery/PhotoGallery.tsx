import React, { useState, useEffect } from 'react'
import { storage } from '../../firebase'
import { ref, listAll, getDownloadURL, StorageReference } from 'firebase/storage'
import { useTranslation } from 'react-i18next'
import './PhotoGallery.css' // Import your CSS file for styling

const PhotoGallery: React.FC = () => {
  const { t } = useTranslation()
  const [imageUrls, setImageUrls] = useState<string[]>([])
  const [areImagesLoaded, setAreImagesLoaded] = useState<boolean>(false)

  const imagesListRef = ref(storage, 'images/')

  useEffect(() => {
    const fetchImageUrls = async () => {
      try {
        const response = await listAll(imagesListRef)
        const urls = await Promise.all(
          response.items.map(async (item: StorageReference) => {
            const url = await getDownloadURL(item)
            return url
          })
        )
        setImageUrls(urls)
        setAreImagesLoaded(true) // Mark images as loaded
      } catch (error) {
        console.error('Error fetching image URLs:', error)
      }
    }

    fetchImageUrls()
  }, [imagesListRef])

  return (
    <div>
      <h1>{t('title_photo_gallery')}</h1>
      {areImagesLoaded ? (
        <div className="photo-grid">
          {imageUrls.map((url, index) => (
            <img
              key={index}
              src={url}
              alt={`Photo ${index}`}
              className="photo-item"
              loading="lazy" // Add lazy loading attribute
            />
          ))}
        </div>
      ) : (
        <p>Loading images...</p>
      )}
    </div>
  )
}

export default PhotoGallery
