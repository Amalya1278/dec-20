const express = require('express');
const app = express();
const PORT = 3001;

app.use(express.json());

const validateId = (req, res, next) => {
    if (!req.body.user_id) {
      return res.status(400).send("something is wrong with user_id" );
    }
    next();
  };
  
  const checkUserExists = (req, res, next) => {
    const user_id = req.body.user_id;
    const users = [{ id: 1, name: "james" }, 
        { id: 2, name: "tiko" },
    {id:3,name:"edo"}]; 
    
    const userExists = users.some(user => user.id === user_id);
    if (!userExists) {
      return res.status(404).send("User not found." );
    }
    next(); 
  };

  app.post('/orders', validateId, checkUserExists, (req, res) => {
    res.status(201).send( " successfull" );
  });
  app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });
  
