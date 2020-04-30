import React from "react"

import { MDXProvider } from "@mdx-js/react"
import { MDXRenderer } from "gatsby-plugin-mdx"

import Layout from "gatsby-theme-blog/src/components/layout"
import SEO from "gatsby-theme-blog/src/components/seo"
import PostFooter from "./post-footer"

import tw from "tailwind.macro"
import styled from "@emotion/styled"

const MyP = styled.p`
  ${tw`lg:mx-64`}

  @media (min-width: 1024px){
    .gatsby-resp-image-wrapper {
      margin: auto -16rem !important;
    }
  }
`

const components = {
  p: MyP
}

const Post = ({
  data: {
    post,
    site: {
      siteMetadata: { title },
    },
  },
  location,
  previous,
  next,
}) => (
  <Layout location={location} title={title}>
    <SEO
      title={post.title}
      description={post.excerpt}
      keywords={post.keywords}
    />
    <main className="border border-black rounded mb-12">
      <div className="border-black border-b flex items-center justify-between">
        <h1 className="p-4 uppercase mb-0">{post.title}</h1>
        <ul className="mb-0 flex">
          {post.tags ? post.tags.map((tag, i) => {
            return (
              <li className="mb-0 mr-8 uppercase text-xs list-disc">{tag}</li>
            )
          }) : ''}
        </ul>
      </div>
      <MDXProvider components={components}>
        <MDXRenderer>{post.body}</MDXRenderer>
      </MDXProvider>
    </main>
    <PostFooter {...{ previous, next }} />
  </Layout>
)

export default Post