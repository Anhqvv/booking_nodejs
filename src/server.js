import express from 'express'
import bodyParser from 'body-parser'
import viewEngine from './config/viewEngine'
import initWebRoutes from './route/web'
import connectDB from './config/conectDB'
import cors from 'cors'
import { createJWT, verifyToken } from './middleware/jwtAction'

require('dotenv').config() // giup chayj dc dong process.env

let app = express()
app.use(cors({ origin: true }))

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

createJWT()
let dataDecoded = verifyToken(
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InFhIiwiY2l0eSI6Ikh1ZSIsImlhdCI6MTY3NjYyMDI3M30.wH3G3K0ierRL9M4eMEac_EDecdDemfz8g7K_dsFI0Jo'
)
console.log('data decoded', dataDecoded)
viewEngine(app)
initWebRoutes(app)

connectDB()

let port = process.env.PORT || 8088 //Port === undefined => Port = 6060

app.listen(port, () => {
  //callback
  console.log('Backend Nodejs is running on the port: ' + port)
})
