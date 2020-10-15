import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

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
                  is_current {
                    value {
                      codename
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  `)

  const timelineItems = data.kontentItemTimeline.elements.timeline_items.value

  return (
    <div>
      <h2>My journey</h2>
      <div className="timeline">
        <div className="entries">
          {timelineItems
            && timelineItems.map(item => (
              <div className="entry" key={item.system.codename}>
                <div className={item.elements.is_current.value[0].codename === 'true' ? 'title big' : 'title small'}>{item.elements.period.value}</div>
                <div className="timeline_body">
                  <p className="timeline_body__title">{item.elements.title.value}</p>
                  <p className="timeline_body__company">{item.elements.company.value}</p>
                  <p className="timeline_body__location">{item.elements.location.value}</p>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  )
}

export default timeline
