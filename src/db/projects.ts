import { SQLiteDatabase } from 'expo-sqlite'

export type Project = {
  id: number
  name: string
  city: string
  createdAt: string
  updatedAt: string
}

export async function dbCreateTableProjects(db: SQLiteDatabase) {
  await db.execAsync(`
    CREATE TABLE IF NOT EXISTS projects (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL,
      city TEXT,
      createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    );
  `)
}

export async function dbCreateProject(
  db: SQLiteDatabase,
  name: Project['name'],
  city: Project['city'],
) {
  await db.runAsync(
    'INSERT INTO projects (name, city) VALUES (?, ?)',
    name,
    city,
  )
}

export async function dbReadProjects(db: SQLiteDatabase): Promise<Project[]> {
  return db.getAllAsync('SELECT * FROM projects')
}
