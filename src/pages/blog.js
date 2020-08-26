import React from 'react';
import Layout from '../components/layout';
import { Link, graphql } from 'gatsby';

const blogList = ({ data }) => {
  return (
    <Layout>
      {data.allNotionPageBlog.edges.map(edge => (
        <Link
          to={`/blog/${edge.node.slug}`}
        >{edge.node.title}</Link>
      ))}
    </Layout>
  );
};

export default blogList;

export const query = graphql`
  query {
    allNotionPageBlog(
      filter: { isDraft: { eq: false } }
      sort: { fields: [indexPage], order: ASC }
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