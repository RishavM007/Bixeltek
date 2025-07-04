export const GET_ALL_POSTS = `
  query GetAllPosts {
    posts {
      nodes {
        id
        slug
        title
        excerpt
        date
        featuredImage {
          node {
            sourceUrl
          }
        }
      }
    }
  }
`;

export const GET_SINGLE_POST = `
 query GetSinglePost($slug: ID!) {
  post(id: $slug, idType: SLUG) {
    id
    title
    content
    date
    featuredImage {
      node {
        sourceUrl
      }
    }
    categories {
      nodes {
        name
        slug
      }
    }
  }
}

`;



export const GET_SUGGESTED_POSTS = `
  query GetSuggestedPosts($excludeId: ID!) {
    posts(where: { orderby: { field: DATE, order: DESC }, notIn: [$excludeId] }, first: 5) {
      nodes {
        slug
        title
        excerpt
      }
    }
  }
`;
