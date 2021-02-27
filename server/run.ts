import path from 'path'
import express from 'express'

type Query = string | string[] | undefined

const port = process.env.PORT || 3000
const app: express.Express = express()

app.set('view engine', 'ejs')

app.use(express.static(path.join(__dirname, 'public')))

// This page is no response.
app.get('/', (req, res) => {
  res.sendStatus(404)
})

app.get('/report', (req, res) => {
  const title = parseQuery(req.query.title as Query, '震度速報')
  const date = parseQuery(req.query.date as Query, '--/--/-- --:--')
  const epiData = parseQuery(req.query.data as Query, '{}')

  res.render('../server/pages/report.ejs')
})

app.get('/information', (req, res) => {
  const title = parseQuery(req.query.title as Query, '震源・震度情報')
  const date = parseQuery(req.query.date as Query, '--/--/-- --:--')
  const epiData = parseQuery(req.query.data as Query, '{}')

  res.render('../server/pages/information.ejs')
})

app.get('/tsunami', (req, res) => {
  const title = parseQuery(req.query.title as Query, '津波に関するお知らせ')
  const date = parseQuery(req.query.date as Query, '--/--/-- --:--')
  const epiData = parseQuery(req.query.data as Query, '{}')

  res.render('../server/pages/tsunami.ejs')
})

app.get('/epicenter', (req, res) => {
  const title = parseQuery(req.query.title as Query, '震源に関するお知らせ')
  const date = parseQuery(req.query.date as Query, '--/--/-- --:--')
  const epiData = parseQuery(req.query.data as Query, '{}')

  res.render('../server/pages/epicenter.ejs', {data: epiData, title: title, date: date})
})

app.listen(port, () => {
  console.log(`Start server. port to ${port}.`)
})

/**
 * Parse query string.
 *
 * @param query query to parse.
 * @param otherText if query undefined, return it.
 */
function parseQuery(query: Query, otherText: string): string {
  const text = query || otherText

  if(typeof text === 'string') {
    return text
  }
  return text.join(',')
}
