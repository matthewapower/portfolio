import React from "react"

export default function EmbeddedAsset({ node }) {
  console.log(node)
  const file = node.data.target.fields.file["en-US"]
  if (file.contentType === "video/mp4") {
    return (
      <video
        loop
        playsinline="true"
        autoplay="true"
        muted
        preload="auto"
        width="100%"
        src={file.url}
        className="max-w-3xl block mx-auto shadow shadow-lg rounded my-20 mx-4"
      />
    )
  } else if (file.contentType === "image/png") {
    return <img src={file.url} alt={file.fileName} className="my-20" />
  } else {
    return <h1>this is else</h1>
  }
}
