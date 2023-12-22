const { validationResult } = require("express-validator");

const authControllers = {
    login_get: (req, res) => res.render("login", {title:'Login | FunkoShop'}),

    login_post:(req, res) => {

        const email = req.body.email;

        res.render("success", {title:'Login éxitoso..!', description: `Usuario con email ${email} logueado al sistema.`})
    },

    register_get: (req, res) => res.render("register",{title:'Registro | FunkoShop'}),
    register_post: (req, res) => {
   
        const {name, lastName, email} = req.body;
   
        res.render("success", {title:'Registro éxitoso..!', description: `Usuario ${name} ${lastName} con email ${email} registrado en el sistema.`})
    },
    logout: (req, res) => res.send("Route for logout View"),
}

module.exports = authControllers;
