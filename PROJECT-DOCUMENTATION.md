# Proje Dökümantasyonu

## Uygulama Çalışma Prensibi

Bu dökümantasyon, Sosyal Medya ve Link Yönetim Uygulaması'nın nasıl çalıştığını özetlemektedir. Kullanıcılar uygulamayı kullanarak sosyal medya linklerini yönetebilir, arama ve sayfalama işlemleri yapabilirler.

### Kullanıcı Girişi ve Kaydı

1. **Kayıt (Register)**:
   - Kullanıcılar kayıt formunu kullanarak uygulamaya yeni bir hesap oluşturabilirler.
   - Kayıt formunda ad-soyad, kullanıcı adı, şifre gibi bilgiler girilir.
   - Başarılı bir kayıt işlemi sonrası kullanıcı, `localStorage`'a kaydedilir ve uygulama login sayfasına yönlendirilir.

2. **Giriş (Login)**:
   - Mevcut kullanıcılar, kullanıcı adı ve şifre bilgilerini kullanarak giriş yapabilirler.
   - Kullanıcı adı olarak `elifgokce` ve şifre olarak `1` kullanarak giriş testi yapabilirsiniz.
   - Giriş başarılı olduğunda, kullanıcı bilgileri ve erişim token'ı `localStorage`'a kaydedilir ve uygulamanın ana sayfasına (`/home`) yönlendirilir.

### Ana Sayfa (Home Page)

1. **Sosyal Medya Linklerini Yönetme**:
   - Ana sayfada, sosyal medya linkleri bir tablo şeklinde görüntülenir.
   - Kullanıcılar yeni sosyal medya linkleri ekleyebilir veya mevcut linkleri güncelleyebilir ve silebilirler.

2. **Yeni Sosyal Medya Linki Ekleme**:
   - "Yeni Hesap Ekle" butonuna tıklayarak sosyal medya linki ekleme modalını açabilirsiniz.
   - Formda sosyal medya adı, linki ve açıklaması gibi bilgileri girerek yeni bir sosyal medya kaydı ekleyebilirsiniz.

3. **Güncelleme ve Silme**:
   - Tablo üzerindeki "İşlemler" sütununda bulunan "Güncelle" ve "Sil" ikon butonlarını kullanarak mevcut sosyal medya linklerini güncelleyebilir veya silebilirsiniz.
   - Güncelleme işlemi bir modal pencerede gerçekleştirilir ve veriler form aracılığıyla güncellenir.
   - Silme işlemi, bir onay mesajı ile gerçekleştirilir ve seçilen kayıt tablodan kaldırılır.

4. **Arama ve Sayfalama**:
   - **Arama (Search)**: Tablo üzerindeki search input kutusunu kullanarak sosyal medya linkleri arasında arama yapabilirsiniz. Arama terimi sosyal medya adına göre filtreleme yapar.
   - **Sayfalama (Pagination)**: Tabloyu sayfalama özelliği ile yönetilmektedir. Sayfa başına gösterilen satır sayısını değiştirebilir ve farklı sayfalara geçiş yapabilirsiniz.

### Teknik Detaylar

1. **Backend API**:
   - Backend, kullanıcı kayıt, giriş, sosyal medya linklerini ekleme, güncelleme ve silme işlemlerini gerçekleştiren API uç noktalarına sahiptir.
   - API, `localhost:3000` adresinde çalışır ve sosyal medya verilerini MongoDB veritabanında saklar.

2. **Frontend**:
   - Angular, kullanıcı arayüzünü oluşturur ve veri etkileşimlerini yönetir.
   - `HttpClient` servisi, backend API ile iletişim kurarak verileri alır ve gönderir.
   - Modallar, form işlemleri ve kullanıcı etkileşimlerini yönetir.

3. **Veri Saklama**:
   - Kullanıcı bilgileri ve erişim token'ları `localStorage`'da saklanır.
   - Sosyal medya linkleri, tarayıcı kapalı olsa bile `localStorage`'da saklanır ve uygulama tekrar açıldığında yüklenir.
