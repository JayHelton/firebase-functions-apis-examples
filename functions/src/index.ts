import * as functions from 'firebase-functions';

import { app as nestJsApp } from './nestjs-api';
import { app as nodeJsApp } from './ts-node-api';

export const vanillaNodeJs = functions.https.onRequest(nodeJsApp);
export const nestJs = functions.https.onRequest(nestJsApp);
