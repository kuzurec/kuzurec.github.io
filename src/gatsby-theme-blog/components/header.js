/** @jsx jsx */
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { jsx, css, Themed } from "theme-ui"
import Bio from "./bio"

const rootPath = `${__PATH_PREFIX__}/`

const Title = ({ children, location }) => {
  if (location.pathname === rootPath) {
    return (
      <Themed.h1
        css={css({
          my: 0,
          fontSize: 4,
          marginTop: 50
        })}
      >
        <Themed.a
          as={Link}
          css={css({
            color: `inherit`,
            boxShadow: `none`,
            textDecoration: `none`,
          })}
          to={`/`}
        >
          {children}
        </Themed.a>
      </Themed.h1>
    )
  } else {
    return (
      <Themed.h3
        as="p"
        css={css({
          my: 0,
          marginTop: 50
        })}
      >
        <Themed.a
          as={Link}
          css={css({
            boxShadow: `none`,
            textDecoration: `none`,
            color: `primary`,
          })}
          to={`/`}
        >
          {children}
        </Themed.a>
      </Themed.h3>
    )
  }
}

const Header = props => (
  <div>
    <nav css={{ height: 50, background: `#B85883`, position: 'fixed', width: '100%', zIndex: 99 }}>
      <StaticImage
        src="../../../images/favicon.png"
        alt="kuzure"
        css={css({
          mr: 2,
          mb: 0,
          width: 48,
          minWidth: 48,
          marginLeft: 20
        })}
      />
    </nav>
    <header>
      <div
        css={css({
          maxWidth: `container`,
          mx: `auto`,
          px: 3,
          pt: 4,
        })}
      >
        <div
          css={css({
            display: `flex`,
            justifyContent: `space-between`,
            alignItems: `center`,
            mb: 4,
          })}
        >
          <Title {...props}>Kuzure's blog</Title>
        </div>
        {props.location.pathname === rootPath && <Bio {...props}/>}
      </div>
    </header>
  </div>
)

export default Header
