import React from "react"
import { css, Themed } from "theme-ui"
import { Link } from 'gatsby';

/**
 * Change the content to add your own bio
 */

export default function Bio(props) {
  return (
    <div>
      <div>
        <span>kuzure-耳东山亘</span>
        <Themed.a as={Link} to="https://github.com/kuzurec">
          <svg className="icon github-icon" aria-hidden="true">
            <use xlinkHref="#icon-github"></use>
          </svg>
        </Themed.a>
      </div>
      <div css={css({ color: "gray", fontSize: "13px", marginTop: "4px" })}>
        东边有座山
      </div>
    </div>
  )
}
