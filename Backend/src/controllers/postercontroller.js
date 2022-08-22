const express = require("express");
const router = express.Router();

const posterData = require("../models/poster.model");

router.get("/", async (req, res) => {
  try {
    const posterdata = await posterData
      .find({})
      .populate({ path: "userId", select: { userName: 1 } })
      .lean()
      .exec();
    return res.status(201).send(posterdata);
  } catch (error) {
    return res.status(500).send(error.message);
  }
});

router.post("/:id", async (req, res) => {
  try {
    const posterdata = await posterData.create({
      userId: req.params.id,
      poster: req.body.poster,
    });
    return res.status(201).send(posterdata);
  } catch (error) {
    return res.status(500).send(error.message);
  }
});

// router.delete("/:id", async (req, res) => {
//   try {
//     const posterdata = await posterData.findByIdAndDelete(req.params.id);
//     return res.status(201).send(posterdata);
//   } catch (error) {
//     return res.status(500).send(error.message);
//   }
// });

module.exports = router;
