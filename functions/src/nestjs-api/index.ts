import { NestFactory } from '@nestjs/core';
import { ExpressAdapter } from '@nestjs/platform-express';
import express from 'express';

import { AppModule } from './src/app.module';

export const app = express();

export const createNestServer = async (expressInstance: any) => {
	const app = await NestFactory.create(
		AppModule,
		new ExpressAdapter(expressInstance)
	);

	return app.init();
};

createNestServer(app)
	.then((v) => console.log('Nest Ready'))
	.catch((err) => console.error('Nest broken', err));
