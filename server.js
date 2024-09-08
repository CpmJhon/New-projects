const express = require('express');
const { exec } = require('child_process');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.get('/api', (req, res) => {
  res.send('Hello World');
});

app.post('/api/run-lua', (req, res) => {
  const luaScript = req.body.script;
  exec(`lua -e "${luaScript}"`, (error, stdout, stderr) => {
    if (error) {
      return res.status(500).json({ error: stderr });
    }
    res.json({ output: stdout });
  });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
