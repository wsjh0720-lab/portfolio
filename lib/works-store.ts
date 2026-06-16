import { WorkItem } from '@/data/types'
import { works as seedData } from '@/data/works'
import fs from 'fs'
import path from 'path'

const DATA_FILE = path.join(process.cwd(), 'lib', 'works-data.json')

function ensureDataFile(): void {
  if (!fs.existsSync(DATA_FILE)) {
    fs.writeFileSync(DATA_FILE, JSON.stringify(seedData, null, 2), 'utf-8')
  }
}

export function readWorks(): WorkItem[] {
  ensureDataFile()
  const raw = fs.readFileSync(DATA_FILE, 'utf-8')
  return JSON.parse(raw) as WorkItem[]
}

export function writeWorks(works: WorkItem[]): void {
  fs.writeFileSync(DATA_FILE, JSON.stringify(works, null, 2), 'utf-8')
}

export function addWork(work: WorkItem): WorkItem {
  const works = readWorks()
  works.push(work)
  writeWorks(works)
  return work
}

export function updateWork(id: string, updates: Partial<WorkItem>): WorkItem | null {
  const works = readWorks()
  const idx = works.findIndex((w) => w.id === id)
  if (idx === -1) return null
  works[idx] = { ...works[idx], ...updates, id } as WorkItem
  writeWorks(works)
  return works[idx]
}

export function deleteWork(id: string): boolean {
  const works = readWorks()
  const filtered = works.filter((w) => w.id !== id)
  if (filtered.length === works.length) return false
  writeWorks(filtered)
  return true
}
