const fs = require ("fs")
const productosJSON = JSON.parse(fs.readFileSync("./data/producto.json","utf-8"))

const adminControllers = {
    admin: (req, res) => res.render("admin/admin",{productos:productosJSON,title:'Admin | FunkoShop'}),
    create_get: (req, res) => res.render("admin/create",{productos:productosJSON,title:'Admin-Create | FunkoShop'}),
    create_post: (req, res) => res.send(`Route for Item ${req.params.id} create_post admin View`),
    edit_get: (req, res) => {
        let producto = ""
        productosJSON.forEach(prod => {
            if (prod.product_id == req.params.id) {
                producto=prod
            }
        });
        res.render("admin/edit",{producto:producto, title:'Admin-Edit | FunkoShop'})
    },
    edit_put: (req, res) => res.send(`Route for edit_put item ${req.params.id} admin View`),
    delete: (req, res) => res.send(`Route for delete item ${req.params.id} admin View`)
}

module.exports = adminControllers; 