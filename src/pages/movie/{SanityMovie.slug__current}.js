import React from 'react';
import { graphql } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import Layout from '../../components/layout';
import {imageWrapper} from "../../styles/sanity-movie.module.css"
export const query = graphql`
  query SanityMovie($id: String!) {
    sanityMovie(id: { eq: $id }) {
      title
      slug {
        current
      }
      releaseDate(fromNow: true)
      poster {
        asset {
          gatsbyImageData(placeholder: BLURRED)
        }
      }
      crewMembers {
        person {
          name
          image {
            asset {
              gatsbyImageData(placeholder: BLURRED)
            }
          }
        }
      }
    }
  }
`;

export default function SanityMovie({ data }) {
  const movie = data.sanityMovie;

  return (
    <Layout title={movie.title} description={movie.slug.current}>
      <GatsbyImage
        image={movie.poster.asset.gatsbyImageData}
        alt={movie.title}
      />
      <h1>{movie.title}</h1>
      <p>Posted {movie.releaseDate}</p>

      <h2>Crew Members</h2>
      <ul>
        {movie.crewMembers.map((person) => (
          <li key={person.person.name}>
            <p>{person.person?.name}</p>
            {person.person?.image && (
              <div className={imageWrapper}>
                <GatsbyImage
                  image={person.person?.image?.asset?.gatsbyImageData}
                  alt={person.person.name}
                />
              </div>
            )}
          </li>
        ))}
      </ul>
    </Layout>
  );
}
