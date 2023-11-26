import React from 'react'
import photo from '../icons/hamor-fotka.jpg'
import './Home.css'

const Home = () => {
  return (
    <div>
      <h1>Home</h1>

      <div className='photoContainer'>
        <img className='photo' src={photo} alt='hamor v pozadi' />

      </div>

    </div>
  )
}

export default Home