import React from "react"
import { Link } from "gatsby"

const PostFooter = ({next}) => {

  return (
    <div className="h-20 overflow-hidden" style={{marginBottom: '-32px'}}>
      <Link className="border border-black rounded w-full block pb-20 hover:bg-gray-100" to={next ? next.slug : '/farrah-power/'} rel="next">
        <h2 className="p-4 uppercase border-b border-black">{next ? next.title : 'Farrah Power'}</h2>
      </Link>
    </div>
  )
}

export default PostFooter