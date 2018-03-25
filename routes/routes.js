let suggest = require('suggestion')

let appRouter = (app) => {

  app.get('/', (req, res) => {
    res.status(200).send('Welcome to our REST API.')
  })

  app.get('/suggestions/:keyword', (req, res, next) => {
    let keyword = req.params.keyword;
    suggest (keyword, (err, suggestions) => {
      res.status(200).send(suggestions)
    })
  })
}

module.exports = appRouter

