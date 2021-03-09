import React from 'react'
import Helmet from 'react-helmet'
import { graphql, Link } from 'gatsby'
import Layout from '../components/Layout'
import Article from '../components/Article'
import Sidebar from '../components/Sidebar'

class IndexRoute extends React.Component {
  render() {
    const routeData = this.props
    const articles = []
    const title = routeData.data.kontentItemSiteMetadata.elements.title.value
    const subtitle = routeData.data.kontentItemSiteMetadata.elements.subtitle.value
    const articleItems = routeData.data.allKontentItemArticle.nodes
    articleItems.forEach(article => {
      articles.push(<Article data={article} key={article.elements.slug.value} />)
    })

    return (
      <Layout>
        <div>
          <Helmet htmlAttributes={{ lang: 'en' }}>
            <title>{title}</title>
            <meta name="description" content={subtitle} />
          </Helmet>
          <Sidebar isHomePage />
          <div className="content">
            <div className="content__inner">{articles}</div>
            <div className="content-footer-container">
              <Link className="all-articles-link" to="/articles">→All articles</Link>
            </div>
          </div>
        </div>
      </Layout>
    )
  }
}

export default IndexRoute

export const pageQuery = graphql`
  query IndexQuery {
    kontentItemSiteMetadata(system: {codename: {eq: "site_metadata"}}) {
      elements {
        subtitle {
          value
        }
        title {
          value
        }
      }
    }
    allKontentItemArticle(
      filter: {preferred_language: {eq: "en-US"}}
      sort: { fields: elements___date___value, order: DESC }
      limit: 3
      ) {
      nodes {
        elements {
          category {
            value {
              ... on kontent_item_category {
                elements {
                  title {
                    value
                  }
                  slug {
                    value
                  }
                }
              }
            }
          }
          date {
            value
          }
          description {
            value
          }
          content {
            value
            images {
              width
              height
              image_id
              url
            }
          }
          slug {
            value
          }
          tags {
            value {
              ... on kontent_item_tag {
                elements {
                  title {
                    value
                  }
                  slug {
                    value
                  }
                }
              }
            }
          }
          title {
            value
          }
        }
      }
    }
  }
`
