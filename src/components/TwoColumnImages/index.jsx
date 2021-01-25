import React from 'react'
import './styles.scss'

const TwoColumnImages = ({ images }) => {
  return (
    <div className="two-column-images">
      {images.map((image) => {
        return <img className="two-column-image" src={image.url}></img>
      })}
    </div>
  )
}

export default TwoColumnImages
