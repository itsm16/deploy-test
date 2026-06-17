import express from 'express'

const app = express()

app.get('/', (req, res) => {
  res.json({ message: 'server is running v0', status: "actions-err-fix" })
})

app.listen(3000, () => {
  console.log('Example app listening on port 3000!')
})