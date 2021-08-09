const express = require("express")
const router = express.Router()
const controller = require("../controllers/controller")

module.exports = router;

router.get('/', (req, res) =>{
  res.send("Hola mundo")
})

router.use(controller.send404);