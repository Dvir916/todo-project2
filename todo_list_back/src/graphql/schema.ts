import { gql } from 'apollo-server-express';

export const typeDefs = gql`
  type Todo {
    id: String
    text: String
    isComplete: Boolean
  }

  type Query {
    root: String
    Tasks: [Todo]
  }
`;
