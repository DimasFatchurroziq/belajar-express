import express from 'express';
import router from './routes/todoRouter.js'
import logger from './middlewares/loggerMiddleware.js'

const app = express();
const port = 3000;

app.use(logger);

app.use(express.json());

app.use('/todos', router);

app.listen(port, () => {
    console.log('tersambung ke post')
});