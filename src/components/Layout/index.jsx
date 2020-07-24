import React from 'react'
import Helmet from 'react-helmet'
import '../../assets/scss/init.scss'

class Layout extends React.Component {
  render() {
    const { children } = this.props

    return (
      <div className="layout">
        <Helmet
          defaultTitle="Blog by Martin Makarsky"
          htmlAttributes= {{lang: 'en'}} 
        >
          <link href="/favicon.ico" rel="shortcut icon" type="image/x-icon" />
        </Helmet>
        {children}
      </div>
    )
  }
}

export default Layout
