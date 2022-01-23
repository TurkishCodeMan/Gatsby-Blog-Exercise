import React from 'react';
import { Link, graphql } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import Layout from '../components/layout';

export const query = graphql`
  query CocktailQuery {
    file(name: { eq: "cocktail" }) {
      childrenImageSharp {
        gatsbyImageData(placeholder: BLURRED)
      }
    }
  }
`;

export default function AboutPage({ data }) {
  return (
    <Layout title="About this site" description="My website about information">
      <GatsbyImage
        image={getImage(data?.file?.childrenImageSharp[0])}
        alt="More information about this site"
      />
      <h1>About This Site</h1>
      <Link to="/">Home Page</Link>
    </Layout>
  );
}
