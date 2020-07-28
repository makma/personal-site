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

  console.log(JSON.stringify(data))

  return (
    <div>
      <h2>My journey</h2>
      <div className="timeline">
      <div className="entries">
        <div className="entry">
          <div className="title">2011</div>
          <div className="timeline_body">
            <p>
              Neque sunt voluptatibus repellat pariatur ut enim. Eveniet rerum
              suscipit eveniet amet dignissimos. Doloremque et distinctio quod
              molestiae ut.
            </p>
          </div>
        </div>
        <div className="entry">
          <div className="title">2012</div>
          <div className="timeline_body">
            <p>
              Quo nobis cumque dolor iure voluptatem voluptatem alias soluta.
            </p>
          </div>
        </div>
        <div className="entry">
          <div className="title big">2013</div>
          <div className="timeline_body">
            <p>
              Rerum sit libero possimus amet excepturi. Exercitationem enim
              dolores sunt praesentium dolorum praesentium.
            </p>
          </div>
        </div>
        <div className="entry">
          <div className="title">2014</div>
          <div className="timeline_body">
            <p>
              Voluptatibus veniam ea reprehenderit atque. Reiciendis non laborum
              adipisci ipsa pariatur omnis. Sed ipsam repudiandae velit. Omnis
              libero nostrum aperiam nemo dolor ea eos eius. Esse a non itaque
              quidem.
            </p>
          </div>
        </div>
        <div className="entry">
          <div className="title">2015</div>
          <div className="timeline_body">
            <p>
              VAdipisci totam omnis cum et suscipit excepturi et excepturi.
              Inventore sequi sit ut aliquid. Modi aut dolores dignissimos.
            </p>
            <p>
              Delectus facere officia consequuntur molestias deserunt illo.
              Placeat laudantium beatae natus excepturi ab nihil voluptates.
            </p>
          </div>
        </div>
        <div className="entry">
          <div className="title big">2016</div>
          <div className="timeline_body">
            <p>
              Impedit dolorem commodi explicabo fugit aut alias voluptatem.
              Magnam earum rerum quae dicta quibusdam aliquam ut.
            </p>
          </div>
        </div>
        <div className="entry">
          <div className="title">2017</div>
          <div className="timeline_body">
            <p>Qui facere eos aut suscipit doloremque quos...</p>
          </div>
        </div>
      </div>
      </div>
    </div>
  )
}

export default timeline
