# Proje Dökümantasyonu

## Uygulama Çalışma Prensibi

Bu dökümantasyon, Sosyal Medya ve Link Yönetim Uygulaması'nın nasıl çalıştığını özetlemektedir. Kullanıcılar uygulamayı kullanarak sosyal medya linklerini yönetebilir, arama ve sayfalama işlemleri yapabilirler.

## Backend Geliştirme Süreci

1. **Backend Klasörünün Oluşturulması:**
   - Backend için ayrı bir klasör oluşturuldu.
   - Node.js ve MongoDB bağlantısı sağlandı.
   - Gerekli npm paketleri yüklendi (örneğin, `express`, `mongoose`, `cors`, vb.).

2. **API Geliştirme:**
   - Kullanıcı yönetimi, sosyal medya linkleri ekleme, güncelleme ve silme işlemleri için API'ler oluşturuldu.
   - Kullanıcıların giriş ve kayıt işlemleri için `login` ve `register` API'leri eklendi.
   - API'ler Postman ile test edildi ve başarılı sonuçlar alındı.

   ## Frontend Geliştirme Süreci

1. **Atomic Design Yapısının Oluşturulması:**
   - Frontend için Atomic Design prensiplerine uygun bir yapı kuruldu.
   - Bileşenler, en küçük birimden (atom) en büyük yapıya (page) kadar düzenlendi.
   - **Atoms:** Buton, heading, ikon, input field, logo, search, text.
   - **Molecules:** Form grup, nullbar link, social icon grup.
   - **Organisms:** Modal, nullbar form, pagination table.
   - **Templates:** Homepage, login, register komponentleri.
   - **Pages:** Tüm bileşenler birleştirilerek app, homepage sayfaları oluşturuldu.

2. **Tasarım ve Stil:**
   - Figma'dan alınan tasarım verilerine uygun olarak buton, ikon gibi nesneler tasarlandı.
   - Tüm bileşenler responsive olacak şekilde tasarlandı, farklı cihaz boyutlarına uyum sağlandı.

3. **Servis ve Backend Entegrasyonu:**
   - Backend ile iletişim Angular servisleri üzerinden sağlandı.
   - API'lerden alınan veriler frontend tarafında kullanılarak uygulama dinamik hale getirildi.

### Projenin Çalışma Prensibi

1. **Kayıt (Register)**:

   - Kullanıcılar kayıt formunu kullanarak uygulamaya yeni bir hesap oluşturabilirler.
   - Kayıt formunda ad-soyad, kullanıcı adı, şifre gibi bilgiler girilir.
   - Başarılı bir kayıt işlemi sonrası kullanıcı, `localStorage`'a kaydedilir ve uygulama login sayfasına yönlendirilir.

2. **Giriş (Login)**:
   - Mevcut kullanıcılar, kullanıcı adı ve şifre bilgilerini kullanarak giriş yapabilirler.
   - Kullanıcı adı olarak `elifgokce` ve şifre olarak `1` kullanarak giriş testi yapabilirsiniz.
   - Giriş başarılı olduğunda, kullanıcı bilgileri ve erişim token'ı `localStorage`'a kaydedilir ve uygulamanın ana sayfasına (`/home`) yönlendirilir.
   - `elifgokce` kullanıcı adı ve `1` şifresi ile giriş yapılabilir.

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

## API Koleksiyonu

Projeye ait API isteklerini içeren Postman koleksiyonuna aşağıdaki bağlantıdan ulaşabilirsiniz:

- [API Koleksiyonu](./postman/api-collection.postman_collection.json)
