const express = require('express');

const router = express.Router();

const captchaCtrl = require('../controllers/captcha.controllers');

router.post('/', captchaCtrl.validateCaptchaResponse);

module.exports = router;
