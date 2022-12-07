const express = require('express');
const app = express()
const port = 3000

const path = require('path');
const root = path.join(__dirname, 'public/')

app.use('/', express.static(path.join(__dirname, 'public')));

app.get('/about', function(req, res) {
  res.sendFile(root + 'about.html');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});