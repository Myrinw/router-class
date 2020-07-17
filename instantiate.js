const express = require('express');
const app = express();

const { Router } = express;
const router = new Router;

const port = 3000;

app.use(router);

router.get("/hi/:name", (req, res) => {
    const name = req.params.name;
    res.send(`Hi, ${name}`);
})

app.listen(port, function () {
    console.log(`listening on port ${port}`);
})