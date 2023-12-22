const express = require('express');
const router = express.Router();
const shopControllers = require('../controllers/shopController')

router.get("/", shopControllers.shop)
router.get("/item/:id", shopControllers.item)
router.post("/item/:id/add", (req, res) => res.send(`Route Item  ${req.params.id} Shop Add View`))
router.get("/cart", shopControllers.cart);
router.post("/cart/:id/add", shopControllers.addToCart);


module.exports = router;
