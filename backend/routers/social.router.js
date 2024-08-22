const express = require("express");
const router = express.Router();
const Social = require("../models/social.model");
const { v4: uuidv4 } = require("uuid");

//SocialMedia Listesi
router.get("/getAll", async (req, res) => {
  try {
    const socialMedia = await Social.find({}).sort({ name: 1 });
    res.json(socialMedia);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
});

//SocialMedia Ekleme
router.post("/add", async (req, res) => {
  try {
    const { name, link, description } = req.body;
    let socialMedia = new Social({
      _id: uuidv4(),
      name: name.toUpperCase(),
      link: link,
      description: description,
    });
    await socialMedia.save();
    res.json({ message: "Sosyal Medya hesabı başarıyla eklendi." });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

//SocialMedia Silme
router.post("/removeById", async (req, res) => {
  try {
    const { _id } = req.body;
    await Social.findByIdAndDelete(_id);
    res.json({ message: "Sosyal Medya hesabı başarıyla silindi!" });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

//SocialMedia Güncelleme
router.post("/update", async (req, res) => {
  try {
    const { _id, name, link, description } = req.body;
    await Social.findByIdAndUpdate(_id, {
      name: name.toUpperCase(),
      link: link,
      description: description,
    });
    res.json({ message: "Sosyal Medya hesabı başarıyla güncellendi" });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = router;
