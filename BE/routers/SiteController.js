const express = require('express');
const router = express.Router();

const newSites = require('../app/controllers/Sites')

router.use('/', newSites.writeBlog);

module.exports = router;