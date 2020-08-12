
const express = require('express');
const app = express();

app.use(express.static('./'));
app.listen(9090);

app.get('/roll',(req,res)=>{
  res.json({zahl:1 + Math.round(Math.random()*5)})
});
