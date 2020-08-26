/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} />
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          minHeight: `calc(100vh - 140px)`,
          padding: `1.45rem 1.0875rem`,
        }}
      >
        <main>{children}</main>

      </div>
      <footer style={{
            background: `#F06B2E`,
            padding: `.5rem 0`,
          }}>
        <div
          style={{
            margin: `0 auto`,
            maxWidth: 960,
            textAlign: `center`
            
          }}
        >
          © {new Date().getFullYear()}, Built with
          {` `}
          <a style={{
            color: `#ffffff`,
            
          }} href="https://www.gatsbyjs.org">Gatsby</a>
        </div>
      </footer>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
