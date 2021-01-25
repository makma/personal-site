import React from 'react'
import { Link } from 'gatsby'
import './style.scss'
import { RichTextElement } from '@kentico/gatsby-kontent-components'
import { dateInStringToLongMonthNumericDayNumericYear } from '../../utils/dateUtils'
import CodeHighlighter from '../CodeHighlighter/index'
import TwoColumnImages from '../TwoColumnImages/index'
import ThreeColumnImages from '../ThreeColumnImages/index'

class ArticleTemplateDetails extends React.Component {
  componentDidMount() {
    Prism.highlightAll()
  }

  render() {
    const articleTemplateData = this.props
    const subtitle =
      articleTemplateData.data.kontentItemSiteMetadata.elements.subtitle.value
    const author = articleTemplateData.data.kontentItemAuthor
    const article = this.props.data.allKontentItemArticle.nodes[0].elements
    const tags = article.tags.value

    const homeBlock = (
      <div>
        <Link className="article-single__home-button" to="/">
          All Articles
        </Link>
      </div>
    )

    const tagsBlock = (
      <div className="article-single__tags">
        <ul className="article-single__tags-list">
          {tags &&
            tags.map((tag) => (
              <li
                className="article-single__tags-list-item"
                key={tag.system.codename}
              >
                <Link
                  to={`/tags/${tag.elements.slug.value}`}
                  className="article-single__tags-list-item-link"
                >
                  {tag.elements.title.value}
                </Link>
              </li>
            ))}
        </ul>
      </div>
    )

    return (
      <div>
        {homeBlock}
        <div className="article-single">
          <div className="article-single__inner">
            <h1 className="article-single__title">{article.title.value}</h1>
            <div />
            <div className="article-single__body">
              <RichTextElement
                value={article.content.value}
                linkedItems={article.content.modular_content}
                resolveLinkedItem={(linkedItem) => {
                  switch (linkedItem.__typename) {
                    case 'kontent_item_code_snippet': {
                      return (
                        <CodeHighlighter
                          language={linkedItem.elements.type.value}
                          code={linkedItem.elements.code.value}
                        />
                      )
                    }
                    case 'kontent_item_three_column_images': {
                      const images = linkedItem.elements.images.value
                      return (
                        <ThreeColumnImages images={images}></ThreeColumnImages>
                      )
                    }
                    case 'kontent_item_two_column_images': {
                      const images = linkedItem.elements.images.value
                      return <TwoColumnImages images={images}></TwoColumnImages>
                    }
                    default:
                      return <div>Component not supported</div>
                  }
                }}
              />
            </div>
            <div className="article-single__date">
              <em>
                Published{' '}
                {dateInStringToLongMonthNumericDayNumericYear(
                  article.date.value
                )}
              </em>
            </div>
          </div>
          <div className="article-single__footer">
            {tagsBlock}
            <hr />
            <p className="article-single__footer-text">
              {subtitle}
              <a
                href={`https://twitter.com/${author.elements.twitter.value}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <br /> <strong>{author.elements.name.value}</strong> on Twitter
              </a>
            </p>
          </div>
        </div>
      </div>
    )
  }
}

export default ArticleTemplateDetails
