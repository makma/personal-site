import React from 'react'
import './styles.scss'

const ThreeColumnImages = ({ images, width, height }) => {
  return (
    <div className="three-column-images">
      {images.map((image) => {
        image.width = width
        image.height = height
        return <ImageElement image={image} aspectRatio={width / height} />
      })}
    </div>
  )
}

export default ThreeColumnImages
