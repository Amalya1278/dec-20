const express = require('express');
const app = express();
const PORT = 3000;
app.use(express.json());
const mock=(req,res,next)=>{
    req.user={
        
        is_admin:false
    }
    next()
}
const isAdmin=(req,res,next)=>{
    if(req.user.is_admin){
        next()
    }
    else{
        res.send("you have no access because of your role")
    }
}

app.use(mock)
app.post('/products',isAdmin,(req,res)=>{
    res.send("you have access")
})
app.listen(PORT,()=>{
    console.log(`Server is running on http://localhost:${PORT}`)
})