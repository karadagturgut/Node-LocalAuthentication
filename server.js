const express= require('express');
const app = express();
app.use(express.json())
const bcrypt = require('bcrypt')
const kullanicilar = []

app.get('/kullanici',(req,res)=>{

    res.json(kullanicilar)
})

app.post('/kullanici/kayit', async (req,res)=>{
    
    try
    {
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(req.body.sifre,salt);
        console.log(salt);
        console.log(hashedPassword);

        const kullanici = {name:req.body.kullaniciAdi , sifre: hashedPassword}
        kullanicilar.push(kullanici)
        res.status(201).send;
    } catch
    {
        res.send.status(500);
    }
   
})

app.post('/kullanici/giris', async (req,res)=>{

    const kullanici = kullanicilar.find(kullanici => req.body.kullanici===kullanicilar.kullaniciAdi)
    if(kullanici==null)
    return res.status(500).send("Kullanıcı bulunamadı. :(")
    try{

    } catch{
        if (await bcrypt.compare(req.body.şifre,kullanici.şifre))
        {
            res.send('Giriş başarılı. Hoşgeldiniz! :)') 
        }else{
        res.send('Bilgilerinizi kontrol edip, tekrar deneyiniz.') 
    }
    }
})

app.listen(3000);