import { useSQLiteDevTools } from 'expo-sqlite-devtools'
import { useSQLiteContext } from 'expo-sqlite'

export type DevSQLiteToolsProps = {}

// const db = SQLite.openDatabaseSync(DB_NAME)

export default function DevSQLiteTools({}: DevSQLiteToolsProps) {
  const db = useSQLiteContext()
  useSQLiteDevTools(db)

  return null
}
