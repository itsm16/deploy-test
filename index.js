import express from 'express'

const app = express()

app.get('/', (req, res) => {
  res.json({ message: 'server is running v1.3', status: "docker-port-fix" })
})

app.listen(8000, () => {
  console.log('Example app listening on port 8000!')
})