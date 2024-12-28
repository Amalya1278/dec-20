const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());

const validation = (req, res, next) => {
  const { username, email, password } = req.body;

  if (!username || username.length < 3) {
    return res.status(400).send('invalid username');
  }

if(!email.includes("@") || email.indexOf("@")==0 || email.indexOf("@")==email.length-1){
    return res.status(400).send("invalid email")
}

  if (!password || password.length < 6) {
    return res.status(400).send('invalid password');
  }

  next();
};

app.post('/users', validation, (req, res) => {
  res.status(200).send(`success`);
});
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
