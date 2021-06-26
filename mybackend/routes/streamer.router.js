var StreamController = require('../controllers/main.controller'),

express = require('express'),
router = express.Router()

router
  
  .post('/SIGNUP',StreamController.SignUp)
  .post('/SIGNIN',StreamController.SignIn)
  module.exports = router