const express = require("express");
const router = express.Router();
const authControllers = require("../controllers/authController.js");

const validator = require('../middlewares/validator.js');
const loginValidations = require('../middlewares/loginValidations.js');
const registerValidations = require('../middlewares/registerValidations.js');

router.get("/login", authControllers.login_get);
router.post("/login", loginValidations, validator, authControllers.login_post);
router.get("/register", authControllers.register_get);
router.post("/register", registerValidations, validator, authControllers.register_post);
router.get("/logout", authControllers.logout);

module.exports = router;
