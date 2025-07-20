import { SQLiteDatabase } from 'expo-sqlite'
import * as Device from 'expo-device'
import { dbCreateTableProjects } from '@/src/db/projects'

// Based on https://docs.expo.dev/versions/latest/sdk/sqlite/#usesqlitecontext-hook
export async function migrateDbIfNeeded(db: SQLiteDatabase) {
  const DATABASE_VERSION = 1

  // Drop
  // if (true) {
  //   await db.execAsync(`
  //       DROP TABLE IF EXISTS dev_device;
  //       DROP TABLE IF EXISTS projects;
  //       PRAGMA user_version = 0
  //   `)
  // }

  const pragmaUserVersion = await db.getFirstAsync<{
    user_version: number
  }>('PRAGMA user_version')

  if (pragmaUserVersion === null) return

  let currentDbVersion = pragmaUserVersion.user_version

  if (currentDbVersion >= DATABASE_VERSION) {
    return
  }

  if (currentDbVersion === 0) {
    // dev_device for debug purposes, so that I can see which device I'm looking at in db inspector

    await db.execAsync(`
    PRAGMA journal_mode = 'wal';
    CREATE TABLE dev_device (modelName TEXT, modelId TEXT, osName TEXT, osVersion TEXT, manufacturer TEXT, isDevice INTEGER);
    `)

    await dbCreateTableProjects(db)

    await db.runAsync(
      'INSERT INTO dev_device (modelName, modelId, osName, osVersion, manufacturer, isDevice) VALUES (?, ?, ?, ?, ?, ?)',
      Device.modelName,
      Device.modelId ?? null,
      Device.osName,
      Device.osVersion,
      Device.manufacturer ?? null,
      Device.isDevice ? 1 : 0,
    )

    // currentDbVersion = 1
  }
  // if (currentDbVersion === 1) {
  //   Add more migrations
  // }
  await db.execAsync(`PRAGMA user_version = ${DATABASE_VERSION}`)
}
