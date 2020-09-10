import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import logo from "../images/logo.svg"
import Bio from "../components/Bio"

const Info = () => {
  const data = useStaticQuery(graphql`
    query InfoQuery {
      file(name: { eq: "me" }) {
        id
        childImageSharp {
          fluid(maxWidth: 1200) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <div className="p-4 md:grid md:grid-cols-2 gap-8">
      <div className="flex items-center justify-between md:col-span-2 mb-4 md:mb-0">
        <Link to="/">
          <img
            src={logo}
            className="w-2/3 md:w-full max-w-xs mb-0"
            alt="Matthew A Power"
          />
        </Link>
        <Link
          to="/"
          className="font-body uppercase border border-black rounded-full px-4 h-16 md:h-20 w-16 md:w-20 flex items-center justify-center py-2 hover:bg-gray-100 flip"
        >
          Work
        </Link>
      </div>
      <div className="md:-mt-8">
        <Bio />
      </div>
      <Img
        fluid={data.file.childImageSharp.fluid}
        className="rounded mb-4 md:mb-0 max-h-screen-50"
      />
      <div className="font-body leading-relaxed md:col-start-2">
        <p>
          Matt began his career playing bass as a contract musician. There he
          found his sweet spot in teams by playing the background and filling
          the gaps between rhythm and harmony. While getting his bachelor's in
          marketing at Kennesaw State University, he was introduced to building
          websites in one of his courses. From there he took a coding boot camp
          and landed his first job at an agency. In his agency experience, he
          learned the ins and outs of web development, UX/UI, branding, and
          identity design. That's where he discovered he thrives in a role much
          similar to the one he served in music, playing the background and
          filling the gaps of branding, design, and development.
        </p>
        <p>
          Today Matt leads all the web design and development efforts at OUST.
          Outside of work, he continues to cross-pollinate creative thoughts
          through illustration, creative coding, and music.
        </p>
      </div>
      <a
        href="mailto:matthewallenpower@gmail.com"
        className="block uppercase border border-black md:col-span-2 font-body rounded text-center flip hover:bg-gray-100 py-8"
      >
        Email Me
      </a>
    </div>
  )
}

export default Info
