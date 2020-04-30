import React from "react"
import { Link } from "gatsby"

const PostFooter = ({next}) => {

  return (
    <div className="h-20 overflow-hidden" style={{marginBottom: '-32px'}}>
      <Link className="border border-black rounded w-full block pb-20 hover:bg-gray-100" to={next ? next.slug : '/farrah-power/'} rel="next">
        <div className="border-b border-black flex items-center justify-between">
          <h2 className="p-4 uppercase mb-0">{next ? next.title : 'Farrah Power'}</h2>
          <p className={`m-0 uppercase px-4 py-2 border border-black rounded mr-4`}>View More</p>
        </div>
      </Link>
    </div>
  )
}

export default PostFooter