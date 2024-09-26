const asyncHandler = require("express-async-handler")
const Projects = require("../models/Projects")
const Carousel = require("../models/Carousel")

exports.fetchProjects = asyncHandler(async (req, res) => {
    const result = await Projects.find()
    res.status(200).json({ message: "Project Fetch Success...!", result })
})

exports.getAllCarousel = asyncHandler(async (req, res) => {
    const result = await Carousel.find()
    res.status(200).json({ message: "blog fetch success", result })
})
exports.getProjectDetails = asyncHandler(async (req, res) => {
    const result = await Projects.findById(req.params.id)
    if (!result) {
        return res.status(404).json({ message: "Project not found" })
    }
    res.status(200).json({ message: "Fetch project details success", result })
})
