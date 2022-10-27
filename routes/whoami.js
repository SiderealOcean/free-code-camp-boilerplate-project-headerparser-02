const express = require("express");
const router = express.Router();

//controllers
const { whoami } = require('../controllers/whoami');

// /api/:whoami

router.get("/:whoami", whoami);

module.exports = router;