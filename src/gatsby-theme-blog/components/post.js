import React from "react"

import { MDXProvider } from "@mdx-js/react"
import { MDXRenderer } from "gatsby-plugin-mdx"

import Layout from "./layout"
import SEO from "gatsby-theme-blog/src/components/seo"
import PostFooter from "./post-footer"

import tw from "tailwind.macro"
import styled from "@emotion/styled"

const MyP = styled.p`
  ${tw`mx-4 lg:mx-64`}

  @media (min-width: 1024px){
    .gatsby-resp-image-wrapper {
      margin: auto -16rem !important;
    }
  }
`

const components = {
  h1: tw.h1`font-body font-medium mx-4 lg:mx-64`,
  h2: tw.h2`font-body font-medium mx-4 lg:mx-64`,
  ul: tw.ul`list-disc mx-4 lg:mx-64 pl-6`,
  a: tw.a`underline text-blue`,
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
  <Layout location={location} title={title} footer={false}>
    <SEO
      title={post.title}
      description={post.excerpt}
      keywords={post.keywords}
    />
    <main className="border border-black rounded font-body mb-12">
      <div className="border-black border-b flex flex-col md:flex-row items-center justify-between">
        <h1 className="p-4 uppercase mb-0 text-center md:text-left">{post.title}</h1>
        <ul className="mb-4 md:mb-0 flex">
          {post.tags ? post.tags.map((tag, i) => {
            return (
              <li className="mb-0 mr-8 uppercase text-xs list-disc">{tag}</li>
            )
          }) : ''}
        </ul>
      </div>
      <div className="my-12 md:my-32">
        <MDXProvider components={components}>
          <MDXRenderer>{post.body}</MDXRenderer>
        </MDXProvider>
      </div>
    </main>
    <PostFooter {...{ previous, next }} />
  </Layout>
)

export default Post