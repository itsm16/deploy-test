import express from 'express'

const app = express()

app.get('/', (req, res) => {
  res.json({ message: 'server is running' })
})

app.listen(3000, () => {
  console.log('Example app listening on port 3000!')
})