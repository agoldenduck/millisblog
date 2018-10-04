import React from 'react';
import Layout from 'components/layout';
import Box from 'components/box';
import Title from 'components/title';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import styled from 'styled-components';

export const Image = styled(Img)`
  margin-bottom: 2rem;
`
export const HR = styled.hr`
  border: 0.1px rgba(0,0,0,0.1) solid;
  margin: 3rem 1rem;
`

export default ({ data }) => (
  <Layout>
    <Box>
      {data.allMarkdownRemark && data.allMarkdownRemark.edges.map((edge, i, arr) => (
        <div>
          <Title tag="h2">{edge.node.frontmatter.title}</Title>

          {edge.node.frontmatter.img && (
            <Image
              fluid={data.allImageSharp.edges.filter(
                ed => edge.node.frontmatter.img.includes(ed.node.fluid.originalName)
              ).map(ed => ed.node.fluid)[0]}
            />
          )}

          <div dangerouslySetInnerHTML={{ __html: edge.node.html }} />

          {i < arr.length - 1 && <HR />}
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
          fluid(maxWidth: 700) {
            originalName
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  }
`;
