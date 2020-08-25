import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = ({ data }) => {
  return (
    <Layout>
      <SEO title="Home" />
      {data.allNotionPageBlog.edges.map(edge => (
        <div>
          <Link to={`/blog/${edge.node.slug}`}>{edge.node.title}</Link>
        </div>
      ))}
    </Layout>
  );
};

export default IndexPage

export const query = graphql`
  query {
    allNotionPageBlog(
      filter: { isDraft: { eq: false } }
      sort: { fields: [indexPage], order: DESC }
    ) {
      edges {
        node {
          title
          slug
          excerpt
          pageIcon
        }
      }
    }
  }
`;