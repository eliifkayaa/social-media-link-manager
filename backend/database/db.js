const mongoose = require('mongoose');

const connection = async() => {
    try {
        const uri = "mongodb+srv://rastmobilecase:1@cluster0.y4m32.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
        var result = await mongoose.connect(uri, {
        });
        console.log("Connected to MongoDB");
    } catch (error) {
        console.log(`Failed to connect to MongoDB: ${error}`);
    }
}

module.exports = connection;
