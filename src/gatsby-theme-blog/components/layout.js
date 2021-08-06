import * as React from 'react'
import { Helmet } from 'react-helmet'
import { css, Themed } from 'theme-ui'
import { SkipNavContent } from '@reach/skip-nav'
import Header from './header'
import useBlogThemeConfig from '../hooks/configOptions'

const Layout = ({ children, ...props }) => {
  const blogThemeConfig = useBlogThemeConfig()
  const { webfontURL } = blogThemeConfig

  return (
    <Themed.root>
      <Helmet>
        <link rel="stylesheet" href={webfontURL} />
      </Helmet>
      <SkipNavContent />
      <Header {...props} />
      <div
        css={css({
          width: `100%`,
          background: `white`,
        })}
      >
        <div
          css={css({
            maxWidth: `container`,
            mx: `auto`,
            px: 3,
            py: 4,
            position: `relative`,
          })}
        >
          {children}
        </div>
      </div>
      <i id="go-up" aria-hidden="true" className="fa fa-arrow-up"></i>
    </Themed.root>
  )
}

export default Layout