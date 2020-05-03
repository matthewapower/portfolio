import React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import logo from '../images/logo.svg'

const Info = () => {
  const data = useStaticQuery(graphql`
    query InfoQuery {
      file(name: {eq: "me"}) {
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
    <div className="w-full p-4">
      <div className="border border-black rounded p-4 grid grid-cols-2 gap-8">
        <div className="flex items-start justify-between col-span-2">
          <Link to="/" className="w-2/3 md:w-1/2 mb-0"><img src={logo} alt="Matthew A Power"/></Link>
          <Link to="/" className="font-body uppercase border border-black rounded-full px-4 h-20 w-20 flex items-center justify-center py-2 hover:bg-gray-100 flip">Work</Link>
        </div>
        <Img fluid={data.file.childImageSharp.fluid} className="rounded col-span-2 max-h-screen-50"/>
        <div>
          <h1 className="text-xl mb-4 max-w-sm font-bold">Matthew Power is a designer and front-end developer from Atlanta, GA.</h1>
          <ul className="ml-0 flex font-body list-disc mb-0">
            <li className="mx-4 mr-6 flip"><a href="https://www.are.na/matt-power" target="_blank" rel="noopener noreferrer">Are.na</a></li>
            <li className="mx-4 mr-6 flip"><a href="https://github.com/matthewapower" target="_blank" rel="noopener noreferrer">Github</a></li>
            <li className="mx-4 mr-6 flip"><a href="https://www.instagram.com/matthewapower/" target="_blank" rel="noopener noreferrer">Instagram</a></li>
            <li className="mx-4 mr-6 flip"><a href="mailto:matthewallenpower@gmail.com">Email</a></li>
          </ul>
        </div>
        <div className="font-body">
          <p className="text-md mb-0 max-w-md">Currently: Lead Developer at <a href="https://gotowildplaces.com/" className="underline flip" target="_blank" rel="noopener noreferrer">OUST (Wild Places)</a></p>
          <p className="text-md mb-0 max-w-md">Previously: Designer at <a href="https://www.polarnotion.com/" className="underline flip" target="_blank" rel="noopener noreferrer">Polar Notion</a></p>
        </div>
        <a href="mailto:matthewallenpower@gmail.com" className="uppercase border border-black col-span-2 font-body rounded text-center flip hover:bg-gray-100 py-8">Email Me</a>
      </div>
    </div>
  )
}

export default Info
