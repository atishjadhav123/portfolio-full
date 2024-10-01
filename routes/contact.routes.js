
const router = require("express").Router()
const contactController = require("../controller/contact.controller")

router
    .get("/get-enquery", contactController.getEnquery)
    .post("/create-enquery", contactController.createEnquery)
    .delete("/detele-enquery", contactController.deleteEnquery)

module.exports = router

