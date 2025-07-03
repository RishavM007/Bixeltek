import { GraphQLClient } from 'graphql-request';

const endpoint = 'https://demo.bixeltek.com/headless/graphql';

export const client = new GraphQLClient(endpoint);
