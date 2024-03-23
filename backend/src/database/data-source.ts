import { DataSource } from 'typeorm';
import dotenv from 'dotenv';

dotenv.config();

export const dataSource: DataSource = new DataSource({
  type: 'postgres',
  host: process.env['POSTGRES_HOST'],
  port: Number.parseInt(process.env['POSTGRES_PORT']),
  username: process.env['POSTGRES_USER'],
  password: process.env['POSTGRES_PASSWORD'],
  database: process.env['POSTGRES_DB'],
  entities: [],
  logging: true,
});
