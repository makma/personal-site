import React from 'react'
import { ImageElement } from '@kentico/gatsby-kontent-components'
import './styles.scss'

const TwoColumnImages = ({ images }) => {
  return (
    <div className="two-column-images">
      {images.map((image) => {
        console.log(`Image: ${JSON.stringify(image)}`)
        return <ImageElement image={image} />
      })}
    </div>
  )
}

export default TwoColumnImages
