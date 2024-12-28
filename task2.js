const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());

const logging=(req,res,next)=>{
    let time=Date.now()
    console.log(`[${time}] Method:${req.method} URL:${req.url}`)
    next()
    
}

app.use(logging)
 app.get('/users',(req,res)=>{
     res.send("get")
 })
app.post('/users',(req,res)=>{
    res.send("post")
})
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });
