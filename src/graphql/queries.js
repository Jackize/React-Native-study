import { gql } from "@apollo/client";

export const GET_REPOSITORIES = gql`
  query {
    repositories {
      edges {
        node {
          fullName
          id
          name
          ownerName
          ratingAverage
          reviewCount
          stargazersCount
          watchersCount
          forksCount
          ownerAvatarUrl
          language
          description
        }
      }
    }
  }
`;
