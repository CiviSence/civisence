import { Pool } from 'pg';

export default async function handler(req, res) {
  // Enable CORS
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  const { email } = req.body;

  if (!email || typeof email !== 'string' || !email.includes('@')) {
    return res.status(400).json({ error: 'A valid email address is required.' });
  }

  console.log(`Newsletter subscription request: ${email}`);

  // 1. Supabase REST API Integration (Primary)
  if (process.env.SUPABASE_URL && process.env.SUPABASE_ANON_KEY) {
    try {
      const supabaseUrl = process.env.SUPABASE_URL.replace(/\/$/, '');
      const response = await fetch(`${supabaseUrl}/rest/v1/subscribers`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'apikey': process.env.SUPABASE_ANON_KEY,
          'Authorization': `Bearer ${process.env.SUPABASE_ANON_KEY}`,
          'Prefer': 'return=representation'
        },
        body: JSON.stringify({ 
          email, 
          created_at: new Date().toISOString() 
        })
      });

      if (!response.ok) {
        const errText = await response.text();
        console.error('Supabase DB response error:', errText);
        throw new Error(`Database error status ${response.status}`);
      }

      const data = await response.json();
      return res.status(200).json({ 
        message: 'Subscription stored in database successfully.', 
        provider: 'supabase', 
        data 
      });
    } catch (error) {
      console.error('Supabase subscription failed:', error);
      return res.status(500).json({ error: 'Database operations failed.' });
    }
  }

  // 2. Vercel Postgres / PostgreSQL connection Integration
  if (process.env.POSTGRES_URL || process.env.DATABASE_URL) {
    try {
      const connectionString = process.env.POSTGRES_URL || process.env.DATABASE_URL;
      const pool = new Pool({ 
        connectionString,
        ssl: { rejectUnauthorized: false }
      });
      
      // Auto-create table if missing
      await pool.query(`
        CREATE TABLE IF NOT EXISTS subscribers (
          id SERIAL PRIMARY KEY,
          email VARCHAR(255) UNIQUE NOT NULL,
          created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        );
      `);

      const result = await pool.query(
        'INSERT INTO subscribers(email) VALUES($1) ON CONFLICT (email) DO UPDATE SET email = EXCLUDED.email RETURNING *',
        [email]
      );
      
      await pool.end();
      return res.status(200).json({ 
        message: 'Subscription stored in database successfully.', 
        provider: 'postgres', 
        data: result.rows[0] 
      });
    } catch (error) {
      console.error('Postgres subscription failed:', error);
      return res.status(500).json({ error: 'Database operations failed.' });
    }
  }

  // 3. Dev Sandbox Fallback
  console.log(`[Dev Sandbox Mode] Email saved: ${email}`);
  return res.status(200).json({ 
    message: 'Subscription registered successfully (Sandbox Mode).', 
    provider: 'local_sandbox', 
    email 
  });
}
