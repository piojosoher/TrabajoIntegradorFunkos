const express = require('express');
const router = express.Router();
const adminControllers = require('../controllers/adminController')


router.get("/", adminControllers.admin)
router.get("/create", adminControllers.create_get)
router.post("/create", adminControllers.create_post)
router.get("/edit/:id", adminControllers.edit_get)
router.put("/edit/:id", adminControllers.edit_put)
router.get("/delete/:id", adminControllers.delete)

module.exports = router;