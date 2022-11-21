require("dotenv").config();
require("./config/database").connect();
const bcrypt = require("bcrypt");
const express = require("express");
const jwt = require("jsonwebtoken");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

const User = require("./model/user");
const auth = require("./middleware/auth");

/*
- Get user input.
- Validate user input.
- Validate if the user already exists.
- Encrypt the user password.
- Create a user in our database.
- And finally, create a signed JWT token.
*/
app.post("/register", async (req, res) => {
  try {
    const { username, password } = req.body;

    // Validado todas as entradas.
    if (!(username && password)) {
      res.status(400).send("All input is required");
    }

    // Checando se já existe um usuario com o mesmo nome.
    const oldUser = await User.findOne({ username });

    if (oldUser) {
      return res.status(409).send("User Already Exist. Please Login");
    }

    // Encriptando a senha.
    encryptedPassword = await bcrypt.hash(password, 10);

    const user = await User.create({
      username,
      password: encryptedPassword,
    });

    // Criando token.
    const token = jwt.sign(
      { user_id: user.id, username },
      process.env.TOKEN_KEY,
      { expiresIn: "2h" }
    );

    // Salvando o token
    user.token = token;

    res.status(201).json(user);
  } catch (err) {
    console.log(err);
  }
});

/* 
- Get user input.
- Validate user input.
- Validate if the user exists.
- Verify user password against the password we saved earlier in our database.
And finally, create a signed JWT token
*/
app.post("/login", async (req, res) => {
  try {
    const { username, password } = req.body;

    // Validando a entrada.
    if (!(username, password)) {
      res.status(400).send("All input is required");
    }

    // Validando se o usuario existe no banco de dados.
    const user = await User.findOne({ username });

    if (user && (await bcrypt.compare(password, user.password))) {
      const token = jwt.sign(
        { user_id: user._id, username },
        process.env.TOKEN_KEY,
        {
          expiresIn: "2h",
        }
      );

      user.token = token;

      res.status(200).json(user);
    } else {
      console.log("Usuário não encontrado");
      res.status(404).json(user);
    }
  } catch (err) {
    console.log(err);
  }
});

app.post("/welcome", auth, (req, res) => {
  res.status(200).send("Welcome");
});

module.exports = app;
