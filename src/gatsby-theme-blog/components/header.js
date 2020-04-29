import React from "react"
import { Link } from "gatsby"
import { css } from "theme-ui"

import logo from "../../images/logo.svg"

export default () => {

  return (
    <header
      css={css({
        maxWidth: `container`,
        mx: `auto`,
        px: 3,
        pt: 4,
      })}
    >
      <Link to="/"><img src={logo} alt="" className="w-64"/></Link>
    </header>
  )
}