import { Pool } from 'pg';

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST,OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  const { name, email, message } = req.body;

  if (!email || !name || !message) {
    return res.status(400).json({ error: 'Name, email, and message are required.' });
  }

  console.log(`Contact message received: Name: ${name}, Email: ${email}`);

  // 1. Supabase REST API (Primary)
  if (process.env.SUPABASE_URL && process.env.SUPABASE_ANON_KEY) {
    try {
      const supabaseUrl = process.env.SUPABASE_URL.replace(/\/$/, '');
      const response = await fetch(`${supabaseUrl}/rest/v1/contact_messages`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'apikey': process.env.SUPABASE_ANON_KEY,
          'Authorization': `Bearer ${process.env.SUPABASE_ANON_KEY}`,
          'Prefer': 'return=representation'
        },
        body: JSON.stringify({ 
          name, 
          email, 
          message,
          created_at: new Date().toISOString() 
        })
      });

      if (!response.ok) {
        const errText = await response.text();
        console.error('Supabase DB contact message insert failed:', errText);
        throw new Error(`Database error status ${response.status}`);
      }

      const data = await response.json();
      return res.status(200).json({ 
        message: 'Inquiry stored in database successfully.', 
        provider: 'supabase', 
        data 
      });
    } catch (error) {
      console.error('Supabase contact submission failed:', error);
      return res.status(500).json({ error: 'Database operations failed.' });
    }
  }

  // 2. Postgres Integration
  if (process.env.POSTGRES_URL || process.env.DATABASE_URL) {
    try {
      const connectionString = process.env.POSTGRES_URL || process.env.DATABASE_URL;
      const pool = new Pool({ 
        connectionString,
        ssl: { rejectUnauthorized: false }
      });
      
      // Auto-create table if missing
      await pool.query(`
        CREATE TABLE IF NOT EXISTS contact_messages (
          id SERIAL PRIMARY KEY,
          name VARCHAR(255) NOT NULL,
          email VARCHAR(255) NOT NULL,
          message TEXT NOT NULL,
          created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        );
      `);

      const result = await pool.query(
        'INSERT INTO contact_messages(name, email, message) VALUES($1, $2, $3) RETURNING *',
        [name, email, message]
      );
      
      await pool.end();
      return res.status(200).json({ 
        message: 'Inquiry stored in database successfully.', 
        provider: 'postgres', 
        data: result.rows[0] 
      });
    } catch (error) {
      console.error('Postgres contact message submission failed:', error);
      return res.status(500).json({ error: 'Database operations failed.' });
    }
  }

  // 3. Dev Sandbox Fallback
  console.log(`[Dev Sandbox Mode] Contact message saved: ${name} (${email}) - "${message}"`);
  return res.status(200).json({ 
    message: 'Inquiry registered successfully (Sandbox Mode).', 
    provider: 'local_sandbox', 
    name, 
    email 
  });
}
