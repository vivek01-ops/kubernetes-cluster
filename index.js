// Importing the Express module
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Root route
app.get('/', (req, res) => {
  res.send(`
    <h1 style="color: #4CAF50; text-align: center;">🚀 Hello, Elevate Labs! 🚀</h1>
    <p style="text-align: center;">This is my first <strong>DevOps</strong> task, and I'm excited to learn and grow!</p>
  `);
});

// Starting the server
app.listen(port, () => {
  console.log(`✅ Server is running and listening on http://localhost:${port}`);
});
