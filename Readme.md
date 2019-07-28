
# NodeJS-LocalAuthentication 

Bu uygulamada, yerel ortamda kullanýcý kaydý ve bu kayýtlý bilgilerle giriþ yapýlmasýna yönelik bir çalýþma yapýlmýþtýr. Herhangi veritabaný
baðlantýsý bulunmadan bilgiler, JSON veri formatýnda tutulmaktadýr. 

JSON dizisi içerisinde tutulan kullanýcý þifresi, **bcrypt** eklentisi sayesinde korumalý olarak kaydedilecektir. bcrypt ile ilgili detaylý bilgiyi ve kullanýmý
için 'https://www.npmjs.com/package/bcrypt' adresini inceleyebilirsiniz.


## Gereksinimler:

Get ve Post metodlarýný kullanmak adýna **Postman** isimli uygulama 'https://www.getpostman.com/downloads/' adresinden edinilebilir. Eðer yardýmcý uygulama yüklenmek
istenmiyorsa **Visual Studio Code** üzerinde çalýþan, **rest-client** eklentisini 'https://marketplace.visualstudio.com/items?itemName=humao.rest-client' adresinden 
edinerek, proje içerisindeki 'request.rest' dosyasýnda yazýlmýþ Get ve Post metodlarý ile uygulama test edilebilir. Ayrýca 'npm install' komutu çalýþtýrýlarak, gerekli
araçlar ve baðýmlýlýklar proje içerisine yüklenir.


## Kullaným:

Komut satýrý üzerinden 'npm run devStart' yazýlarak uygulama çalýþtýrýlabilir. Bu adýmdan önce, 'npm install' komutu ile gerekli araçlar ve baðýmlýlýklarý proje içerisine
eklendiðinden emin olunuz. Ýstek örnekleri þu þekildedir:

- GET http://localhost:3000/kullanici : Kaydedilmiþ kullanýcý ya da kullanýcýlarýn, Kullanýcý adý ve korumalý þifrelerini görebileceðiniz istek. 

- POST http://localhost:3000/kullanici/kayit : Kullanýcý kaydý istek sayfasý. Postman vb. bir uygulama ile test yapýlacaksa, 'kullaniciAdi' ve 'sifre' deðerlerine
istenilen deðerler girilerek iþlem yapýlmalýdýr.

- POST http://localhost:3000/kullanici/giris : Kayýtlý olan kullanýcýlar ile giriþ yapma isteði.  

