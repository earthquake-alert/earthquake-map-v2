import path from 'path'
import express from 'express'

const port = process.env.PORT || 3000

const app: express.Express = express()

app.set('view engine', 'ejs')
app.use('/public', express.static(path.join(__dirname, 'server', 'public')))
app.use('/js', express.static(path.join(__dirname, 'server', 'js')))

// This page is no response.
app.get('/', (req, res) => {
  res.sendStatus(404)
})

app.get('/report', (req, res) => {
  res.send('report')
})

app.get('/information', (req, res) => {
  res.send('information')
})

app.get('/tsunami', (req, res) => {
  res.send('tsunami')
})

app.get('/epicenter', (req, res) => {
  res.render('../server/pages/epicenter.ejs')
})

app.listen(port, () => {
  console.log(`Start server. port to ${port}.`)
})
