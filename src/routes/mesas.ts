import { ReqRes } from "../index";
const express = require('express');
const router = express.Router();

router.get("/", ({req, res} : ReqRes) => {
    res.send('Todos as mesas');
});

router.get("/:id", ({req, res} : ReqRes) => {
    res.send(`Mesa ${req.params.id}`);
});

router.post("/", ({req, res} : ReqRes) => {
    res.send(`Criar uma mesa`);
});

router.post("/:id", ({req, res} : ReqRes) => {
    res.send(`Atulizar uma mesa`);
});

router.delete("/:id", ({req, res} : ReqRes) => {
    res.send(`Deletar uma mesa`);
});

module.exports = router;