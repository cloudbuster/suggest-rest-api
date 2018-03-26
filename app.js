const express = require('express')
const bodyParser = require('body-parser')
const routes = require('./routes/routes.js')
const morgan = require('morgan')

let app = express()

app.use(morgan('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Methods', 'GET')
  res.header('Access-Control-Allow-Headers', 'Content-Type')
  next()
})

routes(app)

let server = app.listen(process.env.PORT || 3000, () => {
  console.log("App running on port.", server.address().port);
})

