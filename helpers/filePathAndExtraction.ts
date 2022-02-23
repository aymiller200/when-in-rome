import path from 'path'
import fs from 'fs'

export function buildEntryPath() {
  return path.join(process.cwd(), 'data', 'entries.json')
}

export function extractEntries(filePath: string) {
  const fileData = fs.readFileSync(filePath)
  const data = JSON.parse(fileData.toString())
  return data
}

export function romanBuildEntryPath(){
  return path.join(process.cwd(), 'data', 'romeToNum.json')
}
