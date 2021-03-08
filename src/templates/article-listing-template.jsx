import React from 'react'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import ArticleTemplateDetails from '../components/ArticleTemplateDetails'

class ArticleListingTemplate extends React.Component {
  render() {
    const title = this.props.data.kontentItemSiteMetadata.elements.title.value
    const article = this.props.data.allKontentItemArticle.nodes[0]

    return (
      <Layout>
        <div>
          <Helmet htmlAttributes={{ lang: 'en' }}>
            <title>{`${article.elements.title.value} - ${title}`}</title>
            <meta
              name="description"
              content={article.elements.description.value}
            />
          </Helmet>
          <ArticleTemplateDetails {...this.props} />
        </div>
      </Layout>
    )
  }
}

export default ArticleListingTemplate

export const pageQuery = graphql`
  query ArticleBySlug($slug: String!) {
    kontentItemAuthor(system: { codename: { eq: "author" } }) {
      elements {
        bio {
          value
        }
        email {
          value
        }
        github {
          value
        }
        name {
          value
        }
        twitter {
          value
        }
        avatar_image {
          value {
            url
          }
        }
      }
    }
    kontentItemSiteMetadata(system: { codename: { eq: "site_metadata" } }) {
      elements {
        copyright {
          value
        }
        subtitle {
          value
        }
        title {
          value
        }
      }
    }
    allKontentItemArticle(
      filter: { elements: { slug: { value: { eq: $slug } } } }
      sort: { fields: elements___date___value, order: DESC }
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
          canonical_link {
            value
          }
          content {
            value
            modular_content {
              system {
                type
                codename
              }
              __typename
              ... on kontent_item_code_snippet {
                id
                elements {
                  code {
                    value
                  }
                  type {
                    value
                  }
                }
              }
              ... on kontent_item_three_column_images {
                id
                elements {
                  images {
                    value {
                      url
                    }
                  }
                }
              }
              ... on kontent_item_two_column_images {
                id
                elements {
                  images {
                    value {
                      url
                    }
                  }
                  height {
                    value
                  }
                  width {
                    value
                  }
                }
              }
            }
          }
          slug {
            value
          }
          tags {
            value {
              ... on kontent_item_tag {
                system {
                  codename
                }
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
