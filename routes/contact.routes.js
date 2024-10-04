const { rateLimit } = require("express-rate-limit")
const router = require("express").Router()
const contactController = require("../controller/contact.controller")

router
    .get("/get-enquery", rateLimit({ windowMs: 1 * 60 * 1000, limit: 1 }), contactController.getEnquery)
    .post("/create-enquery", contactController.createEnquery)
    .delete("/detele-enquery", contactController.deleteEnquery)

module.exports = router

