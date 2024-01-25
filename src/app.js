import express from 'express'
import config from './config.js'

import productRoutes from './routes/products.routes.js'

const app = express();

// Settings
app.set('port', config.port);

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(productRoutes);

export default app;
