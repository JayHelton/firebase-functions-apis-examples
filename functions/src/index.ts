import * as functions from 'firebase-functions';

import { app as graphqlApp } from './graphql-api';
import { app as nestJsApp } from './nestjs-api';
import { app as nodeJsApp } from './ts-node-api';

export const vanillaNodeJs = functions.https.onRequest(nodeJsApp);
export const nestJs = functions.https.onRequest(nestJsApp);
export const graphQl = functions.https.onRequest(graphqlApp);
