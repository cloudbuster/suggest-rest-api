let express = require('express')
let bodyParser = require('body-parser')
let routes = require('./routes/routes.js')

let app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Methods', 'GET')
  res.header('Access-Control-Allow-Headers', 'Content-Type')
  next()
})

routes(app)



let server = app.listen(3000, () => {
  console.log("App running on port.", server.address().port);
})

