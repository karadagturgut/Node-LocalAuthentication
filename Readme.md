
# NodeJS-LocalAuthentication 

Bu uygulamada, yerel ortamda kullan�c� kayd� ve bu kay�tl� bilgilerle giri� yap�lmas�na y�nelik bir �al��ma yap�lm��t�r. Herhangi veritaban�
ba�lant�s� bulunmadan bilgiler, JSON veri format�nda tutulmaktad�r. 

JSON dizisi i�erisinde tutulan kullan�c� �ifresi, **bcrypt** eklentisi sayesinde korumal� olarak kaydedilecektir. bcrypt ile ilgili detayl� bilgiyi ve kullan�m�
i�in 'https://www.npmjs.com/package/bcrypt' adresini inceleyebilirsiniz.


## Gereksinimler:

Get ve Post metodlar�n� kullanmak ad�na **Postman** isimli uygulama 'https://www.getpostman.com/downloads/' adresinden edinilebilir. E�er yard�mc� uygulama y�klenmek
istenmiyorsa **Visual Studio Code** �zerinde �al��an, **rest-client** eklentisini 'https://marketplace.visualstudio.com/items?itemName=humao.rest-client' adresinden 
edinerek, proje i�erisindeki 'request.rest' dosyas�nda yaz�lm�� Get ve Post metodlar� ile uygulama test edilebilir. Ayr�ca 'npm install' komutu �al��t�r�larak, gerekli
ara�lar ve ba��ml�l�klar proje i�erisine y�klenir.


## Kullan�m:

Komut sat�r� �zerinden 'npm run devStart' yaz�larak uygulama �al��t�r�labilir. Bu ad�mdan �nce, 'npm install' komutu ile gerekli ara�lar ve ba��ml�l�klar� proje i�erisine
eklendi�inden emin olunuz. �stek �rnekleri �u �ekildedir:

- GET http://localhost:3000/kullanici : Kaydedilmi� kullan�c� ya da kullan�c�lar�n, Kullan�c� ad� ve korumal� �ifrelerini g�rebilece�iniz istek. 

- POST http://localhost:3000/kullanici/kayit : Kullan�c� kayd� istek sayfas�. Postman vb. bir uygulama ile test yap�lacaksa, 'kullaniciAdi' ve 'sifre' de�erlerine
istenilen de�erler girilerek i�lem yap�lmal�d�r.

- POST http://localhost:3000/kullanici/giris : Kay�tl� olan kullan�c�lar ile giri� yapma iste�i.  

