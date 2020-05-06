import React from "react"
import { Link } from "gatsby"

import logo from "../images/logo.svg"

export default () => {

  return (
    <header className="flex p-4 w-full justify-between items-center">
      <Link to="/"><img src={logo} alt="" className="w-2/3 md:w-full max-w-xs mb-0"/></Link>
      <Link to="/info" className="uppercase font-body border border-black rounded-full px-4 h-16 md:h-20 w-16 md:w-20 flex items-center justify-center py-2 hover:bg-gray-100 flip">Info</Link>
    </header>
  )
}