import React from 'react'
import { ImageElement } from '@kentico/gatsby-kontent-components'
import './styles.scss'

const TwoColumnImages = ({ images, width, height }) => {
  return (
    <div className="two-column-images">
      {images.map((image) => {
        image.width = width
        image.height = height
        return <ImageElement image={image} aspectRatio={width / height} />
      })}
    </div>
  )
}

export default TwoColumnImages
