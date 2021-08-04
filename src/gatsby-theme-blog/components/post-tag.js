/** @jsx jsx */
import { Themed, jsx, css } from 'theme-ui'
import { Link } from 'gatsby'

const rootPath = `${__PATH_PREFIX__}/`

const PostTag = ({ tags }) => {
  return (
    <span>
      {tags.map(tag => (
        <span>
          <svg className="icon" aria-hidden="true">
            <use xlinkHref="#icon-biaoqian"></use>
          </svg>
          <Themed.a
            as={Link}
            to={`${rootPath}#${tag}`}
            css={css({
              fontSize: 14,
              textDecoration: `none`,
              color: `gray`,
              borderRadius: `12px`,
              mr: 9,
              cursor: `pointer`,
              ':hover': {
                color: `black`,
                borderColor: `black`,
              },
            })}
          >
            {tag}
          </Themed.a>
        </span>
      ))}
    </span>
  )
}

export default PostTag
