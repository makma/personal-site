import React from 'react'
import './styles.scss'

const ThreeColumnImages = ({ images }) => {
  return (
    <div className="three-column-images">
      {images.map((image, width, height) => {
        image.width = width;
        image.height = height;
        return <ImageElement image={image} />
      })}
    </div>
  )
}

export default ThreeColumnImages
