const express = require('express')
const path = require("path");

const app = express()
const port = process.env.PORT || 3030

const distDir = path.join(__dirname, '..', 'dist')

app.get('/assets/**', express.static(distDir))

app.get('/', (req, res) => {
  res.sendFile(path.join(distDir, '/index.html'));
})

app.get('*', (req, res) => {
  res.redirect('/')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
