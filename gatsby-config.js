module.exports = {
  siteMetadata: {
    siteUrl: 'https://yourDomain.tld',
    title: 'Blog',
    description: 'Blog Project',
    image:
      'https://inhabitat.com/wp-content/blogs.dir/1/files/2014/02/Canada-polar-bears-Google-Street-View-1.jpg',
  },
  plugins: [
    'gatsby-plugin-react-helmet',

    //This plugins creating MDX Pages src/posts
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'posts',
        path: `${__dirname}/src/posts`,
      },
    },
    {
      resolve: 'gatsby-plugin-page-creator',
      options: {
        path: `${__dirname}/src/posts`,
      },
    },
    'gatsby-remark-images',
    {
      resolve: 'gatsby-plugin-mdx',
      options: {
        gatsbyRemarkPlugins: [
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 1200,
            },
          },
        ],
        defaultLayouts: {
          posts: require.resolve('./src/components/post-layout.js'),
        },
      },
    },
    //End of MDX Config

    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images`,
      },
    },

    'gatsby-plugin-image',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-source-sanity',
      options: {
        projectId: 'svj3s428',
        dataset: 'production',
        token:
          'skbqgKMdygGe0nh9CT6WDDWR3M8PHp9o3XdQPfILOsEGH2wXTNB225Mfpua91Jxmq0keLz7yQXfAFphUFf8XDkeoXnPJdhPMLOn33U2cxWZqapYd6gN4iyIyTG8Wc1NUmQkBoIH7Wl5x8iLx5wEyxDMPzOo1JxkKINSdcQjNPjgUIpXyFZN5',
      },
    },
  ],
};
