const express = require('express');
const router = express.Router();
const controller = require("../controllers/assistant")

router
.post('/check', controller.check)
.post('/description', controller.description)
// .post('/quiz/:title', controller.quiz)

module.exports = router;