import * as React from 'react'
import { css } from 'theme-ui'
import PostLink from './post-link'

const PostList = ({ posts, location }) => {
  const newPosts = location.hash.length
    ? posts.filter(post => post.tags.includes(decodeURI(location.hash.substr(1))))
    : posts

  return (
    <>
      {location.hash.length ? (
        <div
          css={css({
            color: `gray`,
            "@media (max-width: 1366px)": {
              mt: 4
            }
          })}
        >
          <small onClick={() => {window.history.back(-1)}} css={css({
            cursor: `pointer`,
            mr: 1
          })}>
            <svg className="icon" aria-hidden="true" css={(css({
              color: `gray !important`
            }))}>
              <use xlinkHref="#icon-fanhui"></use>
            </svg>
          </small>
          <small>当前标签：</small>
          <small>{decodeURI(location.hash.substr(1))}</small>
        </div>
      ) : (
        <></>
      )}
      {newPosts.map(node => (
        <>
          <PostLink key={node.slug} {...node} />
        </>
      ))}
    </>
  )
}

export default PostList
