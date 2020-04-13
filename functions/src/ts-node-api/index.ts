import * as express from 'express';
import * as admin from 'firebase-admin';

admin.initializeApp();

const db = admin.firestore();

export const app = express();

app.get('/', (_, res) => {
	res.status(200).json('hello from nodejs');
});

app.get('/data', async (_, res) => {
	res.status(200).json((await db.collection('nodeJsData').get()).docs);
});

app.post('/data', async (req, res) => {
	const saved = await db
		.collection('nodeJsData')
		.doc()
		.set(req.body, { merge: true });
	res.status(200).json(saved);
});
