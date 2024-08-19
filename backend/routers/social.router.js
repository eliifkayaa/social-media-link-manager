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
        __id: uuidv4(),
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
    const {id, name, link, description} = req.body;
    const socialMedia = await Social.findByIdAndUpdate(_id);
    socialMedia.name = name.toUpperCase();
    await Social.findByIdAndUpdate(_id, socialMedia);
    res.json({message: "Sosyal Medya hesabı başarıyla güncellendi"})
})
});

//SocialMedia Silme
router.post("/removeById", async (req,res) => {
    response(res, async ()=> {
        const {_id} = req.body;
        const result = await Social.find({socialMedia: _id});
        await Social.findByIdAndRemove(_id);
        res.json({message: "Sosyal Medya hesabı başarıyla silindi!"});  
    })
})

module.exports = router;