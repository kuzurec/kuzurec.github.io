import React from "react"
import Bio from "../gatsby-theme-blog/components/bio"
import Header from "../gatsby-theme-blog/components/header"

const Intro = props => (
  <>
    <Header {...props} />
    <Bio {...props}/>
  </>
)

export default Intro
