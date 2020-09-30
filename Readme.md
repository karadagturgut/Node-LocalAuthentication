
# Node-LocalAuthentication 

Bu uygulamada, yerel ortamda kullanıcı kaydı ve bu kayıtlı bilgilerle giriş yapılmasına yönelik bir çalışma yapılmıştır. Herhangi veritabanı
bağlantısı bulunmadan bilgiler, JSON veri formatında tutulmaktadır. 

JSON dizisi içerisinde tutulan kullanıcı şifresi, **bcrypt** eklentisi sayesinde korumalı olarak kaydedilecektir. bcrypt ile ilgili detaylı bilgiyi ve kullanımı
için 'https://www.npmjs.com/package/bcrypt' adresini inceleyebilirsiniz.


## Gereksinimler:

Get ve Post metodlarını kullanmak adına **Postman** isimli uygulama 'https://www.getpostman.com/downloads/' adresinden edinilebilir. Eğer yardımcı uygulama yüklenmek
istenmiyorsa **Visual Studio Code** üzerinde çalışan, **rest-client** eklentisini 'https://marketplace.visualstudio.com/items?itemName=humao.rest-client' adresinden 
edinerek, proje içerisindeki 'request.rest' dosyasında yazılmış Get ve Post metodları ile uygulama test edilebilir. Ayrıca 'npm install' komutu çalıştırılarak, gerekli
araçlar ve bağımlılıklar proje içerisine yüklenir.


## Kullanım:

Komut satırı üzerinden 'npm run devStart' yazılarak uygulama çalıştırılabilir. Bu adımdan önce, 'npm install' komutu ile gerekli araçlar ve bağımlılıkları proje içerisine
eklendiğinden emin olunuz. İstek örnekleri şu şekildedir:

- GET http://localhost:3000/kullanici : Kaydedilmiş kullanıcı ya da kullanıcıların, Kullanıcı adı ve korumalı şifrelerini görebileceğiniz istek. 

- POST http://localhost:3000/kullanici/kayit : Kullanıcı kaydı istek sayfası. Postman vb. bir uygulama ile test yapılacaksa, 'kullaniciAdi' ve 'sifre' değerlerine
istenilen değerler girilerek işlem yapılmalıdır.

- POST http://localhost:3000/kullanici/giris : Kayıtlı olan kullanıcılar ile giriş yapma isteği.  

