import React, { useState, useEffect } from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import { useScroll } from "../components/useScroll"
import Img from "gatsby-image"
import styled from "@emotion/styled"
import tw from "tailwind.macro"

const Feed = () => {
  const [activeItem, setActiveItem] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const { scrollY } = useScroll()
  const data = useStaticQuery(graphql`
    query homeQuery {
      allContentfulCase {
        nodes {
          slug
          title
          tags {
            category
          }
          featuredPhoto {
            fluid(quality: 1, maxWidth: 2000) {
              ...GatsbyContentfulFluid
            }
          }
        }
      }
    }
  `)

  const Title = styled.h2`
    ${tw`p-4 font-light`}
    font-size: 5vw;
    text-transform: uppercase;
    margin: 0;
    opacity: ${props => (props.active ? "1" : ".25")};
  `

  const ActiveImg = styled(Img)`
    ${tw`fixed inset-0`}
    z-index: -1;
    position: fixed !important;
    filter: blur(10px);
    opacity: ${props => (props.active ? "1" : "0")};
  `

  useEffect(() => {
    if (typeof window.orientation !== "undefined" && isMobile === false) {
      setIsMobile(true)
    }

    // TODO: Scroll interaction

    // if (isMobile === true) {
    //   let screenH = document.documentElement.clientHeight
    //   let pageH = document.documentElement.scrollHeight
    //   let cases = data.allMdx.nodes
    //   let triggerLength = pageH - screenH - 40
    //   let hotspotH = triggerLength / cases.length

    //   cases.forEach((c,i) => {
    //     let offestY = (screenH / 2)
    //     let minY = (hotspotH * (i + 1)) + offestY
    //     let maxY = minY + hotspotH

    //     if ((scrollY + offestY) > minY && (scrollY + offestY) <= maxY) {
    //       activeItem === 'link' + i ? console.Log('its already set') : setActiveItem('link' + i)
    //     }
    //   })
    // }
  }, [isMobile, scrollY])

  return (
    <div className="min-h-screen md:min-w-0 flex items-center justify-center my-24">
      <div className="w-full border border-black rounded font-body">
        {data.allContentfulCase.nodes.map((node, i) => {
          const id = `link${i}`
          const active = id === activeItem
          const menuFocused = activeItem !== false

          return (
            <Link
              key={i}
              id={id}
              to={node.slug}
              className={`block m-0 border-black flex items-center justify-between ${
                i === data.allContentfulCase.nodes.length - 1
                  ? "border-b-0"
                  : "border-b"
              }`}
              {...(!isMobile
                ? {
                    onMouseEnter: e =>
                      setActiveItem(
                        e.target.id ? e.target.id : e.target.parentNode.id
                      ),
                    onMouseLeave: () => setActiveItem(false),
                  }
                : {})}
            >
              <Title active={active || menuFocused === false ? true : false}>
                {node.title}
              </Title>
              <ActiveImg
                fluid={node.featuredPhoto.fluid}
                imgStyle={{ objectFit: "contain" }}
                active={active}
              />
              <div
                className={`items-center ${
                  active ? "md:flex hidden" : "hidden"
                }`}
              >
                <ul className="mb-0 flex">
                  {node.tags
                    ? node.tags.category.map((tag, i) => {
                        return (
                          <li
                            key={i}
                            className="mb-0 mr-8 uppercase text-xs list-disc"
                          >
                            {tag}
                          </li>
                        )
                      })
                    : ""}
                </ul>
                <p
                  className={`m-0 uppercase px-4 py-2 border border-black rounded mr-4`}
                >
                  View More
                </p>
              </div>
            </Link>
          )
        })}
      </div>
    </div>
  )
}

export default Feed
