const jwt = require("jsonwebtoken");

// Token oluştururken kullanılacak gizli anahtarı tanımlıyoruz. Bu anahtar, token'ların güvenliğini sağlamak için kullanılır.
const secretKey = "Gizli anahtar 123 Gizli anahtar 123 Gizli anahtar 123";

// Token'ın geçerlilik süresini belirleyen seçenekleri tanımlıyoruz. Burada token 1 gün süreyle geçerli olacak.
const options = {
    expiresIn: "1d",
};

//Token, bir kullanıcı veya sistemin kimliğini doğrulamak veya belirli izinleri sağlamak için kullanılan bir veri parçasıdır. Payload içeren bir token oluşturmak için bir fonksiyon tanımlıyoruz.
const token = (payload) =>{
    return jwt.sign(payload, secretKey, options);
}

module.exports = token;