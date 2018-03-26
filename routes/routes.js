let suggest = require('suggestion')
let cors = require('cors')

let appRouter = (app) => {

  app.get('/', (req, res) => {
    res.status(200).send('Welcome to our REST API.')
  })

  app.get('/suggestions/:keyword', cors(), (req, res, next) => {
    let keyword = req.params.keyword;
    suggest (keyword, (err, suggestions) => {
      res.status(200).send(JSON.stringify(suggestions))
    })
  })


}
module.exports = appRouter

