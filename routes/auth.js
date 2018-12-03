const express = require('express');
const router = express.Router();
const authController = require("../controllers/authController");

router
  .route("/users/auth")
  .get(authController.auth);

  /*, (req,res) =>{
    res.status(200).json({
      isAdmin: req.user.role === 0 ? false : true,
      isAuth: true,
      email: req.user.email,
      name: req.user.name,
      lastname: req.user.lastname,
      role: req.user.role,
      history: req.user.history
    });
  });*/