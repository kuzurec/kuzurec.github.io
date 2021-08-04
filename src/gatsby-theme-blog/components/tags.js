import * as React from 'react'
import { css, Themed } from 'theme-ui'
import { Link } from 'gatsby'
import store from 'store'

const getTags = posts => {
  let tags = {}

  posts.forEach(post => {
    post.tags.forEach(tag => {
      if (tags[tag]) {
        tags[tag] += 1

        return
      }

      tags[tag] = 1
    })
  })

  return tags
}

const getAllNumber = tags => {
  const allNum = Object.keys(tags).reduce((pre, cur) => pre + tags[cur], 0)

  return allNum
}

const rootPath = `${__PATH_PREFIX__}/`

const Tags = ({ posts }) => {
  let tags

  try {
    if (!posts) {
      tags = JSON.parse(store.get('tags') || '{}')
    } else {
      tags = getTags(posts)
      store.set('tags', JSON.stringify(tags))
    }
  } catch (e) {
    console.log(e)
  }
  const allNum = getAllNumber(tags)

  return (
    <div
      css={css({
        height: 500,
        position: `absolute`,
        top: 50,
        right: -150,
        '@media (max-width: 1366px)': {
          left: 0,
          top: 2,
          display: `flex`,
          width: `100%`,
          flexWrap: `wrap`,
          height: 40,
          justifyContent: `center`
        },
      })}
    >
      <div
        css={css({
          color: `gray`,
          mb: 2,
          '@media (max-width: 1366px)': {
            mr: 2,
            lineHeight: `16px`,
            display: 'inline-block',
            height: 16
          },
        })}
      >
        <svg className="icon" aria-hidden="true">
          <use xlinkHref="#icon-biaoqian"></use>
        </svg>
        标签
      </div>
      <Themed.a
        as={Link}
        to={rootPath}
        css={css({
          lineHeight: `24px`,
          '@media (max-width: 1366px)': {
            mr: 2,
            lineHeight: `16px`,
            display: 'inline-block',
            height: 16,
          },
        })}
      >
        全部({allNum})
      </Themed.a>
      {Object.keys(tags).map(item => (
        <div
          css={css({
            lineHeight: `24px`,
            '@media (max-width: 1366px)': {
              mr: 2,
              lineHeight: `16px`,
              display: 'inline-block',
              height: 16,
            },
          })}
        >
          <Themed.a as={Link} to={`${rootPath}#${item}`}>
            {item}({tags[item]})
          </Themed.a>
        </div>
      ))}
    </div>
  )
}

export default Tags
