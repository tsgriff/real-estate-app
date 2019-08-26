// DEPENDENCIES //

const express = require('express')
      , bodyParser = require('body-parser')
      , massive = require('massive')
      , session = require('express-session')
      , cors = require('cors')
      , server_config = require('../config.js')
      , path = require('path')

// INITIALIZE //

const app = module.exports = express();
app.use(express.static('.././build'))
app.use(bodyParser.json())
app.use(session({
  secret: server_config.SECRET
}))
app.use(cors())

massive({
  host: server_config.HOST,
  port: 5432,
  database: server_config.DATABASE,
  user: server_config.USER,
  password: server_config.PASSWORD,
  ssl: false,
  poolSize: 10
}).then( dbInstance => {
  app.set('db', dbInstance)
}).catch( err => console.log(err) );

// CONTROLLERS //
const propertiesCtrl = require('./controllers/propertiesCtrl')

// // POST //
app.post('/api/properties', propertiesCtrl.addProperty)

// GET //
app.get('/api/properties', propertiesCtrl.getAllProperties)
app.get('/api/properties/:mls_number?/:city?/:state?/:zipcode?/:bedrooms?/:bathrooms?/:square_feet?', propertiesCtrl.searchForProperty)

// PUT //
// app.put('/api/properties/:mls_number', propertiesCtrl.updateProperty)

// DELETE //
app.delete('/api/properties/:mls_number', propertiesCtrl.deleteProperty)

// LISTEN/PORT //

app.get('*', function (request, response){
    response.sendFile(path.join(__dirname, '.././build/', 'index.html'))
})

const port = 8080

app.listen(port, () => {
  console.log("Started server on port", port)
});