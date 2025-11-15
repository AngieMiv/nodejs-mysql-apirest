import express from 'express';
import indexRoutes from './routes/index.routes.js';
import monstersRoutes from './routes/monsters.routes.js';

const app = express();

app.use(express.json());

app.use(indexRoutes);
app.use('/api', monstersRoutes);

app.use((req, res, next) => {
	res.status(404).json({message: 'Endpoint not found'});
});

export default app;