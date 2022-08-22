const express = require("express");
const User = require("../models/users.model");

const router = express.Router();

router.post("/create", async (req, res) => {
  try {
    let user = await User.findOne({ userName: req.body.userName })
      .lean()
      .exec();

    if (user) {
      return res
        .status(200)
        .json({
         user
        });
    }

    user = await User.create(req.body);

    return res.status(201).json({ user });
  } catch (e) {
    return res.status(500).json({ status: "failed", message: e.message });
  }
});

router.post("/login", async (req, res) => {
  try {
    const user = await User.findOne({ userName: req.body.userName });

    if (!user) {
      return res
        .status(400)
        .json({ status: "failed", message: "Please check your userName" });
    }

    return res.status(201).json({ user });
  } catch (e) {
    return res.status(500).json({ status: "failed", message: e.message });
  }
});

// router.get("/", async (req, res) => {
//   try {
//     const users = await User.find({}).lean().exec();
//     return res.status(201).send(users);
//   } catch (error) {
//       return res.status(500).send(error.message)
//   }
// });


module.exports = router;
