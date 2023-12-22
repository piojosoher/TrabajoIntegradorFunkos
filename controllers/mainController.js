const fs = require ("fs")
const licencesJSON = JSON.parse(fs.readFileSync("./data/licence.json","utf-8"))
const productosJSON = JSON.parse(fs.readFileSync("./data/producto.json","utf-8"))

const mainControllers = {
    home: (req, res) => {
        let sliderItems = []
        productosJSON.forEach(producto => {
            if (producto.new) {
                sliderItems.push(producto)
            }
        });
        res.render("home", { title:'Home | FunkoShop', licences:licencesJSON, sliderItems:sliderItems, sliderTitulo: "Ultimos Lanzamientos"})
    },
    contact: (req, res) => res.render("contact", {title: 'Contacto | FunkoShop'}),
    contactOk: (req, res) => res.render("contactOk", {title: 'Contacto | FunkoShop'}),
    //about: (req, res) => res.send("Route for About View"),
    //faqs: (req, res) => res.send("Route for Faqs View")
}

module.exports = mainControllers;
