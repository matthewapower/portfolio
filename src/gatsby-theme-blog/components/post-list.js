import React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

const PostList = () => {
  const data = useStaticQuery(graphql`
    query IndexQuery {
      allMdx {
        nodes {
          frontmatter {
            featuredImage {
              childImageSharp {
                fluid(maxWidth: 600) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          childMdxBlogPost {
            slug
          }
        }
      }
    }
  `)

  console.log(data)

  return (
    <div className="grid md:grid-cols-2">
      {data.allMdx.nodes.map(node => {
        return (
          <Link to={node.childMdxBlogPost.slug} className="hover:opacity-75">
            <Img fluid={node.frontmatter.featuredImage.childImageSharp.fluid}/>
          </Link>
        )
      })}
    </div>
  )
}

export default PostList