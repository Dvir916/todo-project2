import { getTodoId } from '../utils';

export const resolvers = {
  Query: {
    root: () => 'Hello World!',
    Tasks: () => getTodoId(),
  },
};
