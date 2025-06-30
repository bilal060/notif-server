import fs from 'fs';
import path from 'path';

export default function handler(req, res) {
  const logPath = path.resolve('/tmp', 'notifications.log');

  if (!fs.existsSync(logPath)) {
    return res.status(200).send('Log file is empty or not found');
  }

  const content = fs.readFileSync(logPath, 'utf8');
  res.setHeader('Content-Type', 'text/plain');
  res.status(200).send(content);
}
