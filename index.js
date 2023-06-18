const express = require("express");
const app = express();
const path =require("path")

app.listen(8080,()=>{
  console.log("lestening in port 8080");
}); 

const data = require('./data.json');

app.get('/', (req, res) => {
  console.log(encodeURIComponent(JSON.stringify(data)))
  res.render('index', { jsonData: encodeURIComponent(JSON.stringify(data)) });
});

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));


