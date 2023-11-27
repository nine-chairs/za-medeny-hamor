import React from 'react'
import ImageSlider from '../components/ImageSlider/ImageSlider'
import image1 from '../images/image1.jpg'
import image2 from '../images/image2.jpg'
import image3 from '../images/image3.jpg'
import image4 from '../images/image4.jpg'
import image5 from '../images/image5.jpg'
import image6 from '../images/image6.jpg'
import './Home.css'

const Home = () => {
  const images: string[] = [image1, image2, image3, image4, image5, image6]

  return (
    <div>
      <div className='homeContainer'>
        <div className='textContainer'>
          <h1 className='text'>
            Medený hámor ako industriálny klenot je jednou z posledných hmotných stôp viac ako 500-ročnej banskej a hutníckej histórie Banskej Bystrice, hoci tá bola spolu s celým regiónom kedysi svetovo významnou
          </h1>

        </div>
        <div className='photoContainer'>
          <ImageSlider images={images} />
        </div>
      </div>
    </div>
  )
}

export default Home
