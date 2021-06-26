var ShingController = require('../controllers/main.controller'),

express = require('express'),
router = express.Router()

router
  
  .post('/SIGNUP',ShingController.SignUp)
  .get('/SIGNIN',ShingController.SignIn)
  module.exports = router