import React from 'react'
import { Link } from 'gatsby'
import './style.scss'
import { RichTextElement } from '@kentico/gatsby-kontent-components'
import Prism from 'prismjs'
import { dateInStringToLongMonthNumericDayNumericYear } from '../../utils/dateUtils'

class ArticleTemplateDetails extends React.Component {
  componentDidMount() {
    Prism.highlightAll()
  }

  render() {
    const articleTemplateData = this.props
    const subtitle = articleTemplateData.data.kontentItemSiteMetadata.elements.subtitle.value
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
          {tags
            && tags.map(tag => (
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
                resolveLinkedItem={linkedItem => (
                  <pre>
                    <code
                      className={`language-${linkedItem.elements.type.value} formatted-code`}
                    >
                      {linkedItem.elements.code.value}
                    </code>
                  </pre>
                )}
              />
            </div>
            <div className="article-single__date">
              <em>
                Published
                {' '}
                {dateInStringToLongMonthNumericDayNumericYear(article.date.value)}
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
                <br />
                {' '}
                <strong>{author.elements.name.value}</strong>
                {' '}
                on Twitter
              </a>
            </p>
          </div>
        </div>
      </div>
    )
  }
}

export default ArticleTemplateDetails
