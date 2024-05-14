import gql from "graphql-tag";

export const typeDefs = gql`
  type Query {
    tracksForHome: [Track!]!
    track(id: ID!): Track
  }
  type Mutation {
    incrementTrackViews(id: ID!): IncrementTrackViewsResponse!
  }
  type Track {
    id: ID!
    title: String!
    author: Author!
    thumbnail: String
    length: Int
    modulesCount: Int
    description: String
    numberOfViews: Int
    modules: [Module!]!
  }
  type Author {
    id: ID!
    name: String!
    photo: String
  }
  type Module {
    id: ID!
    title: String!
    length: Int
  }
  type IncrementTrackViewsResponse {
    code: Int!
    success: Boolean!
    message: String!
    track: Track
  }
`;
