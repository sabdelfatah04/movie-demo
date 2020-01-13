const express = require("express");
const User = require("../models/user");
const router = new express.Router();

router.post("/users", async (req, res) => {
    try{
        const user = new User(req.body);
        await user.save();
        res.send(user);
    }catch (error){
        res.status(500).send(error);
    }
});
router.get("/users", async (req, res) => {
    try{
        let users = await User.find({});
        res.send(users);
    }catch (error){
        res.status(500).send(error);
    }
});

router.get("/users/:id",  async (req, res) => {
    try {
      let user = await User.findById(req.params.id);
      res.send(user);  
    }catch (error) {
        res.status(500).send(error);
    }
});
router.delete("/users/:id", async(req, res) => {
    try {
        const user = await User.findByIdAndDelete(req.params.id);
        res.send(user);
    } catch (error) {
        res.status(500).send(error);
    }
});

router.patch("/users/:id", async (req, res) => {
    const updates = Object.keys(req.body);
    const allowedUpdates = ["email"];
    const isValidOperation = updates.every(update => allowedUpdates.includes(update)
    );
    try {
        const user = await User.findByIdAndUpdate(req.params.id, req.body);
        res.send(movie);
    } catch (error) {
        res.status(500).send(error);
    }
});
router.get("/users",  async (req, res) => {
    try {
        const user = await user.find({ year: { $gte: 2000, $lte: 2020 } });
      res.send(user);  
    }catch (error) {
        res.status(500).send(error);
    }
});
module.exports = router;