import React from 'react';
import Image from 'gatsby-image';
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

          {edge.node.frontmatter.img && (
            <Image
              fixed={data.allImageSharp.edges.filter(
                ed => edge.node.frontmatter.img.includes(ed.node.fixed.originalName)
              ).map(ed => ed.node.fixed)[0]}
            />
          )}

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
            img
          }
          html
        }
      }
    }

    allImageSharp {
      edges {
        node {
          fixed(width: 720) {
            originalName
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  }
`;
