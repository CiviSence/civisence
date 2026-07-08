import { spawn } from 'child_process';

console.log('⚡ Starting CiviSence Dev environment...');

// Start local Node.js API server
const apiServer = spawn('node', ['dev-server.js'], { stdio: 'inherit' });

// Start Vite compiler
const viteServer = spawn('npx', ['vite'], { stdio: 'inherit', shell: true });

// Listen for process exit signals
process.on('SIGINT', () => {
  console.log('\nShutting down dev servers...');
  apiServer.kill();
  viteServer.kill();
  process.exit();
});

process.on('SIGTERM', () => {
  apiServer.kill();
  viteServer.kill();
  process.exit();
});
