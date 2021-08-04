import * as React from "react"
import { css } from "theme-ui"
import Layout from "./layout"
import SEO from "./seo"
import Footer from "./home-footer"
import PostList from "./post-list"
import Tags from './tags'

const Posts = ({ location, posts, siteTitle, socialLinks }) => (
  <Layout location={location} title={siteTitle}>
    <SEO title="Home" />
    <main>
      <PostList posts={posts} location={location} />
      <Tags posts={posts}/>
    </main>
    <Footer socialLinks={socialLinks} />
  </Layout>
)

export default Posts
