const { Router } = require('express');
const router = new Router;

router.get('/', (req, res) => res.send("seperated"));

module.exports = router;