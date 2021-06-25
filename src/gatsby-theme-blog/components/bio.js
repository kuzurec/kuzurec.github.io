/**
 * Bio component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/static-query/
 */

import * as React from "react"
import { StaticImage  } from "gatsby-plugin-image"
import { Themed, css, Flex } from "theme-ui"
import BioContent from "./bio-content"

const Bio = () => {
  return (
    <Flex css={css({ mb: 4, alignItems: `center`, justifyContent: `center`, flexDirection: `column` })}>
      <StaticImage
        src="../../../images/avatar.jpg"
        alt="kuzure"
        css={css({
          mr: 2,
          mb: 0,
          width: 48,
          minWidth: 48,
          borderRadius: 99999,
          marginBottom: 16
        })}
      />
      <Themed.div>
        <BioContent />
      </Themed.div>
    </Flex>
  )
}

export default Bio
