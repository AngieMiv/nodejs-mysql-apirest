import 'dotenv/config';

export const PORT = process.env.PORT || 3000; // puerto de Express
export const DB_HOST = process.env.DB_HOST;   // host de Railway
export const DB_USER = process.env.DB_USER;   // usuario Railway
export const DB_PASSWORD = process.env.DB_PASSWORD; // pass Railway
export const DB_NAME = process.env.DB_NAME;   // nombre DB Railway
export const DB_PORT = process.env.DB_PORT || 3306; // puerto DB
