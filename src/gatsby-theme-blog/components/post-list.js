import React, { useState, useEffect } from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import styled from '@emotion/styled'
import tw from 'tailwind.macro'

const PostList = () => {
  const [activeItem, setActiveItem] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const data = useStaticQuery(graphql`
    query IndexQuery {
      allMdx {
        nodes {
          frontmatter {
            featuredImage {
              childImageSharp {
                fluid(maxWidth: 2000, quality: 1) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          childMdxBlogPost {
            slug
            title
            tags
          }
        }
      }
    }
  `)

  const Title = styled.h2`
    ${tw`p-4`}
    font-size: 5vw;
    text-transform: uppercase;
    margin: 0;
    opacity: ${props => props.active ? '1' : '.25'};
  `

  const ActiveImg = styled(Img)`
    ${tw`fixed inset-0`}
    z-index: -1;
    position: fixed !important;
    filter: blur(10px);
    display: ${props => props.active ? 'block' : 'none'};
  `

  useEffect(() => {
    if ( typeof window.orientation !== "undefined" && isMobile === false ) {
      setIsMobile(true);
    }
  })
  


  return (
    <div className="w-full border border-black rounded font-body">
      {data.allMdx.nodes.map((node, i) => {
        const id = `link${i}`
        const active = (id === activeItem) ? true : false
        const menuFocused = (activeItem !== false) ? true : false

        return (
          <Link
            key={i}
            id={id}
            to={node.childMdxBlogPost.slug}
            className={`block m-0 border-black flex items-center justify-between ${ i === data.allMdx.nodes.length - 1 ? 'border-b-0' : 'border-b'}`}
            {
              ...(!isMobile ? {
                onMouseEnter: e => setActiveItem(e.target.id ? e.target.id : e.target.parentNode.id),
                onMouseLeave: () => setActiveItem(false)
              } : {})
            }
          >
            <Title active={(active || menuFocused === false) ? true : false}>{node.childMdxBlogPost.title}</Title>
            <ActiveImg fluid={node.frontmatter.featuredImage.childImageSharp.fluid} imgStyle={{objectFit: 'contain'}} active={active}/>
            <div className={`items-center ${active ? 'flex' : 'hidden'}`}>
              <ul className="mb-0 flex">
                {node.childMdxBlogPost.tags ? node.childMdxBlogPost.tags.map((tag, i) => {
                  return (
                    
                      <li className="mb-0 mr-8 uppercase text-xs list-disc">{tag}</li>
                  )
                }) : ''}
              </ul>
              <p className={`m-0 uppercase px-4 py-2 border border-black rounded mr-4`}>View More</p>
            </div>
          </Link>
        )
      })}
    </div>
  )
}

export default PostList