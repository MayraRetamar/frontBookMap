import React from 'react'
import imglibreria from './assets/imglibreria.jpg'
import './banner.css'


function Banner() {
  return (
    <div>
      <img className= "img" src={imglibreria} alt="banner_libreria" />
    </div>
  )
}

export default Banner;



