import React from 'react'
import { useTranslation } from "react-i18next"

const PhotoGallery = () => {
  const { t } = useTranslation()
  return (
    <h1>{t('title_photo_gallery')}</h1>
  )
}

export default PhotoGallery