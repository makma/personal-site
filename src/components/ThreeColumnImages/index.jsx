import React from 'react'
import './styles.scss'

const ThreeColumnImages = ({ images }) => {
  return (
    <div className="three-column-images">
      {images.map((image) => {
        return <img className="three-column-image" src={image.url}></img>
      })}
    </div>
  )
}

export default ThreeColumnImages
