import { config as dotenv } from "dotenv";
dotenv();

const { DB_HOST, DB_USER, DB_PASSWORD, DB_DATABASE } = process.env;

export const config = {
  host: DB_HOST || 'localhost',
  user: DB_USER || 'root',
  password: DB_PASSWORD || '',
  database: DB_DATABASE || 'test',
};
