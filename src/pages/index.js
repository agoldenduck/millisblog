import React from 'react';
import Layout from 'components/layout';
import Box from 'components/box';
import Title from 'components/title';
import { graphql } from 'gatsby';

export default ({ data }) => (
  <Layout>
    <Box>
      {data.allMarkdownRemark && data.allMarkdownRemark.edges.map(edge => (
        <div>
          <Title>{edge.node.frontmatter.title}</Title>

          <div dangerouslySetInnerHTML={{ __html: edge.node.html }} />
        </div>
      ))}
    </Box>
  </Layout>
);

export const query = graphql`
  query HomepageQuery {
    allMarkdownRemark(
      filter: { frontmatter: { collection: { eq: "blog" } } },
      sort: { fields: frontmatter___date, order: DESC }
    ){
      edges {
        node {
          frontmatter {
            title
            thumbnail
          }
          html
        }
      }
    }
  }
`;
