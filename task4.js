const express = require('express');
const app = express();
const PORT = 3000;
app.use(express.json());
const sanitize=(req,res,next)=>{
    const {username,email,password}=req.body
    req.body.username=req.body.username.trim()
    req.body.email=req.body.email.trim()
    req.body.email=req.body.email.toLowerCase()
    next()
}
app.use(['/users','/products'],sanitize)
app.post('/users',(req,res)=>{
    res.send("data sanitized")
})
app.put('/products',(req,res)=>{
    res.send("data sanitized")
})
app.listen(PORT,()=>{
    console.log(`Server is running on http://localhost:${PORT}`)
})