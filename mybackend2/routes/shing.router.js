var ShingController = require('../controllers/main.controller'),

express = require('express'),
router = express.Router()

router
  
  .post('/SIGNUP',ShingController.SignUp)
  .post('/SIGNIN',ShingController.SignIn)
  module.exports = router