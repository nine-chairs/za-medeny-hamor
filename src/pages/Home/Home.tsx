import React from 'react'
import { useTranslation } from "react-i18next"
import ImageSlider from '../../components/ImageSlider/ImageSlider'
import image1 from '../../images/image1.jpg'
import image2 from '../../images/image2.jpg'
import image3 from '../../images/image3.jpg'
import image4 from '../../images/image4.jpg'
import image5 from '../../images/image5.jpg'
import image6 from '../../images/image6.jpg'
import './Home.css'

const Home = () => {
  const { t } = useTranslation()
  const images: string[] = [image1, image2, image3, image4, image5, image6]

  return (
    <div>
      <div className='homeContainer'>
        <div className='textContainer'>
          <h1 className='text'>
            {t('home_text1_500years')}
          </h1>
        </div>
        <div>
          {t('home_text2_namibia')}
        </div>
        <div>
          {t('home_text3_imagine')}
        </div>
        <div>
          {t('home_text4_revitalize')}
        </div>
        <div className='photoContainer'>
          <ImageSlider images={images} />
        </div>
      </div>
    </div>
  )
}

export default Home
