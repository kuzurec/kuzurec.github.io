/** @jsx jsx */
import { useEffect } from 'react'
import { Link } from 'gatsby'
import { jsx, css, Themed } from 'theme-ui'
import { MainImage } from 'gatsby-plugin-image'
import Bio from './bio'

const Title = ({ children }) => {
  return (
    <Themed.h1
      css={css({
        my: 0,
        fontSize: 4,
        marginTop: 50,
      })}
    >
      <Themed.a
        as={Link}
        css={css({
          color: `white`,
          boxShadow: `none`,
          textDecoration: `underline`,
          ':hover': {
            color: `#2ac3ff`,
          },
        })}
        to={`/`}
      >
        {children}
      </Themed.a>
    </Themed.h1>
  )
}

const Header = props => {
  return (
    <div>
      <div
        css={css({
          height: 402,
          overflow: `hidden`,
          position: `fixed !important`,
          top: 0,
          zIndex: -1,
        })}
      >
        <MainImage src={`${__PATH_PREFIX__}/index-bg.png`} alt="background" />
      </div>
      <header
        css={css({
          pb: 80,
        })}
      >
        <nav
          id="header-nav"
          css={css({
            width: `100%`,
            padding: `1rem 0`,
            position: `fixed`,
            top: 0,
            left: `auto`,
            right: `auto`,
            bottom: `auto`,
            transition: `all .4s ease-in`
          })}
        >
          <section
            css={css({
              width: `70%`,
              margin: `auto`,
            })}
          >
            <section
              css={css({
                float: `right`,
              })}
            >
              <Themed.a
                as={Link}
                to={`/`}
                css={css({
                  color: `white`,
                  marginRight: 12,
                  textDecoration: `none`,
                  cursor: `pointer`,
                  ':hover': {
                    color: `#66E0FF`,
                  },
                })}
              >
                主页
              </Themed.a>
              <Themed.a
                to={`/about/`}
                as={Link}
                css={css({
                  color: `white`,
                  cursor: `pointer`,
                  textDecoration: `none`,
                  ':hover': {
                    color: `#66E0FF`,
                  },
                })}
              >
                关于
              </Themed.a>
            </section>
          </section>
        </nav>
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
          {<Bio {...props} />}
        </div>
      </header>
    </div>
  )
}

export default Header
