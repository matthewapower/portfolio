import React from "react"
import { graphql } from "gatsby"

import { BLOCKS } from "@contentful/rich-text-types"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

import Layout from "../components/layout"
import SEO from "gatsby-theme-blog/src/components/seo"
import PostFooter from "../components/post-footer"
import EmbeddedAsset from "../components/embeddedAsset"

import tw from "tailwind.macro"
import styled from "@emotion/styled"

const MyP = styled.p`
  ${tw`mx-4 lg:mx-64`}

  li & {
    ${tw`mx-0`}
  }

  @media (min-width: 1024px) {
    .gatsby-resp-image-wrapper {
      margin: auto -16rem !important;
    }
  }
`

const components = {
  h1: tw.h1`font-body font-medium mx-4 lg:mx-64 text-center`,
  h2: tw.h2`font-body font-medium mx-4 lg:mx-64 text-center`,
  ul: tw.ul`list-disc mx-4 lg:mx-64 pl-6`,
  a: tw.a`underline text-blue`,
  p: MyP,
}

const Post = props => {
  const previous = props.pageContext.previous
  const next = props.pageContext.next
  const options = {
    renderNode: {
      [BLOCKS.HEADING_1]: (node, children) => (
        <h1 className="font-body font-medium mx-4 lg:mx-64 text-center">
          {children}
        </h1>
      ),
      [BLOCKS.HEADING_2]: (node, children) => (
        <h2 className="font-body font-medium mx-4 lg:mx-64 text-center">
          {children}
        </h2>
      ),
      [BLOCKS.UL_LIST]: (node, children) => (
        <ul className="list-disc mx-4 lg:mx-64 pl-6">{children}</ul>
      ),
      [BLOCKS.LIST_ITEM]: (node, children) => <li>{children}</li>,
      [BLOCKS.PARAGRAPH]: (node, children) => <MyP>{children}</MyP>,
      [BLOCKS.EMBEDDED_ASSET]: node => <EmbeddedAsset node={node} />,
    },
  }

  return (
    <Layout title={props.data.post.title} footer={false}>
      <SEO title={props.data.post.title} />
      <main className="border border-black rounded font-body mb-12 mt-12">
        <div className="border-black border-b flex flex-col md:flex-row items-center justify-between">
          <h1 className="text-2xl md:text-5xl font-light p-4 uppercase mb-0 text-center md:text-left">
            {props.data.post.title}
          </h1>
          <ul className="mb-4 md:mb-0 flex">
            {props.data.post.tags
              ? props.data.post.tags.map((tag, i) => {
                  return (
                    <li className="mb-0 mr-8 uppercase text-xs list-disc">
                      {tag}
                    </li>
                  )
                })
              : ""}
          </ul>
        </div>
        <div className="my-12 md:my-32">
          {documentToReactComponents(props.data.post.richText.json, options)}
        </div>
      </main>
      <PostFooter {...{ previous, next }} />
    </Layout>
  )
}

export default Post

export const query = graphql`
  query BlogPost($slug: String!) {
    post: contentfulCase(slug: { eq: $slug }) {
      title
      richText: childContentfulCaseBodyRichTextNode {
        json
      }
    }
  }
`
