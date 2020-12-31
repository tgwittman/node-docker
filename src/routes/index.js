const express = require('express');
const router = express.Router();

router.get('/', function(req, res, next) {
  res.render('index', {
    projectUrl: 'https://github.com/tgwittman/node-docker',
    project: 'node-docker'
  });
});

module.exports = router;
