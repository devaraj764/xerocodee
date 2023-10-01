require('dotenv').config();
const express = require('express');
const { UserControllers } = require('../controllers');
const router = express.Router();

router.get('/', UserControllers.getUserData);
router.patch('/update', UserControllers.updateUser);

module.exports = router;