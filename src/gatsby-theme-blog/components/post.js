import * as React from 'react'
import { css } from 'theme-ui'
import { getSrc } from 'gatsby-plugin-image'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import Gitalk from 'gatsby-plugin-gitalk'
import '@suziwen/gitalk/dist/gitalk.css'
import Layout from './layout'
import SEO from './seo'
import PostTitle from './post-title'
import PostDate from './post-date'
import PostFooter from './post-footer'
import PostHero from './post-hero'
import Tags from './tags'
import PostTag from './post-tag'
import "@reach/skip-nav/styles.css";

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
}) => {
  return (
    <Layout location={location} title={title}>
      <SEO
        title={post.title}
        description={post.excerpt}
        imageSource={post.socialImage ? getSrc(post.socialImage) : getSrc(post.image)}
        imageAlt={post.imageAlt}
      />
      <main>
        <article>
          <header
            css={css({
              '@media (max-width: 1366px)': {
                mt: 4,
              },
            })}
          >
            <PostHero post={post} />
            <PostTitle>{post.title}</PostTitle>
            <PostDate>{post.date}</PostDate>
            <PostTag tags={post.tags} />
          </header>
          <section
            css={css({
              '@media (max-width: 1366px)': {
                overflowX: `scroll`,
              },
            })}
          >
            <MDXRenderer>{post.body}</MDXRenderer>
          </section>
        </article>
        <Tags />
      </main>
      <Gitalk
        options={{
          clientID: '2cc7051f05ac73cff112', // GitHub Application Client ID
          clientSecret: 'cb75747a795899f1afcdcdb413382f29853e8f92', // GitHub Application Client Secret
          repo: 'kuzurec.github.io', // 存放评论的仓库
          owner: 'kuzurec', // 仓库的创建者，
          admin: ['kuzurec'], // 如果仓库有多个人可以操作，那么在这里以数组形式写出
          id: location.pathname, // 用于标记评论是哪个页面的，确保唯一，并且长度小于50
        }}
      />
      <PostFooter {...{ previous, next }} />
    </Layout>
  )
}

export default Post
