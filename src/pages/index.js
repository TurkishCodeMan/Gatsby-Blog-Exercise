import React from 'react';
import { graphql, Link, useStaticQuery } from 'gatsby';
import Layout from '../components/layout';
import { StaticImage } from 'gatsby-plugin-image';
import { imageWrapper } from '../styles/index.module.css';

export default function IndexPage() {
  const data = useStaticQuery(graphql`
    query GetBlogPosts {
      allMdx(sort: { fields: frontmatter___date, order: DESC }) {
        nodes {
          id
          slug
          frontmatter {
            title
            date(fromNow: true)
            description
          }
        }
      }
      allSanityMovie(
        sort: {fields: _updatedAt, order: DESC}
        filter: { id: { ne: null } }
        limit: 10
      ) {
        nodes {
          id
          title
          slug {
            current
          }
          gatsbyPath(filePath: "/movie/{SanityMovie.slug__current}")
        }
      }
    }
  `);

  const posts = data.allMdx.nodes;
  const movies=data.allSanityMovie.nodes;

  return (
    <Layout>
      <div className={imageWrapper}>
        <StaticImage
          src="../images/ivana-la-61jg6zviI7I-unsplash.jpg"
          alt="a corgi sitting on a bed"
          placeholder="blurred"
          width={300}
          height={300}
        />
      </div>

      <h1>Hello Frontend Masters!</h1>
      <Link to="/about">About Page</Link>

      <h2>Check out my recent blog posts</h2>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <Link to={post.slug}>{post.frontmatter.title}</Link>
            <small>posted {post.frontmatter.date} </small>
          </li>
        ))}
      </ul>

      <h2>
        Latest movies of <em>Huseyin Altikulac (Sanity IO)</em>
      </h2>

      <ul>
        {movies.map(movie=>(
          <li key={movie.id}>
            <Link to={movie.gatsbyPath}>{movie.title}</Link>
          </li>
        ))}
      </ul>
    </Layout>
  );
}
