import { getConnection } from 'typeorm';

export const getTodoId = () => getConnection().query(`SELECT * FROM "Todo"`);
