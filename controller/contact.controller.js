const asyncHandler = require("express-async-handler")
const contact = require("../models/contact")

exports.getEnquery = asyncHandler(async (req, res) => {
    const result = await contact.find()
    res.json({ message: "contact fetch Success", result })
})
// exports.createEnquery = asyncHandler(async (req, res) => {
//     await contact.create(req.body)
//     res.json({ message: "enquery Added Success" })
// })
exports.createEnquery = asyncHandler(async (req, res) => {
    const { name, email, company, message, mobile } = req.body
    await sendEmail({ to: "jatish933@gmail.com", message: `company${company},email${email} message ${message}`, subject: ` new Enqurey from ${company}` })

    await sendEmail({ to: ` email, message: thank you for Enqurey i Will get Touch with You soon, subject: thank you for your interst` })

    await contact.create(req.body)
    res.json({ message: "enquery Added Success" })
})
exports.deleteEnquery = asyncHandler(async (req, res) => {
    const { id } = req.params
    await contact.findByIdAndDelete(id)
    res.json({ message: "enquery delete Success" })
})