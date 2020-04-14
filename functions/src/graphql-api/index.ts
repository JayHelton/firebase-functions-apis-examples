import { ApolloServer, gql } from 'apollo-server-express';
import express from 'express';

const schema = gql`
	type Query {
		"A simple type for getting started!"
		hello: String
	}
`;
const resolvers = {
	Query: {
		hello: () => 'world',
	},
};

export const app = express();

const apolloServer = new ApolloServer({
	typeDefs: schema,
	resolvers,
	// Enable graphiql gui
	introspection: true,
	playground: true,
});

apolloServer.applyMiddleware({ app, path: '/', cors: true });
