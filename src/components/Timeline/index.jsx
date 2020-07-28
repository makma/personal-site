import React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'

import './style.scss'

const timeline = () => {
  const data = useStaticQuery(graphql`
    query TimelineQuery {
      kontentItemTimeline(system: { codename: { eq: "timeline" } }) {
        id
        elements {
          timeline_items {
            value {
              ... on kontent_item_timeline_item {
                system {
                  codename
                }
                elements {
                  title {
                    value
                  }
                  location {
                    value
                  }
                  company {
                    value
                  }
                  period {
                    value
                  }
                }
              }
            }
          }
        }
      }
    }
  `)

  debugger;
  const timelineItems = data.kontentItemTimeline.elements.timeline_items.value

  return (
    <div>
      <h2>My journey</h2>
      <div className="timeline">
        <div className="entries">
          {timelineItems &&
            timelineItems.map(item => (
              <div className="entry" key={item.system.codename}>
                <div className="title big">{item.elements.period.value}</div>
                <p>{item.elements.title.value}</p>
              </div>
              ))
          }
        </div>
      </div>
    </div>
  )
}

export default timeline
