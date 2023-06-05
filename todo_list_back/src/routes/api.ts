import express from 'express';
import { dataRouter } from './data-router';

const ApiRouter = express.Router();

ApiRouter.get('/', (req, res, next) => {
  res.send('Hello world!!!');
});

ApiRouter.use('/Tasks', dataRouter);

export { ApiRouter };
