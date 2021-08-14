const exp = require('express');
const app = exp();

const countries=require("./modules/countries")
console.log(countries)
app.use(exp.json());


app.use("/",exp.static(__dirname + "/public"))

app.get("/countries",(req,res)=> {

  countries.countries()
  .then(data =>{
    res.send(data)
  })
  .catch(e=> {
    res.send({message:e.message})
  })

app.get('/contact', (req,res)=> {
  res.sendFile(__dirname + '/public/contact.html')
})

app.post('/login-fetch', (req,res)=> {
  const { firstname, lastname, email, subject } = req.body
  res.send({firstname, lastname, email, subject })
})


})

app.listen(5000)

