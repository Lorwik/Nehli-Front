const express = require("express");
const router = express.Router();
const listarVideosEnSubcarpetas = require("../controllers/video")

router.post("/listar",  listarVideosEnSubcarpetas);


module.exports = router;