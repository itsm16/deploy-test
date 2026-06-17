import express from 'express'

const app = express()

app.get('/', (req, res) => {
  res.json({ message: 'server is running v1', status: "docker test" })
})

app.listen(3000, () => {
  console.log('Example app listening on port 3000!')
})