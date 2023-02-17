import userService from '../services/userService'

let handleLoging = async (req, res) => {
  let email = req.body.email
  let password = req.body.password

  if (!email || !password) {
    return res.status(500).json({
      errCode: 1,
      message: 'Missing inputs parameter!'
    })
  }

  let userData = await userService.handleUserLogin(email, password)
  //check email exist
  //password nhap vao ko dung
  //return userInfor
  // access_token :JWT json web token

  return res.status(200).json({
    errCode: userData.errCode,
    message: userData.errMessage,
    user: userData.user ? userData.user : {}
  })
}

const handleGetAllUsers = async (req, res) => {
  let id = req.body.id
  if (!id) {
    return res.status(200).json({
      errCode: 1,
      message: 'Missing required parameters',
      users: []
    })
  }
  let data = await userService.getAllUsers(id)
  console.log('data:', data)
  return res.status(200).json({
    errCode: 0,
    message: 'OK',
    data
  })
}

module.exports = {
  handleLoging,
  handleGetAllUsers
}
