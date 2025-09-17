const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Backend is working ✅');
});

app.post('/submit', (req, res) => {
  console.log('Data from frontend:', req.body);
  res.json({ message: 'Data received successfully' });
});

app.listen(port, () => {
  console.log(`✅ Backend running at http://localhost:${port}`);
});
