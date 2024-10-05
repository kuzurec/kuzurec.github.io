import React from 'react'
import { css, Themed } from 'theme-ui'
import { Link } from 'gatsby'

/**
 * Change the content to add your own bio
 */

export default function Bio(props) {
  return (
    <div>
      <div>
        <span
          css={css({
            color: props.isFooter ? 'black' : 'white',
            fontSize: '24px',
            textAlign: 'center',
            width: '100%',
            display: 'block',
          })}
        >
          岵安
        </span>
      </div>
      <Themed.a
        css={css({
          fontSize: 13,
          color: 'white',
          lineHeight: '32px',
        })}
      >
        <svg className="icon email-icon" aria-hidden="true">
          <use xlinkHref="#icon-tubiao209"></use>
        </svg>
        827230613@qq.com
      </Themed.a>
      <div css={css({ color: 'gray', fontSize: '13px', marginTop: '4px' })}>只身打马过草原</div>
    </div>
  )
}
