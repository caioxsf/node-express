const express = require("express");
const HomeController = require("../controllers/homeController");

const router = express.Router();

// ctrl está pegando a classe HomeController e as funcoes dentro dela, como se fosse uma struct
let ctrl = new HomeController();

// ctrl.home está pegando dentro da classe HomeControler a funcao home
router.get("/", ctrl.home);
router.get("/cadastro", ctrl.cadastro);
router.post("/cadastro", ctrl.cadastroUser);

module.exports = router;