export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).send('Method Not Allowed');
  }

  const fs = require('fs');
  const path = require('path');
  const notif = req.body;

  const logPath = path.resolve('/tmp', 'notifications.log');

  try {
    fs.appendFileSync(logPath, JSON.stringify(notif) + '\n');
  } catch (err) {
    console.error('Write failed:', err);
  }

  console.log('Received notification:', notif);
  res.status(200).send('Notification received');
}




