import React from "react"
import { Link } from "gatsby"
import { css, Styled } from "theme-ui"

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
      <Link to="/"><Styled.h1>MATTHEWAPOWER</Styled.h1></Link>
    </header>
  )
}