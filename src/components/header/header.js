import React from 'react';
import PropTypes from 'prop-types';
import { Link, StaticQuery, graphql } from 'gatsby';
import Image from 'gatsby-image';
import posed from 'react-pose';
import { Container, SiteTitle } from './header.css';
import Title from 'components/title';
import Nav from 'components/header/nav';

// Example of a component-specific page transition
const AnimatedContainer = posed.div({
  enter: {
    y: 0,
    transition: {
      ease: 'easeInOut',
    },
  },
  exit: {
    y: '-100%',
    transition: {
      ease: 'easeInOut',
    },
  },
});

const Header = ({ file, title }) => (
  <AnimatedContainer>
    <Container>
      <span />

      <SiteTitle>
        <Image
          fluid={file.childImageSharp.fluid}
          style={{
            borderRadius: 400,
            width: 300,
            margin: 'auto',
            marginBottom: '2rem'
          }}
        />

        <Link to="/">
          <Title tag="h1" size="large" impact>{title}</Title>
        </Link>
      </SiteTitle>

      <Nav />
    </Container>
  </AnimatedContainer>
);

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default (props) => (
  <StaticQuery
    query={graphql`
      query HeaderQuery {
        file(absolutePath: { regex: "/heading.JPG$/" }) {
          childImageSharp {
            fluid(maxWidth:800) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={data => (
      <Header {...data} {...props} />
    )}
  />
);
