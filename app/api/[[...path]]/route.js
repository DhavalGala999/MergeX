import { NextResponse } from 'next/server'
import { MongoClient } from 'mongodb'
import { v4 as uuidv4 } from 'uuid'

let client
let db

async function getDb() {
  if (db) return db
  client = new MongoClient(process.env.MONGO_URL)
  await client.connect()
  const dbName = process.env.DB_NAME || 'mergex'
  db = client.db(dbName)
  return db
}

const cors = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET,POST,OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type,Authorization',
}

export async function OPTIONS() {
  return new NextResponse(null, { status: 204, headers: cors })
}

export async function GET(request, { params }) {
  const path = (params?.path || []).join('/')
  try {
    if (path === '' || path === 'health') {
      return NextResponse.json({ ok: true, service: 'MergeX API', time: new Date().toISOString() }, { headers: cors })
    }
    if (path === 'leads') {
      const database = await getDb()
      const leads = await database.collection('leads').find({}, { projection: { _id: 0 } }).sort({ createdAt: -1 }).limit(200).toArray()
      return NextResponse.json({ leads }, { headers: cors })
    }
    return NextResponse.json({ error: 'Not found' }, { status: 404, headers: cors })
  } catch (e) {
    return NextResponse.json({ error: e.message }, { status: 500, headers: cors })
  }
}

export async function POST(request, { params }) {
  const path = (params?.path || []).join('/')
  try {
    const body = await request.json().catch(() => ({}))
    if (path === 'contact') {
      const { name, email, company, budget, message, projectType } = body
      if (!name || !email || !message) {
        return NextResponse.json({ error: 'name, email, and message are required' }, { status: 400, headers: cors })
      }
      const database = await getDb()
      const lead = {
        id: uuidv4(),
        name: String(name).trim(),
        email: String(email).trim(),
        company: company ? String(company).trim() : '',
        budget: budget ? String(budget).trim() : '',
        projectType: projectType ? String(projectType).trim() : '',
        message: String(message).trim(),
        createdAt: new Date().toISOString(),
      }
      await database.collection('leads').insertOne(lead)
      return NextResponse.json({ ok: true, id: lead.id }, { headers: cors })
    }
    return NextResponse.json({ error: 'Not found' }, { status: 404, headers: cors })
  } catch (e) {
    return NextResponse.json({ error: e.message }, { status: 500, headers: cors })
  }
}
