import jwt from 'jsonwebtoken'
require('dotenv').config()
const createJWT = () => {
  let payload = { username: 'qa', city: 'Hue' }
  let key = process.env.JWT_SERCET
  let token = jwt.sign(payload, key)
  console.log('the token is: ', token)
  return token
}

const verifyToken = token => {
  let key = process.env.JWT_SERCET
  let data = null

  try {
    let decoded = jwt.verify(token, key)
    data = decoded
  } catch (err) {
    console.log(err)
  }
  return data
}
module.exports = {
  createJWT,
  verifyToken
}
