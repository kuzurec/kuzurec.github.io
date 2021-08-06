/** @jsx jsx */
import { Themed, jsx, css } from 'theme-ui'
import { Link } from 'gatsby'
import PostTag from './post-tag'

const PostLink = ({ title, slug, date, excerpt, tags }) => (
  <article>
    <header>
      <Themed.h2
        sx={{
          mb: 1,
        }}
      >
        <Themed.a
          as={Link}
          sx={{
            textDecoration: `none`,
            ':hover': {
              color: `#2ac3ff`
            }
          }}
          to={slug}
        >
          {title || slug}
        </Themed.a>
      </Themed.h2>
      <small css={css({
        mr: 10
      })}>{date}</small>
      <PostTag tags={tags}/>
    </header>
    <section>
      <Themed.p>{excerpt}</Themed.p>
    </section>
  </article>
)

export default PostLink
