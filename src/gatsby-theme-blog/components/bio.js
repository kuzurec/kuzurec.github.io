/**
 * Bio component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/static-query/
 */

import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { Themed, css, Flex } from "theme-ui"
import BioContent from "./bio-content"
import "../../global.css"

const Bio = props => {
  return (
    <>
      <Flex
        css={css({
          mb: 4,
          alignItems: `center`,
          justifyContent: `center`,
          flexDirection: `column`,
        })}
      >
        <Link to="/intro">
          <StaticImage
            src="../../../images/avatar.jpg"
            alt="kuzure"
            css={css({
              mr: 2,
              mb: 0,
              width: 48,
              minWidth: 48,
              borderRadius: 99999,
              marginBottom: 16,
            })}
          />
        </Link>
        <Themed.div>
          <BioContent {...props} />
        </Themed.div>
        {props.location?.pathname === "/intro" ? (
          <Themed.div>
            <Themed.div css={css({ fontSize: "13px", marginTop: "20px" })}>
              <svg className="icon" aria-hidden="true">
                <use xlinkHref="#icon-ditu"></use>
              </svg>
              上海
            </Themed.div>
            <Themed.div css={css({ fontSize: "13px", marginTop: "8px" })}>
              <svg className="icon" aria-hidden="true">
                <use xlinkHref="#icon-zhiweisvg"></use>
              </svg>
              前端开发工程师
            </Themed.div>
            <Themed.div css={css({ fontSize: "13px", marginTop: "8px" })}>
              <svg className="icon" aria-hidden="true">
                <use xlinkHref="#icon-tubiao209"></use>
              </svg>
              827230613@qq.com
            </Themed.div>
          </Themed.div>
        ) : (
          ""
        )}
      </Flex>
    </>
  )
}

export default Bio