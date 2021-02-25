import path from 'path'
import express from 'express'

const port = process.env.PORT || 3000
const app: express.Express = express()

app.set('view engine', 'ejs')

app.use(express.static(path.join(__dirname, 'public')))

// This page is no response.
app.get('/', (req, res) => {
  res.sendStatus(404)
})

app.get('/report', (req, res) => {
  res.render('../server/pages/report.ejs')
})

app.get('/information', (req, res) => {
  res.render('../server/pages/information.ejs')
})

app.get('/tsunami', (req, res) => {
  res.render('../server/pages/tsunami.ejs')
})

app.get('/epicenter', (req, res) => {
  const epiData = {name: "hoge"}
  res.render('../server/pages/epicenter.ejs', {epiData: epiData})
})

app.listen(port, () => {
  console.log(`Start server. port to ${port}.`)
})
