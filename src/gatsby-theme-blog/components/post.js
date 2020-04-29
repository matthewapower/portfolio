import React from "react"

import { MDXProvider } from "@mdx-js/react"
import { MDXRenderer } from "gatsby-plugin-mdx"

import Layout from "gatsby-theme-blog/src/components/layout"
import SEO from "gatsby-theme-blog/src/components/seo"
import PostTitle from "gatsby-theme-blog/src/components/post-title"
import PostDate from "gatsby-theme-blog/src/components/post-date"
import PostFooter from "gatsby-theme-blog/src/components/post-footer"

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
    <main className="border border-black">
      <PostTitle>{post.title}</PostTitle>
      <PostDate>{post.date}</PostDate>
      <MDXProvider components={components}>
        <MDXRenderer>{post.body}</MDXRenderer>
      </MDXProvider>
    </main>
    <PostFooter {...{ previous, next }} />
  </Layout>
)

export default Post