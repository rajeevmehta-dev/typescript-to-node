import express from 'express';
import firstRoute from './routes/route.js';
const app = express();

app.use(firstRoute);
app.listen(3000);