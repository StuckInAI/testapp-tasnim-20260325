import { DataSource } from 'typeorm';
import { Todo } from './entities/Todo';
import path from 'path';

const databasePath = process.env.DATABASE_URL?.replace('file:', '').trim();

export const AppDataSource = new DataSource({
  type: 'sqlite',
  database: databasePath || './dev.db',
  entities: [Todo],
  synchronize: process.env.NODE_ENV !== 'production', // Auto-create tables in dev, not in prod
  logging: true,
  migrations: [path.join(__dirname, '../migrations/*')],
});

// Initialize the database connection
export async function initializeDatabase() {
  try {
    if (!AppDataSource.isInitialized) {
      await AppDataSource.initialize();
      console.log('Database initialized');
    }
  } catch (error) {
    console.error('Database initialization error:', error);
    throw error;
  }
}
