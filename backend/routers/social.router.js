const express = require("express");
const router = express.Router();
const Social = require("../models/social.model");
const {v4: uuidv4} = require("uuid");
const response = require("../services/response.service");

//SocialMedia Listesi
router.get("/getAll", async (req, res) => {
    response (res, async()=> {
        const socialMedia = await Social.find({}).sort({name:1});
        response.json(socialMedia)
    })
});

//SocialMedia Ekleme
router.post("/add", async (req, res)=> {
    const {name, link, description} = req.body;
    let socialMedia = new Social({
        _id: uuidv4(),
        name: name.toUpperCase(),
        link: link,
        description: description
    })
    await socialMedia.save();
    res.json({message: "Sosyal Medya hesabı başarıyla eklendi."})
})

//SocialMedia Güncelleme
router.post("/update", async (req, res)=> {
response(res, async()=> {
    const {_id, name, link, description} = req.body;
    await Social.findByIdAndUpdate(_id, {
        name: name.toUpperCase(),
        link: link,
        description: description
    });
    res.json({message: "Sosyal Medya hesabı başarıyla güncellendi"});
})
});

//SocialMedia Silme
router.post("/removeById", async (req,res) => {
    const {_id} = req.body;
    await Social.findByIdAndDelete(_id);
    res.json({message: "Sosyal Medya hesabı başarıyla silindi!"}); 
})

module.exports = router;