const express = require("express");
const router = express.Router();
const Social = require("../models/social.model");
const { v4: uuidv4 } = require("uuid");

//SocialMedia Listesi
router.get("/getAll", async (req, res) => {
  try {
    const socialMedia = await Social.find({}); // MongoDB'den tüm sosyal medya hesaplarını çekiyoruz.
    res.json(socialMedia); // Sonuçları JSON formatında döndürüyoruz
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
});

//SocialMedia Ekleme
router.post("/add", async (req, res) => {
  try {
    const { name, link, description } = req.body;

    // Yeni bir Social oluşturuyoruz ve gerekli alanları dolduruyoruz.
    let socialMedia = new Social({
      _id: uuidv4(),
      name: name.toUpperCase(),
      link: link,
      description: description,
    }); 
    await socialMedia.save();  // Yeni sosyal medya hesabını MongoDB'ye kaydediyoruz.
    res.json({ message: "Sosyal Medya hesabı başarıyla eklendi." });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

//SocialMedia Silme
router.post("/removeById", async (req, res) => {
  try {
    const { _id } = req.body;
    await Social.findByIdAndDelete(_id);  // Belirtilen ID'ye sahip sosyal medya hesabını MongoDB'den siliyoruz.
    res.json({ message: "Sosyal Medya hesabı başarıyla silindi!" });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

//SocialMedia Güncelleme
router.post("/update", async (req, res) => {
  try {
    const { _id, name, link, description } = req.body;
    await Social.findByIdAndUpdate(_id, { // Belirtilen ID'ye sahip sosyal medya hesabını güncelliyoruz.
      name: name.toUpperCase(),
      link: link,
      description: description,
    });
    res.json({ message: "Sosyal Medya hesabı başarıyla güncellendi" });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

//Resolver kullanımı için belirli bir ID'ye sahip sosyal medya hesabını almak için bir GET route tanımlıyoruz.
router.get('/api/socialmedia/getById/:id', (req, res) => {
  const id = req.params.id;
  //Veritabanından ID'ye göre veri çekme işlemi
  db.findById(id, (err, result) => {
    if (err) return res.status(500).send(err);
    res.json(result);
  });
});

module.exports = router;
